---
layout: post
title:  "Aseprite Import in Godot 3 For 2D Animations"
date:   2018-05-06 04:56:40 -0400
categories: blog godot3 aseprite
---

![Aseprite Import in Godot 3 For 2D Animations]({{ "/assets/images/godot-aseprite/aseprite-import.gif" | absolute_url }})

### Quick intro to Aseprite and Godot 3

If you're looking to making a 2D game, then chances are you'll want an easy way
to edit your animations.  Now, don't get me wrong, I really like the 2D tools in
Godot 3.  But, sometimes you need a little bit more.  Aseprite is a 2D graphics
tool that can be built from open source, but, can be purchased for a compiled version.  It has been a valuable tool in 2D graphics and animation creation for me.

I won't get too in depth
here on how to use Aseprite.  But, for me the key feature is the
ability to easily manage each animation frame's timing to the millisecond and tag multiple
animations in a single file.  Also, having used Flash in the past, working with the
timeline seemed natural to me.

If you haven't setup or heard of Godot 3 yet, you can check out my [Introduction to Godot
3]({% post_url 2018-05-04-introduction-to-godot-3 %}) post.

### Create a project or import the tutorial

You can clone my repository from here: <https://github.com/timmendenhall/godot-tutorials>

The repository will have the Aseprite file (found at `_assets/sprites/SpaceShip.aseprite`) that I'll be using for importing into Godot along with all code files and assets for other future tutorials.

Today, I'm going to start with a brand new Godot 3 project.  This project can be
found in the `aseprite-import` folder from the Godot 3 tutorials repository.
You can start fresh and create a new project or simply import a project and
select the project file in the `aseprite-import` directory.

![Godot 3 New Project]({{ "/assets/images/godot-aseprite/godot-newproject.png" | absolute_url }})

### Install the Aseprite Import addon

Our first step to importing Aseprite animations, is getting this very useful addon "Aseprite Import" by eska014.  Normally, you'd use the "AssetLib" tab from inside Godot 3.  This addon hasn't been updated to Godot 3 yet, so it won't be available on the AssetLib.  But, I was able to clone it, copy it to my project and use it just fine.

You can download or clone this addon here: <https://github.com/eska014/aseprite-import>

Once you have aseprite-import downloaded or cloned, you'll want to copy the `addons` folder into your project's folder like below.

![Addon copied to Godot project for use]({{ "/assets/images/godot-aseprite/addons-directory.png" | absolute_url }})

To turn this addon on, you'll now have to go to `Project -> Project Settings`
and then navigate to the `Plugins` tab.  From here you can select the new plugin
and toggle the Status drop down from Inactive to Active.

![Activate the Aseprite Import addon]({{ "/assets/images/godot-aseprite/godot-addons.png" | absolute_url }})

### Test an Aseprite Animation Export

Once the addon is active, Godot will listen for json imports that are associated
to spritesheets coming from Aseprite.  To test this, we're going to export our
animation from Aseprite.  The only real requirement here is you must have at
least 1 tag made.  In my test Aseprite file, I've created a single `idle`
animation.  The art I used to create this animation was created by Jonathan So and can be downloaded
here: <https://jonathan-so.itch.io/creatorpack>

![Aseprite tag created]({{ "/assets/images/godot-aseprite/aseprite-tag.png" | absolute_url }})

Now let's export the sprite sheet by going to `File -> Export Sprite Sheet`

Make sure you have the "Frame Tags" box checked.  The tag names will become the animation names in Godot 3.
You will want to export the png and the json file in the same directory and
preferably with the same name (minus extension of course).  If you have
different names, you can manually link the json file to the source png from
within Godot later.

Here's what my Aseprite export settings looked like before export:

![Aseprite spritesheet export settings]({{ "/assets/images/godot-aseprite/aseprite-export.png" | absolute_url }})

### Adding the animation to a Godot scene

Once the sprite sheet is exported into our project, it's finally time to add the
animated sprite to a scene.  From a new scene, add a Node2D parent node for our
sprite.  And as a child of this node, we'll use the Instance button to select
our JSON file like this:

![Godot 3 Import Spritesheet JSON]({{ "/assets/images/godot-aseprite/godot-import-spritesheet-json.png" | absolute_url }})

I'm also going to add a Camera 2D and check the `current` property so this
camera becomes the game camera when the game is ran.  This step is entirely
optional, but, for this test project I wanted the sprite to be in the center of
the screen.  Go ahead now and save the scene and run it to test the animation.  This scene should now look something like this.

![Godot 3 Animated Sprite Scene]({{ "/assets/images/godot-aseprite/godot-sprite-scene.png" | absolute_url }})

If you ran and saw your sprite, but, didn't see your animation, that's OK.  We
forgot to set which animation to default to when the scene is loaded.  You can
do this on the import pane.  I changed my default animation to `idle` so it
matches the tag I created in Aseprite.  Once you set this all you have to do now
is click "re-import" and then relaunch your scene.  You should now see the
animation playing.

![Default Godot 3 animation]({{ "/assets/images/godot-aseprite/godot-sprite-default-animation.png" | absolute_url }})

I went ahead and saved this scene in the project as
`Player.tscn`.  If you click the run or do a build and it asks for a default
scene, you can either make a brand new scene and instance the Player scene in it
or set the `Player.tscn` as your default scene.  I did the former and named the
scene `Game.tscn`.

You can change your default scene the game starts up with at anytime by going to
`Project -> Project Settings -> Application - Run` and changing the `Main Scene`
property.

### Fixing a bug with Aseprite Import addon

At the time of this writing, there is currently a 1 line bug in the Aseprite
Import addon that prevents Godot 3 from closing down properly and it just hangs.
I've fixed this in our tutorials repository already simply by applying this pull
request by @mosujiba.  <https://github.com/eska014/aseprite-import/pull/10>

If you're having issues with Godot hanging when you try to exit after using this
add on, then follow along.

First, we're going to open the addon file found here: `res://addons/eska.aseprite_importer/eska.aseprite_importer.gd`

Once you're in this file all we have to do is comment out or delete this line in
the `_stop()` function (Line 45 as of today):

{% highlight python %}
import_plugin = null
{% endhighlight %}

That's it, restart Godot now and it'll still hang because it doesn't seem to
re-load our changes yet.  But, when you start up Godot and the project the next
time, it should close normally again.

### A quick note on the pixel perfect look

If your sprite is looking blurry, it's because texture resource data such as our
png default to having `Filter` on.  You can read how to turn that off here:

[Turning off Godot 3 Filter]({% post_url 2018-05-16-godot-settings-for-pixel-games %}#godot-3-project-settings-for-pixel-perfect-2d)

I took some additional steps in this example project.  I set a design size
resolution of 128x128 pixels since the sprite we're using right now is very
small.  I also set the Stretch mode to 2D and expand.  And setting the test size to 512x512 pixels makes the window pop up in that
size when testing, but, it'll now take the 128x128 design size and scale it up
to fit the screen.  You want that scale factor to be a whole number, so in this
case it's 4 because 512 divided by 128 equals 4.  That just means we design the
game at 128x128 then take that and scale it up 4x and place that in the 512x512
window.

You can find these settings under `Project -> Project Settings -> Display
(Window)`.

You can read more about these types of project settings in my article here:

[Godot 3 2D Pixel Perfect Settings]({% post_url 2018-05-16-godot-settings-for-pixel-games %}#window-size-and-resolution)

### Wrap up

Hopefully, you have your animations working in Godot 3 now.  The best part
is if we want to add another frame or change the timing in Aseprite all we have
to do is repeat last sprite sheet export and Godot 3 will automatically have our
animations updated.  If you have any comments or issues with this tutorial,
please let me know below!