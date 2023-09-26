---
sidebar_position: 1
---

# Run .ps1 files
If you are not able to run .ps1 files (Powershell Files), follow these instruction.
### 1. Open Powershell as Administrator
Open the windows search and type "Powershell". Select "Open as Administrator". This will open a blue or black window.
![Open Powershell as Administrator](/img/open-powershell-admin.png)
### 2. Insert this command commands.
Copy and and paste the command bellow to the powershell window (using ctrl+c & ctrl+v) and press enter.

`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted -Force;`

![Open Powershell as Administrator](/img/enable-ps1-scripts.png)
### 3. Close powershell
Close the window. The "Run with Powershell" option should appear and work correctly.