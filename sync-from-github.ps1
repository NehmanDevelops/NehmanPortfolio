# Sync project with latest version from GitHub
# This script ensures your local project matches the GitHub repository

Write-Host "🔄 Syncing with GitHub..." -ForegroundColor Cyan

# Fetch latest changes
Write-Host "📥 Fetching latest changes from GitHub..." -ForegroundColor Yellow
git fetch origin

# Discard local changes and reset to match GitHub
Write-Host "🔄 Resetting to GitHub version..." -ForegroundColor Yellow
git reset --hard origin/main

# Pull latest changes
Write-Host "⬇️ Pulling latest changes..." -ForegroundColor Yellow
git pull origin main

Write-Host "✅ Project synced with GitHub successfully!" -ForegroundColor Green
Write-Host "📦 Current commit: $(git rev-parse --short HEAD)" -ForegroundColor Cyan

