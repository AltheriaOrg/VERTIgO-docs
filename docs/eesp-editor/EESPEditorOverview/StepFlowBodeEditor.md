---
sidebar_position: 5
title: Step flow/Node Editor
---

  
## Overview 

 ![HUB](/img/25Overview.png)
  
In this window you can see and edit the different steps of the training. 

   ![HUB](/img/26Movestep.PNG)

- Move: Keep the middle mouse button press 

- Zoom: Scroll up and down inside the tab but outside of the node. 

![HUB](/img/27Stepsettings.PNG)

1. Node: represent each step you created. You can add more by clicking on Add node. The parameters of the selected step are shown on the right. 

2. Random node:  

![HUB](/img/28randomnode.png)

3. Create a connectable node that will randomize, by an equivalent amount, the possibility of transitioning into any of the steps connected to its output. This node can have only one input but can be connected to as many outputs as needed. 

  

4. Delete node: Delete the selected node in the editor.  

5. Center view: Recenter the view on the middle of the panel. 

 
## Node/Step 

  

On each node, you will be able to see multiple pieces of information about its content and what is happening inside of it. 

  ![HUB](/img/29NodeStep.PNG)

1. Name of the step 

Can be changed on the right side of the pannel. It is important to rename it for the trainer to know what is happening in it without having to goes into the detail. 
 

2. Condition group:  

A step is composed of the conditions and behaviors that need to be executed by the trainee to progress to the next step.  
Within a condition group, you can have as many behaviors as you wish. The trainee will only proceed to the next step when all the behaviors within a condition group are completed.  
You can add a condition group by pressing the '+' button. 
Each group has its own output. This means that if you want the training to vary depending on the trainee's actions, you can achieve that by adding multiple condition groups to a step. 

State: If a state (ex: fire) is given to the object that has a behavior. 
Object: The name of the object to which the behavior has been assigned. 
User: Will be added with V2. 

  

3. Step parameters: 

  

- Settings: Open the same tab as the one on the right in the editor panel.    
- Name: Where you can change the name of the selected step.   
- Free teleportation: Setting it off disables the ability of the trainee to teleport in VR.    
- Show step validation: Show an animation in vr at the end of the steps that told the trainee that he succedeed.    
- Reset: Force the trainee to start from the position the VR module is located.  
- Type of stage: First stage means that the ‘Reader will start from this step   
- Fade in/Out: Fade either in or out when a step is finished or start. Interesting to enable when you reset the VR module.   
 - Delete stage Node: Delete the selected step 
- Disconnect in: Disconnect the entry connection. If multiple steps are connected it disconnects them one by one starting from the first one that got plugged in. 
- Disconnect out: Disconnect the output connection. 
- Disconnect all: Disconnect all connections.  

 
4. Add condition group 

See .2 Condition group 


5. Entry 

 
The entry point is where you connect the condition group of the previous step. To connect them, click on an output and then the entry. An entry can have multiple outputs connected to it. 
 
 

6. Output(s) 


A node can have multiple outputs. Each condition group has one. When the condition is validated the output will be triggered. To link an output to an input click on the output and then select the input you want to connect it to. 
Multiple outputs can be connected to the same entry. 
