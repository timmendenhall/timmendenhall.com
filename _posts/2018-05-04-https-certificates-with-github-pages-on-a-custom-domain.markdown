---
layout: post
title:  "HTTPS Certificates with Github Pages on a Custom Domain"
date:   2018-05-04 04:50:40 -0400
categories: blog github https
---

Just announced 3 days ago is the ability to add HTTPS certificates on GitHub
pages that are using a custom domain.  Check out their official blog post here:
<https://blog.github.com/2018-05-01-github-pages-custom-domains-https/>

This is a super welcome addition for me as I've been using GitHub pages for
about a year and a half for the [Deadly Goat Games](https://www.deadlygoat.com)
page and just started this blog the day before this new addition.

If you didn't know this was an option, or, you're like me and ran into issues
while trying to turn it on, then hopefully this is for you.  This tutorial will
also assume you've set up a custom domain with github pages and added your CNAME
file and DNS entries.  If you haven't updated your DNS entries to match their
new servers, you might want to follow along for at least that first step too.

Back story -- When I turned this on for www.deadlygoat.com everything worked without a
hitch.  I just went to the repository settings page, and checked the "Enforce
HTTPS" checkbox towards the bottom of the page.  But, when I went to
www.timmendenhall.com and attempted to turn this on today.  I was left with
the old familiar "Unavailable because you have a custom domain configured"
message.

![Old Warning Not Allowing Us To Turn On HTTPS]({{ "/assets/images/github-pages-https/before.png" | absolute_url }})

Our fix is really just three simple steps:

1) Update the DNS entries

2) Force a settings refresh on GitHub

3) Optional, but, recommended - Force HTTPS in settings

First, we'll need to revisit your DNS settings for your custom domain and change the old IP address for GitHub pages to a
new IP address and add 3 more.  This is from Step 2 of [Configuring A records
with your DNS provider](https://help.github.com/articles/setting-up-an-apex-domain/) from Github.  The reason we're doing this is Github is using new servers for the HTTPS Github pages that leverages the CDN and supports faster loading, etc.  If you want more info, please read the official blog post.

The 4 total IP Addresses we should have for A records are:

* 185.199.108.153
* 185.199.109.153
* 185.199.110.153
* 185.199.111.153

I suggest just changing your old one to the top one, and add the other 3.

You might have to wait up to 24 hours for the DNS changes to propagate.
My provider was able to update the settings within a few minutes though.  You
can try within a few minutes, then every few hours and then finally maybe the
next day if it's still not up to date.

Next, we'll force GitHub to refresh our HTTPs setting in two quick steps.  When
you're on your repository settings page, simply delete your custom domain
(leaving the field empty) and hit save.  Then go back and enter the same custom
domain you had there before.  This is the action that will trigger Github to
realize HTTPS is something custom domains can now do.  Here's what the settings
page should look like now:

![Waiting on GitHub but settings are good!]({{ "/assets/images/github-pages-https/after.png" | absolute_url }})

From here I simply waited about 5-10 minutes and forced a page reload.  Finally,
the box allowed Enforce HTTPS.

Finally, check the "Enforce HTTPS" box and run a couple quick tests in a browser
to confirm your site is re-routing to your new https version.

If you use the jekyll-sitemap plugin, be sure to also update your `_config.yml`
file's "url" property from "http" to "https".  If you don't, your sitemap will
still reference the http protocol instead of https.

{% highlight yaml %}
url: "https://www.timmendenhall.com"
{% endhighlight %}

If you're using Google Search Console and had your old sitemap submitted, be
sure to go back in and resubmit your sitemap now that all the URLs have changed
protocol from http to https.

That's it!  It really wasn't too many steps to get the Enforce HTTPS and
get everything going on Github.  And I'm truly happy they finally added this as a
feature for custom domains.  If you have any questions, comments, or concerns
please do comment below!
