--- 
title: "StoryArchive: NodeJS + Express"
layout: post
disqusid: storyarchive-nodejs-express
category: post
---
StoryArchive is a story/fanfiction website that I have been making (trying) over the past year now. 

It started when I got annoyed at [FanFiction.net’s](https://www.fanfiction.net/) and [ArchiveOfOurOwn’s](https://archiveofourown.org/) theme (among other things). [Wattpad’s](https://www.wattpad.com/) theme is quite nice but I don’t use it all too much due to story shortage, at least for the ones I’m looking for.

The next few posts will be about my experiences and thoughts on the different languages and frameworks I used and thought about using.

---

So, when none of the Java frameworks worked I tried [NodeJS](https://nodejs.org/en/), a program that allows me to run Javascript outside the browser, which I knew quite well because of all the web work I’ve done.

[Express](http://expressjs.com/) or Express.js is one of many NodeJS web frameworks based off the connect middleware system, plugins if you will. The thing is that NodeJS projects can get quite large quite quickly, some getting up to half a gig in size.

Express is a major contributor to that with its many dependencies that require other dependencies that require other dependencies… you get the idea. [This post anyways comes to mind](https://medium.com/friendship-dot-js/i-peeked-into-my-node-modules-directory-and-you-wont-believe-what-happened-next-b89f63d21558) event though its all fake (or at least most of it, authors did add them in as a joke).

I’ve made a website in Express before this for a Business Professionals of America competition. It was a site focused towards making guides and tutorials like a DIY site. We sadly came in third, but the project was never deleted.

<img src="/img/looks.png" alt="Looks Homepage" width="500">

The homepage of Looks (the BPA site), which shall never be turned on again.

Making most of StoryArchive was quite easy in Express, but I never got any farther than that. I like using Javascript, it’s a fun language, but I never really got behind Express and its relatives.

It would be fun to use Express on more projects than what I currently have but the size of it is what stops me. I mean you never know what could be in there.
