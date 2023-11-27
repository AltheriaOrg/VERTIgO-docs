---
sidebar_position: 1
title: Online Installation
---


This page will guide you through the installation steps for the online version of EESP. The online version connects to the EESP Console hosted on AWS at [https://vertigo.altheria.com](https://vertigo.altheria.com). Therefore, this setup requires internet connection to work. If your organization has strict security requirements you can install the EESP Console on your own infrastructure completely disconnected from the internet.

The online installation is by far the easiest and is recommended for most users.

# Step 1: Download the files
The Editor, VR Reader and Live Viewer will be distributed using a download link provided by Altheria. 


# Step 2: Run the Editor
Launch the EESP Editor .exe file and log in using your account. If you do not have an account yet you need to contact your organization administrator who will create your account.
![editor-login.png](/img/editor-login.png)
The domain field is the address of the EESP Console you will be connecting to and does not need to be modified if you with to use the online EESP Console.
The editor can the headset in tethered mode (usb cable) can already be used without any more setup. Please continue to step 3 to complete the installation process so you can launch multiplayer sessions.


# Step 3: Install the EESP Reader on the headsets
Connect the headsets to the computer using a USB cable. On the right panel of the editor it should say a headset is connected. If this is not the case, you might need to confirm a popup inside the VR headset.
![install-apk.png](/img/install-apk.png)
Press the **Install APK** button and select the .apk file that you downloaded. The installation process will begin and should not take longer than a couple minutes.
The **Connect Headset** button is used to set the EESP Console that the headset will use to the EESP Console the editor is currently using. This is only required if you want to switch the headset from the Online EESP to an Offline EESP console or the reverse.

# Step 4: Add Headset To Console
Navigate to the headsets page on the [EESP Console](https://vertigo.altheria.com) and press the "Add Headset" button. This will open a popup window.

![console-add-headset.png](/img/console-add-headset.png)

Launch the EESP Reader Application in the VR headset.

![console-add-headset-popup.png](/img/console-add-headset-popup.png)

Press the + button in the Console to add the headset. You can rename the headset by navigating back to the Headsets page and pressing the triple dots button on the headset.
After adding the headset for the first time you need to restart the Reader app before you can start using it.

# Step 5: Setup Live Viewer
Press the **Connect Live Viewer** button.
![connect-live-viewe.png](/img/connect-live-viewer.png)
A file with the name **register_live_viewer.reg** will be created in the folder where you installed the EESP Editor. Open the **register_live_viewer.reg** and accept the popup window.
![run-reg-file.png](/img/run-reg-file.png)
The installation is now complete.