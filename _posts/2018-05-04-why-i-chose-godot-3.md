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
me with a hard pass at the time.  I'm very glad I revisited this engine and the
old window bug is gone.  Godot 3 is a very lightweight 2d/3d game engine that
uses it's own python-like scripting language.  Coming from a Javscript / Python
or probably any scripting language background will make you feel at home.  It
works on Windows, OS X, and Linux and has easy export options for all three as
well.

Like Unity, I was able to get Aseprite and Tiled importing done with 3rd party
add-ons.  This process seemed to go much more smoothly than it did in Unity as
well.

Within the first week of using Godot 3, I  was able to handle all of asset pipeline needs, get a camera clamped to tile
map boundaries that was imported from Tiled, add player movement and collision detection with the a\*
algorithm.  A very great week.

Here's a quick rundown of some features I wanted for my particular 2D projects
and where Unity, Unreal Engine, and Godot fit.  The Unreal Engine and Unity
tests were using the same exact animations, but, I had to make a custom tile map
in Unreal.  The Godot project is using a few more animations now and a larger
tilemap, but, it's still of course a smaller executable.  I would be curious as
to the actual release build sizes for each.  But, I can tell already Godot is
going to win here.


| |Unreal Engine|Unity|Godot
|----
|Aseprite Import|❌|✅|✅
|Tiled Import|✅|✅|✅
|Linux Support|✅ - Technically can build it on Linux.  But, there's no major official support.|✅ - Technically has Linux support.  But, it's behind on versions compared to OS X and Windows.  Which makes a project harder to manage with users on different operating systems.|✅
|Version Control Size|Largest|Medium|Smallest - All resources do need an additional ".import" file, but, everything is plain text.  Makes versioning in git real nice
|Executable Size|Largest - ~100 MB for my 1 or 2 animation and small level test.|Medium - ~70 MB|Smallest - ~30 MB