--- 
title: "StoryArchive: Rust + Nickel"
layout: post
disqusid: storyarchive-rust-nickel
category: post
---
StoryArchive is a story/fanfiction website that I have been making (trying) over the past year now. 

It started when I got annoyed at [FanFiction.net’s](https://www.fanfiction.net/) and [ArchiveOfOurOwn’s](https://archiveofourown.org/) theme (among other things). [Wattpad’s](https://www.wattpad.com/) theme is quite nice but I don’t use it all too much due to story shortage, at least for the ones I’m looking for.

The next few posts will be about my experiences and thoughts on the different languages and frameworks I used and thought about using.

---

[Rust](https://www.rust-lang.org/en-US/), a language made by [Mozilla](https://www.mozilla.org/en-US/), isn’t really made for web in mind. Its just meant to be memory safe, but people have managed to run websites on it anyway.

[Nickel](https://github.com/nickel-org/nickel.rs) is one of the larger outcomes of that. Its based on the NodeJS framework Express.js but written in Rust instead of Javascript.

I tried to write StoryArchive in Rust with Nickle but ran into the same problems that I had before with Express. That and at the time the framework hasn’t been updated in over a year, so it could have been abandoned.

I used Nickel for a bit with another Rust library called [Horrorshow](https://github.com/Stebalien/horrorshow-rs), it allows me to make HTML in Rust. 

<img src="/img/horrorshow.png" alt="StoryArchive Horrorshow Code" width="500">

I liked Nickel for the most part, but it sadly isn’t worked on all that much and that’s what’s stopping me from using it as there are very few others that might find bugs or errors in the code than say the Iron Framework.

