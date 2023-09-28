Write-Host "This script will help you configure all PC components of EESP. (Editor, Live Viewer and Server)."
$choice = Read-Host "Is the VERTIgO Website running on this computer?`nSelect an option by typing the number:`n1) Yes`n2) No`nAnswer"

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

$componentList = @("EESP", "EESP_Editor_v1_00", "EESP_Server_v1_00", "EESP_LiveView_V1_00", "EESP_LifeView_V1_00")

# Loop over the list and log each string
foreach ($component in $componentList) {
    $EESPLocationPath = "$env:APPDATA\..\LocalLow\AltheriaSolutions\" + $component  # Path to the destination folder
    if (Test-Path -Path $EESPLocationPath -PathType Container) {
        $Config = "DOMAIN=http://$IPAddress`nDEVICE_NAME=$component`nIP_OVERWRITE="
        $Config | Set-Content -Path ($EESPLocationPath + "/config.txt")
        Write-Host "Updated the $component configuration"
    } else {
        #Write-Host "The directory $directoryPath does not exist."
    }
}
$null = Read-Host "Everything has been updated. Press ENTER to close the program"

$registryPath = "HKLM:\Software\YourCompany\YourKey"

# Check if the registry key exists
#if (-not (Test-Path -Path $registryPath)) {
#   # Create the registry key
#    New-Item -Path $registryPath -Force
#    Write-Host "Registry key $registryPath created."
#} else {
#    Write-Host "Registry key $registryPath already exists."
#}