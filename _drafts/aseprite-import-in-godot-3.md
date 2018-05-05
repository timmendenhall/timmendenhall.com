---
layout: post
title:  "Aseprite Import in Godot 3 For 2D Animations"
date:   2018-05-05 04:56:40 -0400
categories: blog godot3 aseprite
---

If you're looking to making a 2D game, then chances are you'll want an easy way
to edit your animations.  Now, don't get me wrong, I really like the 2D tools in
Godot 3.  But, sometimes you need a little bit more.  I won't get too in depth
here on what Aseprite is or how to use it.  But, for me the key feature is the
ability to easily manage each frames timing to the millisecond and tag multiple
animations in a file.  Also, having used Flash in the past, working with the
timeline seemed natural.

If you haven't setup or heard of Godot 3 yet, you can check out my [Introduction to Godot
3]({% post_url 2018-05-04-introduction-to-godot-3 %}) post.

You can clone my repository from here: <https://github.com/timmendenhall/godot-tutorials>

The repository will have the Aseprite file (found at `_assets/sprites/SpaceShip.aseprite`) that I'll be using for importing into
Godot along with all code files and assets for other future tutorials.

Today, I'm going to start with a brand new Godot 3 project.  This project can be
found in the `aseprite-import` folder from the Godot 3 tutorials repository.
You can start fresh and create a new project or simply import a project and
select the project file in the `aseprite-import` directory.

![Godot 3 New Project]({{ "/assets/images/godot-aseprite/godot-newproject.png" | absolute_url }})

Our first step to importing Aseprite animations, is getting this very useful addon "Aseprite Import" by eska014.  Normally, you'd use the "AssetLib" tab from inside Godot 3.  This addon hasn't been updated to Godot 3 yet.  But, I was able to clone it, copy it to my project and use it just fine.

You can download or clone this addon here: <https://github.com/eska014/aseprite-import>

Once you have aseprite-import downloaded or cloned, you'll want to copy the `addons` folder into your project's folder like below.

![Addon copied to Godot project for use]({{ "/assets/images/godot-aseprite/addons-directory.png" | absolute_url }})

To turn this addon on, you'll now have to go to `Project -> Project Settings`
and then navigate to the `Plugins` tab.  From here you can select the new plugin
and toggle the Status drop down from Inactive to Active.

Once the addon is active, Godot will listen for json imports that are associated
to spritesheets coming from Aseprite.  To test this, we're going to export our
animation from Aseprite.  The only real requirement here is you must have at
least 1 tag made.  So make sure you have the "Frame Tags" box checked.  The tag names will become the animation names in Godot 3.
You will want to export the png and the json file in the same directory and
preferably with the same name (minus extension of course).  If you have
different names, you can manually link the json file to the source png from
within Godot later.

Here's what my Aseprite export settings looked like before export:

![Aseprite spritesheet export settings]({{ "/assets/images/godot-aseprite/aseprite-export.png" | absolute_url }})

Once the sprite sheet is exported into our project, it's finally time to add the
animated sprite to a scene.  From a new scene, add a Node2D parent node for our
sprite.  And as a child of this node, we'll use the Instance button to select
our JSON file like this:

![Godot 3 Import Spritesheet JSON]({{ "/assets/images/godot-aseprite/godot-import-spritesheet-json.png" | absolute_url }})

