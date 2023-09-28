Write-Host "This script will help you configure a headset."
$choice = Read-Host "Is the VERTIgO Console Website running on this computer?`nSelect an option by typing the number:`n1) Yes`n2) No`nAnswer"

if ($choice -eq "1") {
    $IPAddress = (Get-NetIPAddress | Where-Object { $_.InterfaceAlias -like '*Wi-Fi*' -and $_.AddressFamily -eq 'IPv4' }).IPAddress
}
elseif ($choice -eq "2") {
    # User selected "No"
    $IPAddress =  Read-Host "Type the IP address of the computer where the website is located"
    # Add your actions for when the website is not running here
}
else {
    # User entered an invalid choice
    Write-Host "Error: Invalid choice. Please select 1 or 2. Press ENTER to exit."
    $null = Read-Host
    exit 1
}

$DeviceName =  Read-Host "Choose a name for this headset"

$Config = "DOMAIN=http://$IPAddress`
DEVICE_NAME=$DeviceName`
IP_OVERWRITE=
"

$Config | Set-Content -Path "config.txt"
Write-Host 'Saved the new configuration to "config.txt". Copying it to the Headset...'
$adbPath = "./platform-tools/adb.exe"
$adbCommand = "$adbPath push config.txt /sdcard/Android/data/com.AltheriaSolutions.EESP/files"
# Run the adb command
Invoke-Expression $adbCommand

Write-Host "The operation has completed. Press ENTER to close this program."
$null = Read-Host