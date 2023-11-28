---
sidebar_position: 2
title: Offline Installation
---

This page will assist you in setting up the EESP software on your own infrastructure disconnected from the internet. This is the recommended method for organizations with stricter security requirements. 
This method is more complex and will require some technical knowledge about networking.
This page will provide an example of how to set up the software, but you are free to expand on this to fit the needs of your organization better.

# Requirements:
1. **A computer:** This Windows or Linux computer will act as a server for the EESP Console and the multiplayer sessions.

    1.1. This computer also needs [Docker](https://docs.docker.com/engine/install/) installed. If you are using Linux, make sure [Docker Compose](https://docs.docker.com/compose/install/) is also installed.
2. **A WI-FI network:** This network does not need to be connected to the internet. The computer and headsets need to be connected to this network.
3. **A static IP address**: The IP address of the computer should remain the same. If the IP address changes, you will need to repeat some of the installation process to switch to the new IP address.

The online installation is by far the easiest and is recommended for most users. The offline installation should be done by someone with more technical knowledge.

# Example Setup
This sections will provide a simple example of how the EESP software can be set up on your infrastructure.
## Step 1: Configuring the Console
Some settings in the console need to be updated before you can launch it.
Navigate to the root directory of the Console.
Open the `.env` file. The first lines of the file contain some options that need to be configured. If the .env file in not visible, make sure hidden items are enabled in your file explorer settings.

- JWT_SECRET_KEY: This should be complex combination of letters, numbers and symbols.
- DEFAULT_EMAIL: The email address that will be used for the System Administrator account.
- PASSWORD_EXPIRATION: Passwords will need to be changed every 60 days by default. This can be disabled by using **-1** instead.

![Env Config](/img/env-config.png)

open the `.env` file in the **VERTIgO-froten-end** folder.

- PUBLIC_HEADSET_SERVER: The IP address of the Console computer followed by the port. **Example: 192.168.1.100:8181**
- PUBLIC_MAIN_SERVER: The IP address of the Console computer followed by the port. **Example: 192.168.1.100:3001**
- PUBLIC_API_PROTOCOL: The offline Console will use HTTP by default. HTTPS can be configured using a reverse proxy such as Nginx. This is outside of the score for this document.
- JWT_SECRET_KEY: This has to be the same JWT_SECRET_KEY you used in the previous **.env** file.

![Frontend Env Config](/img/frontend-env-config.png)

Navigate to the root of the Console in a terminal application. Type `docker-compose up --build -d`. The first time installation will require internet connection to download some required components. If your current network does not have internet you can temporarily switch your computer to a different network with internet connection and switch back to the offline network when the installation has completed.
You can verify that the console is running by opening the Docker Desktop program on windows and check if all boxed inside the **vertigo-full-stack** container are green. ![Console is running](/img/console-is-running.png)

Open your browser and navigate to **http://you-ip-address:8080**. If the login screen appears, it is set up correctly.

![Console Login](/img/console-login.png)

## Step 2: Creating the Admin user
Open your browser and navigate to **http://you-ip-address:3000/seed**. This page will generate the user you configured inside the `.env` file earlier using a random password. Find the random password on the page and copy it to the clipboard. Navigate to **http://you-ip-address:8080** to login using the email and random password and follow the instructions to choose a new password.

## Step 3: Connecting the editor, headsets and live viewer.
Please follow the same instructions provided on the [Online Installation Guide](/docs/general/Online-installation) but replace **https://vertigo.altheria.com** with the IP address of your Console server, for example **http://192.168.1.100**. Return to this page after you completed all steps.

## Step 4: Launching a multiplayer server.
This section is a work in progress and will be updated soon.
