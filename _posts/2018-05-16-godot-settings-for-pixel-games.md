---
layout: post
title:  "Godot 3 Settings For Pixel Games"
date:   2018-05-16 04:56:40 -0400
categories: blog godot3 pixelart
---

Take a quick read below if you're new to Godot 3 and want to get your project
setup and ready for making "Pixel Perfect" 2D games.

In this post I'm going to use the `aseprite-import` project found in the
godot-tutorials repository:

<https://github.com/timmendenhall/godot-tutorials>

### Godot 3 Project Settings For Pixel Perfect 2D

#### Blurry

![Texture with Filter on]({{ "/assets/images/godot-pixel-perfect/ship-filter-on.png" | absolute_url }})

If any of your sprites look blurry, then chances are you have the `Filter`
property set.  With the texture file selected in your `FileSystem` pane, take a
look over at the `Import` pane.

You can simply uncheck `Filter` or you can use the 2D Pixel preset from the drop
presets dropdown.  Let's go ahead and click the preset button and select `2D
Pixel`.

![Godot 3 Import Presets]({{ "/assets/images/godot-aseprite/import-preset-2d-pixel.png" | absolute_url }})

Then after you selected `2D Pixel`, click the preset button again and click `Set
as default for 'Texture'`.  This will make sure all textures we add from now on
will be imported with the pixel perfect settings.

![Godot 3 Import Presets Set Default]({{ "/assets/images/godot-aseprite/import-preset-set-default.png" | absolute_url }})

If we had just changed Filter now, we will have to be sure to click the `Reimport` button so our new settings will be applied to the existing Texture.

![Godot 3 Png Turn Off Filter]({{ "/assets/images/godot-aseprite/godot-png-filter-off.png" | absolute_url }})

Your texture should hopefully no longer be blurry.

![Texture with Filter off]({{ "/assets/images/godot-pixel-perfect/ship-pixel-perfect.png" | absolute_url }})

You can apply these global import presets to textures before importing any
textures at all by applying these settings to the `icon.png` file that every new
project starts with.  This way you don't even have to worry about importing a
new texture, changing the settings and then re-importing it.  You just simply
change the default before importing anything at all.

#### Window Size and Resolution

If you took the time to read my article about resolutions and design sizes, you
should have a good idea of what design size you want by now.  If not, take a
quick read of my article here:

[Pixel Art Thoughts, Tips, and Resolutions]({% post_url 2018-05-16-pixel-art-thoughts-tips-and-resolutions %})

Since this was a very simple project to demonstrate pixel art, I went with a
small size of 128 by 128.  This size is also the size the PICO-8 uses and the
same size that a recent game jam used.  But, if you're making a new PC or
console game, you'll probably want to stick to a 16:9 resolution.

First thing is first, let's open the Project settings by going to `Project ->
Project Settings` from the tool bar.  Once the window is open, navigate to
`Display -> Window` and you should see a screen like this.

![Project Settings]({{ "/assets/images/godot-pixel-perfect/project-settings-window.png" | absolute_url }})

#### Size

Under the Size pane at the top, set your `Width` and `Height` to your "Design Size"
width and height.  I'm using 128 by 128 here.  The next resolution setting I
changed was the `Test Width` and `Test Height` I set these to an integer scaled
value of my Design Size.  It doesn't have to be an integer value, you can choose
any size.  But, this will be the size that the window pops up in when you are
testing your game from within Godot 3.

#### Allow Hidpi

I was having an issue on my external monitor where the test window would pop up
in the bottom right corner of my monitor every time it loaded.  I found out this
was related to an issue with the `Allow Hidpi` setting.  As soon as I turned
this on, the window would pop up in the middle of the screen as expected.

If you're using a high resolution monitor or display like the Retina display,
you should turn this setting on.

#### Stretch

I'm going to do a very simple approach of stretching our render texture to the
screen size so the game would run at any resolution size.  This does mean that
if you change the aspect ratio of the window, the sprite scale will change and
skew the sprites.  But, it's a good setting for example purposes.  To do this I
changed the `Mode` to `viewport`.  This is basically turning on the render
texture.  Then I changed `Aspect` to `ignore` which means I don't care what
aspect ratio they scale my design size to, we just want it to fit the full
screen size.

You can also try other settings to keep your aspect ratio locked in by adding
black bars either horizontally or vertically too.

#### Pixel Snap

It's very common these days to do all of our game math with floating point
numbers.  But, on the other hand drawing our sprites using floating numbers
isn't a good idea when we're using our design size.  This causes an issue with
"sub-pixel positions" and can make pixels look off when they move around.

Thankfully, Godot has a really easy quick fix for that found by going to
`Rendering -> Quality` from `Project Settings` and turning on `Use Pixel Snap` like
below.

![Project Settings -- Pixel Snap]({{ "/assets/images/godot-pixel-perfect/project-settings-pixel-snap.png" | absolute_url }})

You could achieve this same effect in Unity or otherwise by rounding the
position float values to integers and use that before you render your sprites.

### Wrap up

Thank you again for taking a read into some Godot 3 project settings for 2D
pixel art games.  I'd love to learn more tips and tricks and share them here
with you guys so please comment below!
