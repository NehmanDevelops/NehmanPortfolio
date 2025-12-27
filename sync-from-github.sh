#!/bin/bash
# Sync project with latest version from GitHub
# This script ensures your local project matches the GitHub repository

echo "🔄 Syncing with GitHub..."

# Fetch latest changes
echo "📥 Fetching latest changes from GitHub..."
git fetch origin

# Discard local changes and reset to match GitHub
echo "🔄 Resetting to GitHub version..."
git reset --hard origin/main

# Pull latest changes
echo "⬇️ Pulling latest changes..."
git pull origin main

echo "✅ Project synced with GitHub successfully!"
echo "📦 Current commit: $(git rev-parse --short HEAD)"

