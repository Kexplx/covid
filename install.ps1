# Install frontend packages
Write-Host "1/4: Installing frontend packages"
Set-Location frontend
npm i *>$null
Set-Location ..

# Install backend packages
Write-Host "2/4: Installing backend packages"
Set-Location backend
npm i *>$null
Set-Location ..

# Install backend packages
Write-Host "3/4: Creating .env file"
Set-Location backend
Copy-Item .env.example .env *>$null
Set-Location ..

# Install backend packages
Write-Host "4/4: Creating announcements.json file"
Set-Location backend
Copy-Item src/routes/announcements/announcements.example.json src/routes/announcements/announcements.json *>$null
Set-Location ..

Write-Host
Write-Host "Setup complete, please fill 'backend/.env' with credentials if you want to deploy from this machine." -ForegroundColor Green
