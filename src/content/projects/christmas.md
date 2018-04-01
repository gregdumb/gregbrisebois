---
title: Christmas Light Show
date: "2017-12-01"
tags: ["raspberry pi", "frontend"]
thumbnail: "/img/showeditor.png"
---

The show runs on a Raspberry Pi and utilizes 8 channels. The project consisted of two parts: an editor to create the shows, and a player.

Final result:

<iframe width="560" height="315" style="margin-left: auto; margin-right: auto;" src="https://www.youtube.com/embed/jkk-ZqFBmM4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Show Editor

![](/img/showeditor.png)

The editor provides a GUI to create simple shows where channels can be turned on and off in time with the music. The show data can be exported as JSON or as a simple list of timestamps and keyframes.

You can [create your own show here](https://apps.gregbrisebois.com/show-editor/) or [view the source code](https://github.com/gregdumb/show-editor).

## Show Player

The player runs on the Pi. It utilizes Python to read the show files, PHP to run the Python scripts, and a locally hosted web page to control the show. It also includes a copy of the show editor, so shows can be designed on the Pi without any importing/exporting.

You can [view/download the source code here](https://github.com/gregdumb/show-server). See the readme for a guide on getting set up.