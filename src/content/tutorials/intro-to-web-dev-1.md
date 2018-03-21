---
title: Introduction to Web Development (Part 1)
date: "2018-03-21"
---

## The web is complicated

But learning it doesn't have to be. Instead of jumping into all the crazy modern stuff, let's start out with the basics.

### HTML

Hyper-text markup language. The foundation of the web. Fundamentally, it's quite simple; it's just a markup language. A *markup language* isn't a real programming language, it just allows you to define how text appears on the screen.

For instance:
```
<p>Hello there</p>
```
Is what HTML looks like. When you 'render' the page, you don't see the `<p></p>` part, just the Hello there. The `<p>` stands for 'paragraph'; anything inside `<p></p>` will be rendered by the browser as a paragraph.

Let's get a little bit fancier:
```
<p>
  Hello there my <strong>boy</strong>
</p>
```
What's going on here? Well, it's very, very common, when writing HTML, to put tags on a separate line if there will be a lot of content in them. That's why we've separated them. You can see I surrounded the word 'boy' with `<strong></strong>`. That's just another tag; it basically means 'bold'. This text, when rendered, would look like:

Hello there my **boy**

Tada!

Now figure the rest out on your own bub.