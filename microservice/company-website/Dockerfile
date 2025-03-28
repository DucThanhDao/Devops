# Stage 1: Build the Next.js app in standalone mode
FROM node:20 AS builder
WORKDIR /app

# Install dependencies
COPY package*.json .
RUN npm ci

# Copy source code and build
COPY . .
RUN NEXT_TELEMETRY_DISABLED=1 npm run build

# Stage 2: Create minimal production image
FROM node:20
WORKDIR /app

# Copy only the required files from the builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Expose port and start the server
EXPOSE 3000
CMD ["node", "server.js"]