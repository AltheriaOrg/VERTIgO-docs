# Constants
$FrontendLocation = ".\VERTIgO-froten-end"
$FrontendEnvLocation = Join-Path -Path $FrontendLocation -ChildPath ".env"
$StartPath = $PWD.Path

# Check if the "frontend" folder exists, and create it if it doesn't
if (-not (Test-Path -Path $FrontendLocation -PathType Container)) {
    Write-Host 'Error: Did not find the "VERTIgO-froten-end" folder here. Are you sure this file in placed in the correct location?'
    exit 1
}

# Get the current IP address
$IPAddress = (Get-NetIPAddress | Where-Object { $_.AddressFamily -eq 'IPv4' -and $_.IPAddress -like '192.168*' -and $_.AddressState -eq 'Preferred'}).IPAddress
Write-Host = "Detected IP addresses: " $IPAddress
if ($IPAddress -ne $null) {
    if ($IPAddress.Count -gt 1) {
        $IPAddress = $IPAddress[0]
    } else {
        $IPAddress = $IPAddress
    }
} else {
    Write-Output "No active IP address starting found. Are you sure you are connected to the WI-FI or using a Internet Cable?"
    Write-Host "The operation has failed. Press ENTER to close this program."
    $null = Read-Host
    exit
}

Write-Host = "Configuring for IP address:" $IPAddress

# Define the content for the .env file
$EnvContent = " #Including the port (Default 8181 for Headset and 3001 for Main server)
PUBLIC_HEADSET_SERVER=$IPAddress`:8181
PUBLIC_MAIN_SERVER=$IPAddress`:3001
PUBLIC_API_PROTOCOL=http

JWT_SECRET_KEY=Secret
"

# Store the content in the .env file
$EnvContent | Set-Content -Path $FrontendEnvLocation

Write-Host "The VERTIgO website config has been updated. Please wait while the website is restarting..."

# Restart Docker
Set-Location -Path $FrontendLocation
$outputDown = docker-compose down 2>&1
if ($outputDown | Select-String "error during connect:") {
    Write-Host "Error: Make sure Docker Desktop is running. Press ENTER to exit."
    # You can add more custom error handling or exit the script here as needed.
    $null = Read-Host
    Set-Location -Path $StartPath
    exit 1
}

$outputUp = docker-compose up -d --build 2>&1

# Close the program
Set-Location -Path $StartPath
Write-Host "The operation has completed. Press ENTER to close this program."
$null = Read-Host