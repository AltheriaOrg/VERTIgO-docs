---
sidebar_position: 2
title: Installation
---


# Installation
EESP consists of multiple programs that interact with eachother:
- **VR Application**: An app on a VR headset for trainees to participate in a training.
- **Editor**: A PC application for traininer to create and test a training.
- **Live Liewer**: A PC application for trainers to view a training and communicate withe the trainees.
- **Server**: A PC application that runs in the background that makes the training possible. The user is not means to interact with this program.
- **VERTIgO Console**: The website where you can manage headsets, users, launch trainings and view training reports. The website runs on a special web address that you can type in the address bar of you browser: [http://localhost:3000](http://localhost:3000). It's a good idea to bookmark this site.


In the current version of EESP, none of these applications are connected to the internet and are designed to run on your own hardware. This makes it a bit more complex to launch everything. 

It is also likely that you will have to repeat some of the setup steps multiple times again if move with your laptop and headsets to a different network.

:::info

In the future, the **VERTIgO Console** website and **Server** components will be hosted in the cloud where they can be accesses like any other website, significantly simplifying the process.

We are currently also working on other ways to make this setup simpler. You feedback if you are having difficulties in the mean time is greatly appreciated.

:::


## VERTIgO Console Setup
The website runs inside a programm called Docker Desktop with a blue whale icon, which should be located on the windows taskbar. You can add it there if it's not already. 
<img src="/img/docker-desktop-icon.png" alt="Docker Desktop Icon" width="50"/>

Image: The docker desktop icon.

### <a name="console-step-1"></a>Step 1: Start the website
Open "Docker Desktop". Make sure you have to "Containers" tab selected on the left.
![Docker Dekstop Off](/img/docker-desktop-off.png)
In the red section you can see 2 rows called **vertigo-back-end** and **vertigo-fronten-end**. If these rows are already green you can continue to the next step. In this image both are grayed out, meaning they are not running. Press the two "Play" buttons on the right to start the website. This can take up to 30 seconds.
![Docker Dekstop On](/img/docker-desktop-on.png)
The the icons are green and running. Go to [http://localhost:3000](http://localhost:3000) in your browser to confirm this.

### Step 2: (Optional) Reconfigure the website.
This step is typically only required the first time. However, after some time passes or you move with your laptop to a different network, this step will need to be repeated. If you are having a different issue with the website repeating this step might also help.

Sometimes the website will not work correctly. You can recognize this when:
- The website is not loading at all.
- We website is partially loading, but you get errors.
- The website looks empty without any users, trainings, ...

This happens when:
- You run the website the first time.
- You moved the laptop with the website to a different network.
- Sometimes after 

To fix this: 
1. Open the "Vertigo Console V1" folder on your desktop.
2. Right-Click on the **Update Vertigo Website Configuration.ps1** file. Contact us us if you do not have this file so we can provide it to you.
3. Select **Run With Powershell**. It will open a black or blue window on screen which will attempts to fix the issues automatically. 
![Docker Dekstop On](/img/update-vertigo-website-configuration.png)
The website will restart. Verify in Docker Desktop if everything is green (See step 1).

If you have the **Update Vertigo Website Configuration.ps1** but do not see the **Run With Powershell** option, see [this page.](/docs/general/troubleshooting/allow-powershell)


:::tip

If you have the technical knowledge, you can assign a static IP address to the laptop you are using. This will prevent that you will need to repeat this step as long as you stay on the same network. 
If you do not know what this means you can ignore this tip and use the **Update Vertigo Website Configuration.ps1** script instead.

:::


:::info

This setup process will no longer be needed when start hosting the website in the cloud.

:::

## EESP Editor
The EESP editor required that the **VERTIgO Console is also running on the same laptop**. Before you continue, verify that is is the case by [starting the website with Docker Desktop](#console-step-1).

### Step 1: Start the Editor
Start the EESP.exe in the **Desktop → EESP → editor** folder we provided.

## EESP Server
The EESP Server is only required the to launch a multiplayer training. **It is not required if you are using the Editor and simply want to create and test a training.**
### Step 1: Start the server
Start the EESP.exe in the **Desktop → EESP → server** folder we provided.
This will open a large window. You are not supposed to interact with this window so simply minimize it.
Keep this running as long as you are using EESP trainings. 

If training are failing to launch after starting a training using the VERTIgO console, there Server might be stuck. Close the server and start the .exe again. Launch the training again on the VERTIgO console.
