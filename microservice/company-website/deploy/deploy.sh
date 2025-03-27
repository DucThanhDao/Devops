export DOCKER_HOST=ssh://ubuntu@dayoneteams.com
# Build Docker image and deploy it into container on remote server.
docker-compose build new-website-d1
docker-compose up --no-deps -d new-website-d1


