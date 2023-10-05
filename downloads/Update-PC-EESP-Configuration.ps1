Write-Host "This script will help you configure all PC components of EESP. (Editor, Live Viewer and Server)."
$choice = Read-Host "Is the VERTIgO Website running on this computer?`nSelect an option by typing the number:`n1) Yes`n2) No`nAnswer"

if ($choice -eq "1") {
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

$folders = Get-ChildItem -Path "$env:APPDATA\..\LocalLow\AltheriaSolutions\" -Directory | Where-Object { $_.Name -like "EESP*" }
foreach ($component in $folders) {
    $EESPLocationPath = "$env:APPDATA\..\LocalLow\AltheriaSolutions\" + $component  # Path to the destination folder
    if (Test-Path -Path $EESPLocationPath -PathType Container) {
        $Config = "DOMAIN=http://$IPAddress`nDEVICE_NAME=$component`nIP_OVERWRITE="
        $Config | Set-Content -Path ($EESPLocationPath + "/config.txt")
        Write-Host "Updated the $component configuration"
    } else {
        #Write-Host "The directory $directoryPath does not exist."
    }
}

Write-Host "The operation has completed. Press ENTER to close this program."
$null = Read-Host