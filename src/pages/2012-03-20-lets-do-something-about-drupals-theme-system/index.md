---
path: "/post/19652705220/theme-system"
date: "2012-03-20"
title: "Let’s Do Something About Drupal’s Theme System"
tumblr: "19652705220"
comments: true
---

It’s a mess. Yeah, I said it. It’s time to admit there is a problem and get serious about fixing it. In this post, I’m going to explain what I think the problems are, and how I’d like to see them fixed.

During the last year, I’ve spent a lot of time working on the HTML5 Initiative. There has been an incredible amount of work done, by a truly awesome, and growing team. We’ve gotten a [whole](https://www.drupal.org/node/1193054) [lot](https://www.drupal.org/node/1183606) done so far. The HTML5 Shiv has been added to core, the major templates are all done, and work on Form API elements is moving along. We’re also doing CSS re-factors, at minimum separating administrative styles from the rest.

Still, I’ve found myself very unhappy with the theme layer. I see a lot of work going into [WSCCI](https://www.garfieldtech.com/blog/web-services-initiative) and now the [Layout Initiative](https://dri.es/layouts-for-drupal-8) that is really exciting. What I don’t see is if and how that will actually affect the theme system we work with today. This has been really discouraging for me, mostly because I’d like to see a lot more than just markup changes.

I’ve also become skeptical as to whether or not improvements for PHP developers automatically translate into front end improvements. I feel that we got burned with the implementation of Render API. I don’t think this was intentional or anything, just sort of [the way things are](https://www.garfieldtech.com/blog/drupal-priorities). I believe the problems that it attempts to solve are hard and the way it goes about it is good, but it was implemented so inconsistently that it ended up making things harder. Many are unwilling to even give it a chance. Without consistent patterns to rely on, many of us are lost. Had the entirety of Drupal’s code base been converted to use the Render API, maybe it would have been different.

## We are Doing it Wrong

When I complain about the theme system, I’m often surprised by some of the reactions I get. Many developers know there is a problem, but some seem completely unaware of the problems we face, and the things (which they would consider hacks) we have to do to get the job done. So, in no particular order here is what I think is wrong:

### Too Many Templates and Theme Functions

Creating a new template was the answer for everything in both Drupal 6 and 7. It has been done carelessly, over and over again, and encouraged as The Drupal Way. As a result, we have hundreds of them. This is just plain ridiculous, considering there are only 109 HTML tags, most of them are used in groups and many of them are text-level elements that wouldn’t exist in Drupal’s theme system. We’d never have theme functions or templates for `b`, `em`, `i`, `p`, `strong`, `span`, etc. At least I hope not.

### Lack of Consistency

There is hardly any consistency in what we’re doing inside templates and theme functions. Templates are a mess of arrays, strings, render arrays, and random theme settings variables. Look no further than `page.tpl.php`, which is the first impression newbies get with Drupal. In order to change a given variable in `page.tpl.php`, you need to first track down how it was generated and then figure out the appropriate function that will allow you to change it, which could be one of SO MANY different things:

- `THEME_preprocess_page()`
- `THEME_process_page()` if that doesn’t work or you’re looking for something that happens late.
- Theme settings tweaks in the `.info` file, and the UI, along with one of the above.
- `THEME_menu_local_tasks_alter()` if you want to modify contents of tabs or action links.
- `THEME_menu_local_tasks()` if you want to modify the markup of the tabs.
- `THEME_menu_local_task()` if you want to modify the markup for the list item and links for the tabs.
- `THEME_menu_local_action()` if you want to modify the markup for the list items and links for the action links. Oh, and don’t forget to wrap that one in a `<ul>`because just printing the rendering the variable alone leaves you with list items but without a `<ul>`.
- `THEME_links()`, `THEME_links__main_menu()` or `THEME_links__secondary_menu()` to change the markup for the navigation links.
- `THEME_page_alter()` if you need to hide or relocate regions or get at anything inside them.

This is insane. And we wonder why people have a hard time learning Drupal. And for the record, the [Theme Developer](https://www.drupal.org/project/devel_themer) module will not help all of this, nor is it the answer, and neither is documentation.

### Data Structure

Data structure is a nightmare, and clearly an afterthought. The variables in templates are complicated, unreliable, and chronically inconsistent and it all starts with the data structure. Unless you are a PHP Ninja and can deal with pre-render functions, good luck trying to change a table into a list or vice versa.

Drupal may be notorious for its large, complex arrays, but IMO they are not the problem, nor is the existence of data structure. I believe the fact that data structure is whipped up on a case by case basis and pushed straight to templates in many cases is the root cause for the mess of a theme system that we have.

Imagine how much easier Drupal would be to learn if the data structure was completely consistent? Imagine if you could just guess based on experience where the value you are looking for is? Imagine if you could transform the format provided for the output from plain text to a definition list by setting one property before rendering? Imagine if contrib developers didn’t have to write theme functions for everything?

### Too Many Levels of Processing

We’ve got preprocess, process, pre-render and and there can be endless implementations of these. There are no hard and fast rules for when to use one over the other. Sometimes you learn the hard way that you need to use process instead of preprocess because some module decided to add a variable in the process phase, and nothing you are doing to override that variable has worked in preprocess.

Other times you’ll get burned by pre render functions. For example, a while back I was struggling trying to prevent the filter help text from printing on a comment form. Attempting to hide it in a preprocess, process function or a form alter implementation simply did not work because there is a pre-render and process function manipulating it. The only place it would work was in the template itself. Ultimately I had to implement hook_theme() to use a template for the form solely to accomplish a simple hide(), because the template was the only place it would actually work. It took me hours to figure this out because the data I had access to in the theme layer was what it looked like before before the pre-render function changed it. That’s way too much troubleshooting and steps to accomplish something that small. This sort of thing is just maddening.

Additionally, there is no shared processing phase across theme hooks. The default preprocess variables ONLY apply to template file implementations, and cannot be used for theme functions. This means if you need any of the default variables, such as attributes or [anything else created here](https://api.drupal.org/api/drupal/includes%21theme.inc/function/_template_preprocess_default_variables/7.x), you must recreate it in your own theme function implementation.

Doesn’t seem worth it at the end of the day to me.

## Your Output is NOT Special

Sorry, but it’s just not. We need to stop treating output as a product of the immediate need of whatever module or API is generating it. The content should drive the output, not the system or API behind it. I’m not saying that we should remove identifiers from output, i.e. a class that labels a container a node or a block. What I’m saying is…


- Instead of creating new theme hooks for everything under the sun, we should have a common library of components and formats to pull from and utilize.
- Every container, for example, should be handled the same exact way, whether it’s for a region, node, form element, or whatever.
- We should stop abusing theme settings to manage content and leave that up to things like blocks, so that content can actually be managed by Drupal. It is a CMS after all.

We don’t have this today. What we do have is often abused and or not flexible enough, so modules create one-off implementations because it’s easier for them to get the job done. This ends up hurting everyone. It’s more code, more complexity, and the attempts to improve things little by little without any planning are making it worse.

## What I Want to See

I’ve been thinking about this for a long, long time, and I’ve started to try and get a handle on what we could possibly do numerous times in the past, starting as far back as two years ago. Ultimately, I’d always be asked “How can we fix it” and always just gave up because the changes that would be required are just massive, and I don’t know if I have the technical aptitude to pull it off. Recently I realized that it’s never going to happen unless I’m able to communicate what I’d like to see somehow, so six weeks ago, I bit the bullet and started gathering my thoughts. I came up with the following.

Note: It’s still very rough, and not completely thought out. It also doesn’t aim to solve all of these problems, but I think it’s an improvement. Also, I am a theme developer, not a module developer, so please don’t destroy me if you see something you don’t think will work. All of this is up on GitHub and you are welcome to tweak it, log potential problems and send pull requests. Ok? Great.

### Provide Two Structural Templates

<dl>
  <dt>Container</dt>
  <dd>The main purpose of a container is simply to wrap Items (see below). They can be used for anything from regions to nodes to form elements. They usually contain a heading, whether visible or not, and can print ALL children (items) in the base template for that container (sort of like the way you can print and entire view inside views-view.tpl.php).</dd>
  <dt>Items</dt>
  <dd>Items are structured content, which are eventually styled via formats (see below) and or components. They do not print ANY wrapper markup by default, and can optionally be wrapped with containers.</dd>
</dl>

Both of these templates contain the same variables, and the same data structure for as much as humanly possible. They also include `$append` and `$prepend` variables that allow content to be injected at the beginning and the end of templates. These are special variables to deal with things like Contextual Links and Shortcut links, which also contain structured content and should not be abused like #prefix and #suffix are today.

### Use Formats and Components to Generate Output

<dl>
  <dt>Formats</dt>
  <dd>Formats consist of HTML markup as defined by the spec. Some examples of formats include, unordered or ordered lists, definition lists, tables, etc. Formats need to be extremely flexible. They are variants of the default item implementation, and the key to making them awesome is providing the same data structure across different formats so that they can easily be swapped to use one or another without having to manipulate data.</dd>
  <dt>Components</dt>
  <dd>Components are usually a combination of containers and formats that make up custom UI elements. Examples of components include Tabs, Vertical Tabs, Form Widgets (like password confirm and machine name), Carousels, Accordions, etc. Components usually have recommended use cases for application. Their implementation can vary from CSS and JavaScript standpoint, but their markup is pretty standard.</dd>
</dl>

## Some of the Potential Benefits

If we are able to pull this off the way I’m envisioning, we can drastically reduce the number of templates. We can continue to give the theme developer control over the markup without so many assumptions and a sane, reliable data structure and workflow, which IMO will make Drupal a lot easier to learn and a lot less frustrating to use. It should also allow us to use other theme engines, instead of being locked into PHP Template.

So, check it out. It’s not, by any means complete, but there are some examples that should give you a decent idea of what it would look like:

http://jacine.github.com/drupal

Then, join the relevant conversations on Drupal.org:


- If you’re at Drupalcon, come to the [Re-thinking the Render/Theme Layers](http://denver2012.drupal.org/content/re-thinking-rendertheme-layers) core conversation.
- [[meta] Theme/render system problems](https://www.drupal.org/node/1382350)
- [Reduce the number of theme functions/templates](https://www.drupal.org/node/1484720)

