---
path: "/post/1031891309/jeremy-keith-on-styling-id-attributes-in"
date: "2010-08-29"
title: Jeremy Keith on styling id attributes in stylesheets at Drupalcon Copenhagen
tumblr: "1031891309"
comments: true
---

At [Drupalcon Copenhagen](https://cph2010.drupal.org) last week, <a href="https://adactio.com/">Jeremy Keith</a> did a fantastic [keynote on HTML5](http://drupalradar.com/video-jeremy-keith-keynote-session). After the keynote was finished, he answered some questions. Someone asked if the `id` attribute behaves the same in HTML5, to which he answered yes, and then offered the following, excellent advice:

>Think about why your using `id` though. I’ve stopped using `id` in my stylesheets. I generally never style things using `id`, sticking to class names all the way, because whenever you say `id` equals you know whatever, header, footer, you’re saying this is only gonna come once in this document. I guarantee it. It will never come twice.
>
>That’s a pretty big commitment. Are you really sure? Are you sure that six months from now, a year from now there might not be another one of those elements on the same page. Play it safe, use a class.
>
> The <em>only</em> time I use an `id` attribute on an element is when I want that element to be addressable, which is the reason `id`’s exist, so that you have that fragment identifier in the url which is hash and then the `id`. That’s when I use `id`.
>
>I pretty much never use it for styling now anyway, and I would recommend you look at sticking to classes, understanding specificity, understanding the flow, and using classes well, rather than using `id`.


When theming Drupal sites, targeting `id`’s in stylesheets is a very easy trap to fall into. I’m guilty of doing this myself at times, but he’s absolutely right. Don’t fall for it! Working with classes is much more flexible and generally easier to code.

Oh, and if you haven’t watched the keynote, I highly recommend you [watch it](https://drupalradar.com/video-jeremy-keith-keynote-session) now. It was top notch.

If you’re feeling inspired after that, and want to help with Drupal’s HTML5 efforts, join the [HTML5 Drupal Group](https://groups.drupal.org/html5) and get involved with [HTML5 Base](https://drupal.org/project/html5_base) (theme) and [HTML5 Tools](https://drupal.org/project/html5_tools) (module).
