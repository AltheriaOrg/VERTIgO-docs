function Search-Directory {
    param(
        [string]$path,
        [string]$targetName,
        [int]$depth
    )
    if ($depth -lt 0){
        return
    }

    # Get all items (files and directories) in the current path
    $items = Get-ChildItem -Path $path
    # Iterate through each item
    foreach ($item in $items) {
        # If the current item matches the target name, output the full path
        if ($item.Name -like $targetName) {
            return $item.FullName
        }

        # If the current item is a directory, recursively search within it
        if ($item.PSIsContainer) {
            Search-Directory -path $item.FullName -targetName $targetName -depth ($depth - 1)
        }
    }
}

$scriptPath = $PSScriptRoot

$EESPLiveViewFolder = Search-Directory -path "$scriptPath/../" -targetName "LiveView" -depth 5
if ($null -eq $EESPLiveViewFolder){
    Write-Output "Did not find the EESP software folder. Please make sure the EESP folder with the software is located on the Desktop and the Vertigo Console V1 folder is also on the Desktop." 
    Write-Output "Could not complete the operation. Press ENTER to close this program."
    Exit
}
$EESPLiveViewExe = Search-Directory -path $EESPLiveViewFolder -targetName *LiveView*.exe -depth 5
if ($null -eq $EESPLiveViewExe){
    Write-Output "Did not find the LiveView software. Please make sure the EESP folder with the software is located on the Desktop and the Vertigo Console V1 folder is also on the Desktop." 
    Write-Output "Could not complete the operation. Press ENTER to close this program."
    Exit
}
$EESPLiveViewExe = $EESPLiveViewExe -replace "\\", "\\"
$EESPLiveViewExe = $EESPLiveViewExe + "\"

# Generate .reg file content
$regContent = @"
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\EESP]
@="URL:EESP Protocol"
"URL Protocol"=""

[HKEY_CLASSES_ROOT\EESP\shell]

[HKEY_CLASSES_ROOT\EESP\shell\open]

[HKEY_CLASSES_ROOT\EESP\shell\open\command]
@="\"$EESPLiveViewExe" \"%1\""
"@

# Save the content to a .reg file
$regContent | Out-File -FilePath "$scriptPath/Register Live Viewer.reg"


Write-Host "A 'Register Live Viewer.reg' file has been created. Please open this file to configure the live viewer."
Write-Host "The operation has completed. Press ENTER to close this program."
$null = Read-Host