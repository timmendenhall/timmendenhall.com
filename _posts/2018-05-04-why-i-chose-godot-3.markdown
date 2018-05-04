---
layout: post
title:  "Why I chose the Godot 3 Game Engine"
date:   2018-05-04 04:54:40 -0400
categories: blog godot3
---

Lately, I've been playing with another game engine to hopefully check off all
our needs for our next project.  I've tried Unreal Engine and Unity so far
earlier this year.  Unreal Engine is great for 3D games and the visual coding
system is even better if you are brand new to coding.  But, it lacked in the
ability to properly import Aseprite animations and tile maps from Tiled.  There
might be an asset store purchase or something new now.  But, out of the box the
2D support was lackluster in Unreal.  Unity had all the right tools available
with 3rd party solutions that covered our Aseprite and Tiled importing needs.
But, the closed off engine source code and licensing fees are not ideal.  Also,
Unity has the same problem as Unreal where it's a 3D engine that can do 2D by
using orthographic projection.  These engines don't spend a lot of resources on
their 2D features.

This lead me to find Godot 3.  I've attempted this engine briefly in
the past (2.x with OS X), but, the project select window was bugged out and unusable which left
me with a hard pass at the time.  But, I'm very glad I revisited this engine and the
old window bug is gone.  Godot 3 is a very lightweight 2d/3d game engine that
uses it's own python-like scripting language.  Coming from a Javscript / Python
or probably any scripting language background will make you feel at home.  Like
Unity, I was able to get Aseprite and Tiled importing done with 3rd party
add-ons.  This process seemed to go much more smoothly than it did in Unity as
well.

That pretty much brings us up to now.  Within the first week of using Godot 3,
I  was able to handle all of asset pipeline needs, get a camera clamped to tile
map boundaries that was imported from Tiled, add player movement and collision detection with the a\*
algorithm.  A very great week.
