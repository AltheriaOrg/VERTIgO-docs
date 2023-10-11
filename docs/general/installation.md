---
sidebar_position: 1
title: Installation
---


## Introduction
EESP consists of multiple programs that interact with each other:
- **VR Application**: An app on a VR headset for trainees to participate in a training sessions.
- **Editor**: A PC application for trainer to create and test a training.
- **Live Liewer**: A PC application for trainers to view a training and communicate with the trainees.
- **Server**: A PC application that runs in the background that makes the training possible. The user is not means to interact with this program.
- **VERTIgO Console**: The website where you can manage headsets, users, launch trainings and view training reports. The website runs on a special web address that you can type in the address bar of you browser: [http://localhost:3000](http://localhost:3000). It's a good idea to bookmark this site for easy access.


In the current version of EESP, none of these applications require an internet connection and are designed to run on your local hardware. Because of this, the setup can be somewhat complex.

Additionally, you may need to repeat some of the setup steps if you move your laptop and headsets to a different network.

:::info

In the future, the **VERTIgO Console** website and **Server** components will be hosted in the cloud where they can be accesses like any other website, significantly simplifying the process.

We are currently also working on other ways to make this setup simpler. You feedback if you are having difficulties in the mean time is greatly appreciated.

:::

## Installation Tools
All the EESP components need to be configured for you network. This also means that the components need to be reconfigured if you move to a different location/network or the network changes.
To help you, we provide some simple tools (called scripts) to mostly automate this process.
Please download these scripts and place them inside the ***Desktop → Vertigo Console V1*** folder.
1. <a target="_blank" href="/downloads/Update-Vertigo-Website-Configuration.ps1" download='Update Vertigo Website Configuration.ps1'>Download: Update Vertigo Website Configuration.ps1</a>
2. <a target="_blank" href="/downloads/Update-PC-EESP-Configuration.ps1" download='Update PC EESP Configuration.ps1'>Download: Update PC EESP Configuration.ps1</a>
3. <a target="_blank" href="/downloads/Make-Headset-Configuration.ps1" download='Make Headset Configuration.ps1'>Download: Make Headset Configuration.ps1</a>
4. <a target="_blank" href="/downloads/Configure-Live-Viewer.ps1" download='Configure Live Viewer.ps1'>Download: Configure Live Viewer.ps1</a>
5. <a target="_blank" href="/downloads/platform-tools.zip" download='platform-tools.zip'>Download: platform-tools.zip</a>. Extract the zip file and place platform-tools to the Desktop → Vertigo ConsoleV1

![Folder Setup](/img/folder-setup.png)

If you have never run a .ps1 script on you computer, please follow the instruction on [this page](/docs/general/troubleshooting/allow-powershell) before you continue.

## VERTIgO Console Setup
The website runs inside a program called Docker Desktop. Locate and open "Docker Desktop." You can find its icon with a blue whale on the Windows taskbar. If you don't see it there, you may need to add it.
<img src="/img/docker-desktop-icon.png" alt="Docker Desktop Icon" width="50"/>

If docker is not yet installed, follow the instructions [here](/docs/general/docker-installation)

Image: The docker desktop icon.

### <a name="console-step-1"></a>Step 1: Start the website
Open "Docker Desktop". Ensure you have the "Containers" tab selected on the left sidebar.
![Docker Dekstop Off](/img/docker-desktop-off.png)
In the red section you can see 2 rows called **vertigo-back-end** and **vertigo-froten-end**. If these rows are already green you can continue to the next step. In this image both are grayed out, which means they are not running. Press the two "Play" buttons on the right to start the website. This can take up to 30 seconds.
![Docker Dekstop On](/img/docker-desktop-on.png)
The the icons are now green and the website is running. Browse to [http://localhost:3000](http://localhost:3000) in your browser to confirm this.

### Step 2: Reconfigure the website.
This step is typically only required the first time. However, after some time passes or you move with your laptop to a different network, this step will need to be repeated. If you are having a different issue with the website repeating this step might also help.

Sometimes the website will not work correctly. You can recognize this when:

- The website is not loading at all.
- We website is partially loading, but you get errors.
- The website looks empty without any users or trainings.

These issues can occur when:

- You are running the website for the first time.
- You have relocated your laptop to a different network.
- After some time passes this will happen because of  

If you face any of these issues, consider following the steps below to reconfigure the website.

1. Open the ***Desktop → Vertigo Console V1*** folder on your desktop.
2. Right-Click on the **Update Vertigo Website Configuration.ps1** file. 
3. Select **Run With Powershell**. It will open a black or blue window on screen which will attempts to fix the issues automatically. 
![Docker Desktop On](/img/update-vertigo-website-configuration.png)
The website will restart. Verify in Docker Desktop if everything is green (See step 1).

If you have the **Update Vertigo Website Configuration.ps1** but do not see the **Run With Powershell** option, it immediately closes or gives a red error, see [this page](/docs/general/troubleshooting/allow-powershell) and try again.


:::tip

If you have the technical knowledge, you can assign a static IP address to the laptop you are using. This will prevent that you will need to repeat this step as long as you stay on the same network. 
If you do not know what this means you can ignore this tip and use the **Update Vertigo Website Configuration.ps1** script instead.

:::


:::info

This setup process will no longer be needed when start hosting the website in the cloud.

:::


## EESP PC applications
Just like the Console, the PC applications might need to configured for your network for which we provide another script to automate the process. <a target="_blank" href="/downloads/Update-PC-EESP-Configuration.ps1" download='Update PC EESP Configuration.ps1'>You can download the script here</a> and place it inside the ***Desktop → Vertigo Console V1*** folder next to the script from the previous steps.

If you are having connection issues, running this script can help. Follow these steps.
1. Open the ***Desktop → Vertigo Console V1*** folder in explorer.
2. Right click on the **Update PC EESP Configuration.ps1** file
3. Follow the instruction inside the black or white window.

If you have the **Update PC EESP Configuration.ps1** but do not see the **Run With Powershell** option, it immediately closes or gives a red error, see [this page](/docs/general/troubleshooting/allow-powershell) and try again.

### EESP Editor
The EESP editor requires that the **VERTIgO Console is also running on the same laptop** website is running. Before you continue, verify that is is the case by open the website in your browser and logging in. If this does not work, follow the steps [starting the website with Docker Desktop](#step-1-start-the-website).

#### Step 1: Start the Editor
Start the **EESP.exe** in the **Desktop → EESP → editor** folder we provided.

### EESP Server
The EESP Server is only required the to launch a multiplayer training. **It is not required if you are using the Editor and simply want to create and test a training.**
#### Step 1: Start the server
Start the **EESP.exe** in the **Desktop → EESP → server** folder we provided.
This will open a large window. You are not supposed to interact with this window so simply minimize it.
Keep this running as long as you are using EESP trainings. 

If training are failing to launch after starting a training using the VERTIgO console, the Server might be stuck. Close the server and start the .exe again. Launch the training again on the VERTIgO console.

### EESP VR application
The VR applications also needs to be configured for your network and re-configured when you move to a different location/network.
1. Connect you VR headset to the laptop using a cable.
2. Put on the headset and confirm the popup to allow the USB connection."
3. Open the ***Desktop → Vertigo Console V1*** folder in explorer.
4. Right click on the **Update PC EESP Configuration.ps1** file
5. Follow the instruction inside the black or white window.

If you see **adb: error: failed to get feature set: device unauthorized.**, please check the headset for an "Enable USB debugging" popup and confirm it. Start again from step 1.
 
This will create a new file in the same folder called **config.txt** and it will attempt to copy it to the headset. If this fails, copy it manually inside the folder bellow:
`Quest 2/Internal Storage/Android/data/com.AltheriaSolutions.XXXXXX/files`
*Names can vary depending on you language settings.

![Docker Desktop On](/img/headset-config-ok.png)
If you windows looks like this image, it completed successfully.

To confirm if everything is working, try adding the headset to the Console or confirm it comes online if the headset was already added before.
See the dedicated guide for adding headsets for more instructions.