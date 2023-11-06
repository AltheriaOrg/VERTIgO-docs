---
sidebar_position: 5
title: Flowchart/Node Editor
---

  
## Overview 


  
In this window you can see and edit the different nodes of the training. 

   ![HUB](/img/26Movestep.PNG)

- Move: Keep the middle mouse button press 

- Zoom: Scroll up and down inside the tab but outside of the node. 

![HUB](/img/27Stepsettings.PNG)

1. Node: represent each node you created. You can add more by clicking on Add node. The parameters of the selected node are shown on the right. 

2. Random node:  

![HUB](/img/28randomnode.png)

Create a connectable node that will randomize, by an equivalent amount, the possibility of transitioning into any of the nodes connected to its output. This node can have only one input but can be connected to as many outputs as needed. 

  

4. Delete node: Delete the selected node in the editor.  

5. Center view: Recenter the view on the middle of the panel. 

 
## Node

  

On each node, you will be able to see multiple pieces of information about its content and what is happening inside of it. 

  ![HUB](/img/29NodeStep.PNG)

1. Name of the node 

Can be changed on the right side of the pannel. It is important to rename it for the trainer to know what is happening in it without having to goes into the detail. 
 

2. Task group:  

A node is composed of the Tasks and behaviors that need to be executed by the trainee to progress to the next node.  
Within a Task group, you can have as many behaviors as you wish. The trainee will only proceed to the next node when all the behaviors within a Task group are completed.  
You can add a Task group by pressing the '+' button. 
Each group has its own output. This means that if you want the training to vary depending on the trainee's actions, you can achieve that by adding multiple Task groups to a node. 

State: If a state (ex: radioacctive) is given to the object that has a behavior. 
Object: The name of the object to which the behavior has been assigned. 
User: Will be added with V2. 

  

3. node parameters: 

  

- Settings: Open the same tab as the one on the right in the editor panel.    
- Name: Where you can change the name of the selected node.   
- Free teleportation: Setting it off disables the ability of the trainee to teleport in VR.    
- Show node validation: Show an animation in vr at the end of the nodes that told the trainee that he succedeed.    
- Reset: Force the trainee to start from the position the VR trainee is located.  
- Type of stage: First stage means that the ‘Reader will start from this node   
- Fade in/Out: Fade either in or out when a node is finished or start. Interesting to enable when you reset the VR trainee.   
 - Delete stage Node: Delete the selected node 
- Disconnect in: Disconnect the entry connection. If multiple nodes are connected it disconnects them one by one starting from the first one that got plugged in. 
- Disconnect out: Disconnect the output connection. 
- Disconnect all: Disconnect all connections.  

 
4. Add Task group 

See .2 Task group 


5. Entry 

 
The entry point is where you connect the Task group of the previous node. To connect them, click on an output and then the entry. An entry can have multiple outputs connected to it. 
 
 

6. Output(s) 


A node can have multiple outputs. Each Task group has one. When the Task is validated the output will be triggered. To link an output to an input click on the output and then select the input you want to connect it to. 
Multiple outputs can be connected to the same entry. 
