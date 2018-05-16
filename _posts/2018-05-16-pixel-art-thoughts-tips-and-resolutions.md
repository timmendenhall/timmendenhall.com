---
layout: post
title:  "Pixel Art Thoughts, Tips, and Resolutions"
date:   2018-05-16 04:56:40 -0400
categories: blog godot3 pixelart
---

There's always a few tips and tricks in creating a pixel art game depending on
which engine you use.  I'm hoping some of the concepts and tricks that I show
you here can be put to use on your next game whether it's made in Godot 3 or
anything else for that matter.

This article is going to be a bit more abstract than the rest and will contain a
lot more opinions than the normal tutorials as well.  But, I do hope that this
can help anyone in choosing resolution sizes for their own projects in any
engine or even their own.

### Choosing a Design Size

#### What is a Design Size

There are many thoughts and reasons going in to choosing what I will call a
"Design Size" for your 2D pixel art game.  The design size is simply the
resolution you will do all of your math and drawing in and then we can take this
and scale it up by an even integer value for best results.  You can scale this
resolution with a non-integer value too, but, this can cause some pixels to
distort and become uneven looking.

The key thing to learn here is we will have a static resolution we design our
game art and math around.  This is essentially abstracting the resolution of a
user's device away from the gameplay logic and art.  This concept is very
helpful regardless of game engine or platform you are going to develop for.

#### Render Texture

The easiest way of thinking about this is to think we are going to do all of our
drawing to a smaller image and then scale that up to fit the full window size.
This is exactly how I did it with my last game [Cat Runner 2018](https://www.deadlygoat.com/cat-runner-2018).  This is also a common technique and easy to use in other engines or rendering libraries and commonly referred as a "render texture".

Most game engines allow you to take what a camera is "seeing" and draw that
directly to a texture instead of a viewport.  Then you could create a 2D plane,
place the texture on it, and have another camera pointed to look directly at
that texture for output to the screen.  This is how you achieve the "render
texture" in Unity anyways.

In SDL for example, you can tell all of your draw calls to draw to a specific
render texture and then use that to fill the view port.  This is how I did it
for Cat Runner as it was made entirely in C / SDL.

#### Fidelity

Before we even talk too much about resolutions and design sizes, you'll have to
first ask yourself how much detail do you want your sprites to have?  Let's
assume we're making a 2D game that uses a tilemap.  If you want your tiles to
have more detail, you'd simply increase the tile pixel size.  This applies to
your sprite sizes as well.  And when you increase your tile size, you're
exponentially increasing the amount of pixels you'd have to change in a tile.
For example an 8x8 tile would have 64 pixels inside of it.  But, a 16x16 tile is
now 256 or 4 times the amount of pixels as the 8x8 had.  This is important for
two reasons:

1. You're adding more work for every animation frame, tile created, etc. by the
sheer number of pixels to fill alone
2. The higher design resolution needed to support larger sprites and tiles will
mean you have less room to scale your pixels up to make them bigger on screen.

You'll have to find what works best for you.  But, I would suggest starting with
lower detailed, less pixel sizes while you're still learning how to make games.
This will make asset creation easier if you're planning on doing all the art and
programming yourself.  I typically shoot for either 8x8 tiles or 16x16 tiles.
There's no reason why you can't use 32x32 or 64x64 or anything else.  You could
even use a non-square tile size like 30x40 if you want to too.  In fact, some
rogue-like games do use a rectangular shape to better match the character
dimensions used in the font version.

Don't let a lower resolution or tile size let you down either.  Limiting
yourself to these small sizes actually gives you an advantage as you'll come up
with some interesting ideas within these constraints.  Additionally, we like to
"fill in the blanks" ourselves when we see lower detailed pixel art.  I
personally love this element to pixel art.

#### Resolutions and Aspect Ratios

If you haven't seen this list of true 16:9 resolutions, I highly recommend it.
This is definitely a nice list to have bookmarked.
<https://pacoup.com/2011/06/12/list-of-true-169-resolutions/>

I would definitely recommend a 16:9 resolution unless
you're trying to go for that retro 4:3 look.  Most TVs, monitors, smart phones,
etc. are using a 16:9 aspect ratio these days.  And if it is using something
like 16:10 you can always decide to either stretch to fit or add black bars
horizontally or vertically depending if you're trying to lock in the full height
or width.  In that case you'd probably keep the width fixed and add horizontal
black bars to take up the extra space if you decided not to stretch the game
vertically.

With Cat Runner's case, I was trying to keep our design size as close to the
PICO-8's design size of 128 by 128.  The reason why my resolution is twice the
width and a little bit higher in height too is because I wanted to support a
16:9 resolution to keep every thing wide screen and take advantage of the full
mobile device screen.

Using the list from the link above, I searched for a resolution that'd be greater than or
equal to 128 height.  So why not choose 240x135 instead of 256x144?  Honestly, I think
240x135 would have worked just fine.  But, since I was making all of the tiles
8x8 already, I thought it'd make sense to go with 256x144 as it's also divisible
by 8 in each direction.  This is purely a personal choice I made on my end.
As this was a mobile game made for iOS and Android, I wanted to support a
multitude of aspect ratios and resolutions.  So, I opted for the render texture
and then scale to fit the size of their screen.  This also allows you to resize
the game window to any size or aspect ratio on the PC version as well.

### Wrap up

Thank you for taking a quick read on some of the tips and tricks I used for
deciding resolutions before starting a new project.

I'd love to hear from you too!  Please let me know your comments, suggestion or
tips you may have used that I haven't listed here.
