--- 
title: "StoryArchive: Rust + Iron"
layout: post
disqusid: storyarchive-rust-iron
category: post
---
StoryArchive is a story/fanfiction website that I have been making (trying) over the past year now. 

It started when I got annoyed at [FanFiction.net’s](https://www.fanfiction.net/) and [ArchiveOfOurOwn’s](https://archiveofourown.org/) theme (among other things). [Wattpad’s](https://www.wattpad.com/) theme is quite nice but I don’t use it all too much due to story shortage, at least for the ones I’m looking for.

The next few posts will be about my experiences and thoughts on the different languages and frameworks I used and thought about using.

---

[Nickel](https://github.com/nickel-org/nickel.rs) isn’t the only web framework for [Rust](https://www.rust-lang.org/en-US/). [Iron](http://ironframework.io/) is the [most popular](http://www.arewewebyet.org/topics/frameworks/#pkg-iron) web framework for Rust in fact.

Iron is the current framework that StoryArchive is being written in. Iron, in terms of complexity, is between Express/Nickel and [Hyper](https://github.com/hyperium/hyper), Rust’s low-level http library. Its quite powerful but doesn’t hold your hand the whole time.

Like [Express](http://expressjs.com/) it has multiple dependencies but not to the point in which it’s crazy. It’s also somehow [faster than Nickel](https://ojensen5115.github.io/rust/performance-nickel-vs-iron) or any other Rust web frameworks that don’t use Rust nightly. 

The only downside that I’ve come across is that assets, like CSS and JS, can’t be precompiled or changed from one language to another without installing their respective language dependencies.

So far Iron has been an odd experience with the frameworks that I’ve used it’s a different feel than normal.
