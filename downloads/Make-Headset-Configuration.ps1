Write-Host "This script will help you configure a headset."
Write-Host "Please make sure the headset is connected using USB and confirm the popup inside the headset to allow the connection."
$choice = Read-Host "Is the VERTIgO Console Website running on this computer?`nSelect an option by typing the number:`n1) Yes`n2) No`nAnswer"

if ($choice -eq "1") {
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

Write-Host = "Configuring for IP address:" $IPAddress

$DeviceName =  Read-Host "Choose a name for this headset"

$Config = "DOMAIN=http://$IPAddress`
DEVICE_NAME=$DeviceName`
IP_OVERWRITE=
"

$Config | Set-Content -Path "config.txt"
Write-Host 'Saved the new configuration to "config.txt". Copying it to the Headset...'
$adbPath = "./platform-tools/adb.exe"
Invoke-Expression "$adbPath devices"

$adbCommand = "$adbPath push config.txt /sdcard/Android/data/com.AltheriaSolutions.EESP_Reader_V1_00/files"
Invoke-Expression $adbCommand

$adbCommand = "$adbPath push config.txt /sdcard/Android/data/com.AltheriaSolutions.EESP_Reader_V1_01/files"
Invoke-Expression $adbCommand

Write-Host "The operation has completed. Press ENTER to close this program."
Write-Host "If something failed, please copy the config.txt file to the headset manually to Quest 2/Internal Storage/Android/data/com.AltheriaSolutions.XXXXXX/files"
$null = Read-Host