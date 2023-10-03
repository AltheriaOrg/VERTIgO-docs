---
sidebar_position: 2
title: Docker Installation
---

# Docker
Docker is a program required to runt he Vertigo Console on your own device. Make sure Docker Desktop is not yet installed before you continue.
# 1. Install WSL2
   1. Open Powershell as Administrator
   ![Open Powershell as Administrator](/img/open-powershell-admin.png)
   2. Type **wsl --install** and press enter. This can take some time. Reboot your device when its ready.
   3. A new black window fill appear after rebooting. Wait a bit longer until it asks for for a **unix username**
   ![WSL install](/img/wsl-install.png)
   
      username: VERTIGO
      
      Password: Use your device password

   4. Close the window

# 2. Install Docker Desktop
   1. Download docker desktop from here: https://www.docker.com/products/docker-desktop/
   2. No account is required. If it asks you for an account it can be skipped.
   3. Optional: Place Docker Desktop in the windows taskbar.

# 3. Run Vertigo Console for the first time
This setup is only required the first you run the VERTIgO Console after installing Docker Desktop.
   1. Navigate to the **Vertigo Console V1** folder on the Desktop
   2. Right click on the **VERTIgO-back-end** folder and select **Open in terminal**.
      ![WSL install](/img/vertigo-first-time.png)
   3. type **docker compose up -d** and press enter. This can take some time. You can close the windows when it's ready.
   4. Navigate back to the the **Vertigo Console V1** folder on the Desktop
   5. Right click on the **VERTIgO-fronten-end** folder and select **Open in terminal**.
   6. type **docker compose up -d** and press enter. This can take some time. You can close the windows when it's ready.
   7. Confirm everything is working: Open Docker Desktop and navigate to the containers tab.
   ![Docker Dekstop On](/img/docker-desktop-on.png)
   It should show 2 rows with a green icon on the left. Open [http://localhost:3000](http://localhost:3000) to confirm the website is loading.

# 4. Create the default login
   1. Make sure the website is running.
   2. Go to [http://localhost:3001/seed](http://localhost:3001/seed) in you browser. This should show a simple page with some text.
   3. Find the temporary password at the bottom or the right. Copy the password using CTRL+C or write it down. Normally its random letters and numbers.
   4. Go to the login page at [http://localhost:3000](http://localhost:3000)
   5. Login using:

      **email**: admin@altheria.com

      **password**: Paste or type the random password

   6. Log in. Change the password to whatever you like.