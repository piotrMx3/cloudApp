#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

echo "========================================"
echo "Starting deployment: $(date)"
echo "========================================"

# 1. Go to project directory
echo "Navigating to project directory..."
cd ~/Docker/slot_machine

# 2. Pull latest images
echo "Pulling latest Docker images..."
docker compose pull

# 3. Restart containers
echo "Recreating containers..."
docker compose up -d --force-recreate

# 4. Cleanup
echo "Cleaning up old (dangling) images..."
docker image prune -f

echo "========================================"
echo "Deployment successful!"
echo "========================================"
