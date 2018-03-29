---
title: Unreal Engine Day/Night Cycle
date: "2017-10-17"
tags: ["unreal engine", "game dev", "download"]
thumbnail: ""
---

Download: 

This blueprint allows you to quickly implement a dynamic day/night cycle in your game. The assets are based off of the default UE4 assets but have been modified to be more dynamic. Supported features are:

- 12 or 24-hour timekeeping
- Adjustable sun angle
- Parameters for everything (i.e. star brightness, cloud thickness, etc.)

<iframe style="position: absolute; top: 0; left: 0;" src="https://gfycat.com/ifr/SpottedTalkativeArrowcrab" width="1280" height="720" frameborder="0" scrolling="no" allowfullscreen="allowfullscreen"></iframe>

# Quick setup/viewing instructions:
1. Extract the archive
2. Copy the “Content” folder into your project folder (it should merge with the content folder already there)
3. When it asks if you want to merge folders, say yes
4. Launch UnrealEd, and load the project you copied that folder to
5. Go to ‘File > Open Level’ and choose “TimeOfDayTemplate.umap” (it should be located under \YourProject\Content\Maps)
6. Hit simulate, and watch the sun move!

# To implement in your own maps:
1. Delete the default skydome (it’s just a huge object, you can select and delete it like any other object)
2. Drag-and-drop my skydome into your map (again, it’s a huge spherical blueprint)
3. Set the “Directional Light Actor (Sun)” variable to equal your sun lamp in the map
4. (Optional) Set the “Moon Actor” variable to your moon lamp in the map
5. Set your sun and moon lamps to “movable” and disable static shadows
6. (Recommended) In the World Settings, under “Lightmass,” check “Force no precomputed shadows”, this will disable Lightmass baked lighting completely
7. Rebuild lighting

# Quick overview of important properties:
- **Default Hour** – The time that we start at when we play the map
- **Time Speed** – Speed of time in ratio of game-time/real-world-time
- **Sun Speed Curve** – ADVANCED:  This curve gives you precise control over the movement of the sun vs. the actual time.  For instance, if you wanted to make days last longer, you could use this to slow down the sun for the duration of the day.  Just ignore this property if you don’t need such functionality.
- **Moonlight Intensity** – The brightness of the light from your moon actor; note that this must be set here, and not in the moon lamp’s settings
- **Use Day/Night** – Uncheck this if you want to disable the dynamic features of the blueprint
- **Display WorldTime** – Logs the current time to the screen every frame, uncheck to disable.

Play around with the other settings; if the clouds/sun/moon/stars/etc are too bright/dark, that’s all adjustable from the blueprint.

Free for commercial and non-commercial use. A mention in your credits would be nice but is not required. Let me know if this was useful to you!

*This post was rehosted from my old blog.*