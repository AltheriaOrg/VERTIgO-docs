---
sidebar_position: 3
title: Hierarchy
---

## 1.Overview 
 

The hierarchy is a list of all the elements that are accessible inside the 3D view. You can select them, and all the elements related to it will appear in both the Scene view and the inspector. 

 
If an object of the list is gray, that means that it is inactive inside the current step you are on. 

 

It is possible to move an object from the list into another to group them. This is useful for objects that need to move together. 

 
![HUB](/img/11Hierarchy.png)
 

1.Objects can be viewed inside the Sceneview. 

2.They can be selected or not in the Sceneview. 

3.You can see the type of the object and its name in the Scene view.
 

 
## 2.Pre Created Elements 

 

 ![HUB](/img/12Hierarchy.png)

 

### a.Environment: 

 
Represent the environment you are in. No action can or should be done on it. 

 

 

### b.Vr module/Player module: 

 ![HUB](/img/13VRmodule.png)

Represent the player. It has a unique set of parameters that need to be set up for the training to function correctly. 

 

 

 

#### Inventory: 

A list of all the tools that the trainee can access inside the VR.  
You can also use them for specific behavior(See inspector section) 

Some tools have specific actions inside training. 

 ![HUB](/img/15inventory.gif)
 

 

1. **Name** of the tools 

2. **Override**: It has to be ticked if you want the inventory to be changed on the specific step you are currently on. 

3. **Bag**: Define if the tools can be found in the trainee bag. If crossed it means it is not. 

4. **In/Out**: Force the tool to be inside or outside of the inventory. Outside means that it can be found in the environment. 
 
Tips: I suggest starting by removing everything and then add the one useful for your training. 

 

 

 

 

#### Skin properties: 

 
 ![HUB](/img/15kinProperties.png)
  

Configure the base genre, skin, and suits of the avatar. These settings are visible only on the first step and serve a purely immersive purpose, with no direct impact on the training. You can modify them during the training using the "Appearance" behavior, which replaces this tab when you are not on the first step. 

 ![HUB](/img/16kinProperties.png)

 

 

#### Player Role: 

 ![HUB](/img/17PlayerRole.png)

 

Each VR module must be assigned a role in order for a trainee to be launched from the console.  
Roles are utilized in the behavior tab to assign them to a specific trainee.(See inspector tab) 
 

Meteorological simulator: 
 

Coming with EESP Version 2 

 

## 3.Add Element 

 

It is possible to add an element with the add button. 
 
![HUB](/img/18AddElement.gif)
 

 

- **Empty**: Empty movable object. Mainly used to create behavior. 

- **Cube**: Add cube 

- **Add sphere**: Add sphere. tips: Used a lot for validation and selection. (touch behavior) 

- **Plane**: Add plane. tips: Use if a collider is missing 

- **Cylinder**: Add cylinder 

- **Capsule**: Add capsule. 

- **Text**: Add text. It possesses a text panel in state content where you can write text or connect existing one from the Datasheet. (see more in inspector section). 

- **Waypoint chain**: coming with Ai update 

- **Player**: Add a VR module to the scene to create a multiplayer training. 

- **Particles emitter**: Create a source of particles for FX effects such as fire, smoke,... (See inspector section).