---
title: O que é um SPA?
date: 2020-08-03T21:36:59.459Z
author: Renato Ricco
excerpt: |
  #### XXXXX
template: post
draft: false
category: "blog"
tags:
  - dev
  - tecnologia
---

# {title}


Why do we build single-page apps? Two main reasons really.

We want our web apps to feel “instant”, without any ugly blank screens in between pages that remind us our app is not really like an app.

Blank screens make for a bad user-experience. Users don’t want to wait for content to arrive from a server when they click a link or a button. They expect websites to be fast like native apps.

So we build single-page apps, where only the content that changes in the page is replaced, avoiding a full page reload, so navigating to another page feels instant.

An added benefit of this is that now we only need to fetch the content that changes from the server, instead of a whole new page. This reduces the amount of data we need to fetch from the network, making our app faster. This is the second main reason we build single-page apps.

But single-page apps bring added complexity.

We now bypass the browser’s routing and instead handle this ourselves on the client. Most times, a frontend framework is added as well to handle the rendering of these pages, increasing complexity further.

Now of course frameworks can do a lot more, but it all started with the desire to eliminate blank screens in between pages and reduce payload sizes.