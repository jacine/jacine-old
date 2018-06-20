---
path: "/post/5614672142/html5"
date: "2011-05-18"
title: "HTML5 Drupal 8 Initiative"
tumblr: "5614672142"
comments: true
---

Back in March, at Drupalcon Chicago, Dries announced that moving to HTML5 would be one of five major initiatives for Drupal 8. I was honored when [he asked me to lead the initiative](http://buytaert.net/html5-in-drupal-8).

These are exciting times for web development and for the Drupal community. Over the past couple of years, we’ve seen HTML5 usage grow and CSS3 hit the mainstream. There has also been a real shift in design thinking. Gone are the days when you could design a website that would only be viewed on a desktop computer. At the same time, many of us are still stuck supporting older browsers. This presents both a challenge for Drupal, and a great opportunity. Between the [Design for Drupal 8](https://buytaert.net/design-for-drupal-8), [Web Services](https://buytaert.net/web-services-in-drupal-8) and the HTML5 initiative, Drupal 8 is well positioned to make the improvements to Drupal core’s markup and CSS that many of us (myself included) have been waiting for, for a very long time.

## Initiative Goals

The main goals of this initiative will be to implement HTML5 in Drupal core in a way that will:

- Have the most benefit for end users.
- Enable contributed modules and themes to evolve using HTML5.
- Allow theme developers to control where to use the new semantic elements, and opt out entirely if they so choose.

We want to ensure we’re spending our time implementing features that will directly benefit Drupal’s user base the most. As part of this initiative we‘ll focus mostly on:

- Adding support for the new form elements to Drupal’s Form API.
- Adding new semantic elements in core templates in an appropriate way.
- Adding ARIA roles to markup to improve accessibility.
- Simplifying style and script elements.
- Ensuring input filters and functions accept HTML5 elements.

The process of switching to HTML5 will also allow us take a good hard look at our templates. While updating the markup, we’ll also have the opportunity to re-factor Drupal’s CSS, and get rid of all the old and crufty bits once and for all.

HTML5 introduces a number of new APIs including audio, video, drag and drop, offline web applications, storage, geolocation and more. These APIs will not be the main focus of this initiative at this time, but proposals to implement them in core will be considered on a case by case basis.

## Next Steps

In the coming months, we’ll examine the work that has been done in contrib and discuss what’s best for Drupal core. We’ll be working in the core issue queue on [issues tagged HTML5](https://drupal.org/project/issues/search/drupal?version=8.x&issue_tags=html5) and general discussion will continue in the [HTML5 group](https://groups.drupal.org/html5). We’ll schedule regular meetings to discuss priorities, progress and issues. More details will be posted shortly on the core initiative homepage, which once created will be referenced here.

## Getting Involved

I’d like to take this opportunity to encourage anyone that’s passionate about HTML5 and wants to get into core development to join this effort. The stronger our team, the more we’ll be able to accomplish and anyone is welcome to get involved. You don’t have to code patches. Feedback, reviewing patches, writing documentation and contributing your awesome project management skills, for example, are just as valuable as code and will go a long way in helping make this initiative a success. Don’t let a perceived lack of knowledge or phobia of the core issue queues hold you back. ;)

The best way to get started is to read up on HTML5, and begin to participate by commenting on core [HTML5 issues](https://drupal.org/project/issues/search/drupal?version=8.x&issue_tags=html5) where you can. If you’re not familiar with HTML5, here are some great free resources to get you started:

- [Dive into HTML5](https://diveintohtml5.org)
- [HTML5 Doctor](http://html5doctor.com)
- [Can I use…](https://caniuse.com/)
- [HTML5 Spec for Web Developers](http://developers.whatwg.org) | [Full spec](https://www.whatwg.org/html)

I’d like to thank everyone who encouraged me to accept this challenge, and those who’ve committed to being part of the team so far (more on this will follow soon). I hope to talk to more of you in the coming weeks about logistics and I’m looking forward to working with you all to make this initiative a success. Finally, I’d like to thank my employer, [Gravitek Labs](http://www.graviteklabs.com/), for their continued support and for giving me the time I need to work on Drupal core.
