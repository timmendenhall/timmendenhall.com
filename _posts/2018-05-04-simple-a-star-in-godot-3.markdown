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

If you haven't setup Godot 3 yet, you can check out my [Introduction to Godot
3]() post.


{% highlight python %}
var a_star
{% endhighlight %}

