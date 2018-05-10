---
layout: post
title:  "Simple A-Star pathfinding in Godot 3"
date:   2018-05-04 04:56:40 -0400
categories: blog godot3 a-star
---

Today, I'll share with you how I achieved the path finding for the player
using a Tiled tile map and a global Godot script that will hold on to the map
data.

If you don't already know what pathfinding or the A* algorithm is, I'd suggest
starting with this quick read by Johann Fradj: ["Introduction to Pathfinding"](https://www.raywenderlich.com/4946/introduction-to-a-pathfinding).

If you haven't setup or heard of Godot 3 yet, you can check out my [Introduction to Godot
3]({% post_url 2018-05-04-introduction-to-godot-3 %}) post.

Now that you're all caught up, let's get started!  I highly recommend a version
control system for your projects.  Git is my preference and what I'll use for
this tutorial and any other future tutorials.  You can clone my Godot 3
tutorials from my GitHub Repository: <https://github.com/timmendenhall/godot-tutorials>.

