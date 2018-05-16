---
layout: post
title:  "Tiled Tile Map Import In Godot 3"
date:   2018-05-08 04:56:40 -0400
categories: blog godot3 tiled
---

![Tiled Import in Godot 3 For Tile Maps]({{ "/assets/images/godot-tiled/tilemap-finished.png" | absolute_url }})

### Quick intro to Tiled and Godot 3

Tiled is an excellent open source tool for creating and managing Tilemaps and
Tilesets.  It can export into various formats like XML and JSON which are
excellent for other engines and programs to read in.  You can download and read
more about Tiled at their site here: <https://www.mapeditor.org/>

If you haven't setup or heard of Godot 3 yet, you can check out my [Introduction to Godot
3]({% post_url 2018-05-04-introduction-to-godot-3 %}) post.

Godot 3 does have some increasingly useful tools built-in for tilemaps.  But, if
you're like me you might prefer to use Tiled as your "universal" mapping tool.

### Create a project or import the tutorial

You can clone my repository from here: <https://github.com/timmendenhall/godot-tutorials>

All art used for this example project was created by Kenney NL and can be
downloaded here: <https://kenney.nl/assets/topdown-tanks-redux>

Today, I'm going to start with a brand new Godot 3 project.  This project can be
found in the `tiled-import` folder from the Godot 3 tutorials repository.
You can start fresh and create a new project or simply import a project and
select the project file in the `tiled-import` directory.

![Godot 3 New Project]({{ "/assets/images/godot-aseprite/godot-newproject.png" | absolute_url }})

### Install the Tiled Import addon

The Tiled addon is available on the AssetLib.  From the AssetLib tab, the
furthest right tab up in the top center, do a search for "tiled".

![Addon installed from AssetLib]({{ "/assets/images/godot-tiled/assetlib-tiled-1.png" | absolute_url }})

Click the name "Tiled Map Importer for Godot 3" and click install and when the
new popup comes up with "Retry" and "Install" click "Install" again.

![Addon installed from AssetLib]({{ "/assets/images/godot-tiled/assetlib-tiled-2-a.png" | absolute_url }})

![Addon installed from AssetLib]({{ "/assets/images/godot-tiled/assetlib-tiled-2.png" | absolute_url }})

Again, once the list of files this addon will install pops up, click "Install".

![Addon installed from AssetLib]({{ "/assets/images/godot-tiled/assetlib-tiled-3.png" | absolute_url }})

To turn this addon on, you'll now have to go to `Project -> Project Settings`
and then navigate to the `Plugins` tab.  From here you can select the new plugin
and toggle the Status drop down from Inactive to Active.

![Addon installed from AssetLib]({{ "/assets/images/godot-tiled/assetlib-tiled-4.png" | absolute_url }})

### Adding the tile map to a Godot scene

Now that the addon is installed, all you have to do to test is have your tmx and
tsx files in your project's directory.  I've went ahead and made a map file, `res://map.tmx`.  And a tileset, `res://tileset.tsx`.

In a brand new scene, I added a parent `Node2D` node.  Then we can add the map
by clicking the Instance a scene file button and finally selecting our map.tmx
file.

![Addon installed from AssetLib]({{ "/assets/images/godot-tiled/instance-tilemap.png" | absolute_url }})

### Really quick note on pixel perfect

If your tiles are looking a little blurry, be sure to make sure the `Filter`
property is unchecked.  You can check by double-clicking your tiles png file and
checking for `Filter` in the `Import` pane.  If it was checked, uncheck it and
hit re-import.

You can also read a more in-depth article I wrote on how to turn this off
globally and more here:

[Turning off Godot 3 Filter]({% post_url 2018-05-16-godot-settings-for-pixel-games %}#godot-3-project-settings-for-pixel-perfect-2d)

### Wrap up

You can see it's actually quite easy to import tilemaps from Tiled into Godot 3.
And having all of your tilemaps and tilesets made this way allows you to have
more options in the future in another engine.

You could even make your own
engine and code your own tilemap importer from the Tiled format similar to how I
did here: <https://github.com/deadlygoat/dream/blob/master/src/TileMap.cpp>

Thanks again as always!  And please comment your questions, comments or concerns.
