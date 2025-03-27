#!/bin/bash

# Script to manage Nginx apps: add, remove, enable, or disable

# Constants
NGINX_CONF_DIR="/d/DThanh/MY_TRAINING/Docker/nginx"
SITES_AVAILABLE="${NGINX_CONF_DIR}/sites-available"
SITES_ENABLED="${NGINX_CONF_DIR}/sites-enabled"
UPSTREAMS_FILE="${NGINX_CONF_DIR}/conf.d/upstreams.conf"
SSL_SNIPPET="${NGINX_CONF_DIR}/snippets/ssl-settings.conf"
PROXY_SNIPPET="${NGINX_CONF_DIR}/snippets/proxy-settings.conf"
SECURITY_SNIPPET="${NGINX_CONF_DIR}/snippets/security-headers.conf"

# Usage function
usage() {
    echo "Usage: $0 {add|remove|enable|disable} --app <app_name> [--domain <domain>] [--upstream <host:port>] [--enable <true|false>]"
    echo "  add: Adds a new app with the given name, domain, and upstream."
    echo "  remove: Removes an app by disabling it (optionally deletes config)."
    echo "  enable: Enables an existing app by linking it to sites-enabled."
    echo "  disable: Disables an app by removing it from sites-enabled."
    echo "Options:"
    echo "  --app        App name (e.g., dayone-dev) [required]"
    echo "  --domain     Domain name (e.g., dayone-dev.odoocloud.sh) [required for add]"
    echo "  --upstream   Upstream host:port (e.g., odoo_dev:8069) [required for add]"
    echo "  --enable     Enable on add (true/false, default: true) [optional for add]"
    exit 1
}

# Check if Nginx is running and reload it
reload_nginx() {
    echo "Testing Nginx configuration..."
    nginx -t || { echo "Nginx config test failed!"; exit 1; }
    echo "Reloading Nginx..."
    nginx -s reload || { echo "Nginx reload failed!"; exit 1; }
}

# Add a new app
add_app() {
    local app_name="$1"
    local domain="$2"
    local upstream="$3"
    local enable="${4:-true}"  # Default to true if not provided

    # Validate inputs
    if [[ -z "$app_name" || -z "$domain" || -z "$upstream" ]]; then
        echo "Error: --app, --domain, and --upstream are required for 'add'."
        usage
    fi
    if [[ "$enable" != "true" && "$enable" != "false" ]]; then
        echo "Error: --enable must be 'true' or 'false'."
        usage
    fi

    # Check if app already exists
    if [[ -f "${SITES_AVAILABLE}/${app_name}.conf" ]]; then
        echo "Error: App '${app_name}' already exists in sites-available."
        exit 1
    fi

    # Add upstream
    echo "Adding upstream for ${app_name}..."
    cat <<EOF >> "${UPSTREAMS_FILE}"
upstream ${app_name} {
    ip_hash;
    server ${upstream};
}
EOF

    # Create site config
    echo "Creating site config for ${app_name} in sites-available..."
    cat <<EOF > "${SITES_AVAILABLE}/${app_name}.conf"
# HTTP to HTTPS redirect
server {
    listen 80;
    server_name ${domain};
    # return 301 https://\$host\$request_uri;
    
    # Proxy to upstream
    location / {
        proxy_pass http://${app_name}/;
        include ${PROXY_SNIPPET};
    }

    # Security headers
    include ${SECURITY_SNIPPET};
}

# HTTPS server
server {
    listen 443 ssl http2;
    server_name ${domain};

    # Include SSL settings
    include ${SSL_SNIPPET};

    # Proxy to upstream
    location / {
        proxy_pass http://${app_name}/;
        include ${PROXY_SNIPPET};
    }

    # Security headers
    include ${SECURITY_SNIPPET};
}
EOF

    # Enable the site if specified
    if [[ "$enable" == "true" ]]; then
        echo "Enabling ${app_name}..."
        ln -sf "${SITES_AVAILABLE}/${app_name}.conf" "${SITES_ENABLED}/${app_name}.conf"
        reload_nginx
        echo "App '${app_name}' added and enabled successfully."
    else
        echo "App '${app_name}' added to sites-available but not enabled."
    fi
}

# Remove an app
remove_app() {
    local app_name="$1"

    # Validate input
    if [[ -z "$app_name" ]]; then
        echo "Error: --app is required for 'remove'."
        usage
    fi

    # Check if app exists
    if [[ ! -f "${SITES_AVAILABLE}/${app_name}.conf" ]]; then
        echo "Error: App '${app_name}' not found in sites-available."
        exit 1
    fi

    # Disable the site
    echo "Disabling ${app_name}..."
    rm -f "${SITES_ENABLED}/${app_name}.conf"

    # Optionally remove upstream and config (uncomment for full cleanup)
    # echo "Removing upstream for ${app_name}..."
    # sed -i "/upstream ${app_name} {/,/}/d" "${UPSTREAMS_FILE}"
    # echo "Removing config for ${app_name}..."
    # rm -f "${SITES_AVAILABLE}/${app_name}.conf"

    reload_nginx
    echo "App '${app_name}' disabled successfully."
}

# Enable an existing app
enable_app() {
    local app_name="$1"

    # Validate input
    if [[ -z "$app_name" ]]; then
        echo "Error: --app is required for 'enable'."
        usage
    fi

    # Check if app exists in sites-available
    if [[ ! -f "${SITES_AVAILABLE}/${app_name}.conf" ]]; then
        echo "Error: App '${app_name}' not found in sites-available."
        exit 1
    fi

    # Check if already enabled
    if [[ -f "${SITES_ENABLED}/${app_name}.conf" ]]; then
        echo "App '${app_name}' is already enabled."
        exit 0
    fi

    # Enable the site
    echo "Enabling ${app_name}..."
    ln -sf "${SITES_AVAILABLE}/${app_name}.conf" "${SITES_ENABLED}/${app_name}.conf"
    reload_nginx
    echo "App '${app_name}' enabled successfully."
}

# Disable an app
disable_app() {
    local app_name="$1"

    # Validate input
    if [[ -z "$app_name" ]]; then
        echo "Error: --app is required for 'disable'."
        usage
    fi

    # Check if app is enabled
    if [[ ! -f "${SITES_ENABLED}/${app_name}.conf" ]]; then
        echo "App '${app_name}' is already disabled or not found."
        exit 0
    fi

    # Disable the site
    echo "Disabling ${app_name}..."
    rm -f "${SITES_ENABLED}/${app_name}.conf"
    reload_nginx
    echo "App '${app_name}' disabled successfully."
}

# Parse arguments
ACTION=""
APP_NAME=""
DOMAIN=""
UPSTREAM=""
ENABLE="true"  # Default for add action

while [[ $# -gt 0 ]]; do
    case "$1" in
        add|remove|enable|disable)
            ACTION="$1"
            shift
            ;;
        --app)
            APP_NAME="$2"
            shift 2
            ;;
        --domain)
            DOMAIN="$2"
            shift 2
            ;;
        --upstream)
            UPSTREAM="$2"
            shift 2
            ;;
        --enable)
            ENABLE="$2"
            shift 2
            ;;
        *)
            usage
            ;;
    esac
done

# Execute action
case "$ACTION" in
    add)
        add_app "$APP_NAME" "$DOMAIN" "$UPSTREAM" "$ENABLE"
        ;;
    remove)
        remove_app "$APP_NAME"
        ;;
    enable)
        enable_app "$APP_NAME"
        ;;
    disable)
        disable_app "$APP_NAME"
        ;;
    *)
        usage
        ;;
esac