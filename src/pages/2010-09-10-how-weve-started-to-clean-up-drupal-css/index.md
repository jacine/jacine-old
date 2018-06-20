---
path: "/post/1099051638/how-weve-started-to-clean-up-css-in-drupals"
date: "2010-09-10"
title: "How we’ve started to clean up CSS in Drupal’s System module"
tumblr: "1099051638"
comments: true
---

A couple of weeks ago, I wrote a post about [Drupal’s CSS](http://jacine.net/post/978688556/drupal-css) and how we can begin to clean it up. Since then a couple of us have resumed work on a [patch](https://drupal.org/node/885228) to make some progress with the first part:

>Do a round of cleanup in system.css, and ensure code is in the appropriate CSS file.

We are certainly limited to cleanup at this stage, given that Drupal 7 is so close to a beta release, so we’re just moving styles around as opposed to rewriting any code. Still, we’ve gotten *really* far.

Last weekend, while working on the latest patch, I decided to create a document summarizing the process of splitting of the base styles from the design styles with screenshots and code to help those reviewing the patch. The idea is that themers can easily remove `system.theme.css`, which makes a lot of assumptions about design, without breaking critical functionality.

This may not end up being the final version of the patch, but that’s beside the point. Hopefully this will help some module developers out there begin to think about separating their CSS.

[Check out the PDF](http://bit.ly/cshEyL) (pretty pictures and code).

If you can, please [help review](https://drupal.org/node/885228) the patch.
