--- 
title: Evolution of the Story Archive UI
layout: post
disqusid: story-archive-ui-evolution
category: post
---

The UI of Story Archive has gone through numerous iterations, from using frameworks like [Bootstrap](http://getbootstrap.com/) and [Foundation](http://foundation.zurb.com/) to write my own CSS. In the end, none of them really work for what I wanted and how I wanted it to work, to me, this meant one thing.

*Write my own.*

---

This is the process of multiple rewrites that the Story Archive UI has undergone from the beginning to now.
---

I started off looking at websites that do what I want to do, host stories. [FanFiction&#46;net](https://www.fanfiction.net/) and [AO3(Archive of Our Own)](http://archiveofourown.org/) is the best place to start, I could not use [Tumblr](https://www.tumblr.com/) as allows for custom markup.

With the basic layout in mind I started writing, the HTML at least. I wanted to start easy and began off with Bootstrap. To add a bit of complexity of just using Bootstrap I decided to start with a user profile.

The first problem I ran into was that I needed two navbars the second (the bottom one) worked just fine, but the first (the top one) should not be responsive, so I had to disable that.

```css
.star-sitebar {
  border-bottom-width: 0;
  margin-bottom: 0;
}
.star-sitebar .navbar-header {
  float: left;
}
.star-sitebar .navbar-nav {
  float: right;
}
.star-sitebar .nav > li,
.star-sitebar .nav > li > a {
  display: inline-block;
}
```

That ```.star-sitebar``` stopped it but would change size for reasons beyond me. I got as far as below before I stop with the cause being that Bootstrap was too restrictive fo what I need to do.

<p data-height="400" data-theme-id="0" data-slug-hash="XpjpVg" data-default-tab="result" data-user="txuritan" data-embed-version="2" data-pen-title="STAR User Profile" class="codepen">See the Pen <a href="http://codepen.io/txuritan/pen/XpjpVg/">STAR User Profile</a> by Txuritan (<a href="http://codepen.io/txuritan">@txuritan</a>) on <a href="http://codepen.io">CodePen</a>.</p>

Custom code here I come. I quietly wiped up as a fake home page using code from a panel that I made weeks ago. Just as fast as I wrote it I realized that that design would get cluttered and hard to read.

<p data-height="400" data-theme-id="0" data-slug-hash="RoEMEx" data-default-tab="result" data-user="txuritan" data-embed-version="2" data-pen-title="Story Archive v1" class="codepen">See the Pen <a href="http://codepen.io/txuritan/pen/RoEMEx/">Story Archive v1</a> by Txuritan (<a href="http://codepen.io/txuritan">@txuritan</a>) on <a href="http://codepen.io">CodePen</a>.</p>

The next design was made when I needed a login screen to test [Auth0](th0.com/) with [Spring&#46;io](https://spring.io/). I worked quite nicely but any element became large and space eating. This made it hard to view on mobile and smaller screens like my own.

<p data-height="400" data-theme-id="0" data-slug-hash="BpJEPp" data-default-tab="result" data-user="txuritan" data-embed-version="2" data-pen-title="BpJEPp" class="codepen">See the Pen <a href="http://codepen.io/txuritan/pen/BpJEPp/">BpJEPp</a> by Txuritan (<a href="http://codepen.io/txuritan">@txuritan</a>) on <a href="http://codepen.io">CodePen</a>.</p>

The next I won't even go into details, I don't even know what I was thinking, but I combined everything wrong with the others into it.

Yah...

<p data-height="400" data-theme-id="0" data-slug-hash="gLyoGX" data-default-tab="result" data-user="txuritan" data-embed-version="2" data-pen-title="STAR Framework" class="codepen">See the Pen <a href="http://codepen.io/txuritan/pen/gLyoGX/">STAR Framework</a> by Txuritan (<a href="http://codepen.io/txuritan">@txuritan</a>) on <a href="http://codepen.io">CodePen</a>.</p>

As I worked on different UIs I stumbled upon the web Google App Store (I used iPhone at the time). Liked the colors and made a navbar layout but never went any farther than that.

<p data-height="400" data-theme-id="0" data-slug-hash="jyqeJP" data-default-tab="result" data-user="txuritan" data-embed-version="2" data-pen-title="jyqeJP" class="codepen">See the Pen <a href="http://codepen.io/txuritan/pen/jyqeJP/">jyqeJP</a> by Txuritan (<a href="http://codepen.io/txuritan">@txuritan</a>) on <a href="http://codepen.io">CodePen</a>.</p>

We now arrive at the current version of the UI or at least a version of it. It was designed like a mixture of iOS and Material Design using flat shapes and bright colors all while keeping unity with each other, with some variety thrown in.

<p data-height="400" data-theme-id="0" data-slug-hash="BRLyrN" data-default-tab="result" data-user="txuritan" data-embed-version="2" data-pen-title="Story Archive v2" class="codepen">See the Pen <a href="http://codepen.io/txuritan/pen/BRLyrN/">Story Archive v2</a> by Txuritan (<a href="http://codepen.io/txuritan">@txuritan</a>) on <a href="http://codepen.io">CodePen</a>.</p>

At this point, I was satisfied with what I created and was stumped as to where to go next. I obviously needed more elements and to fix some minor issues. So I decided to write a framework from the ground up using a modified version of [BEM](https://en.bem.info/) with [LESS](http://lesscss.org/).

I decided to use flexbox as it has pretty good support on web browsers. The flex system for Story Archive uses three selectors, ```.flex-item__left```, ```.flex-item__center```, and ```.flex-item__right```. Those three are entire positioning system, just nested over and over.

The current version is on a [C9](https://c9.io/) workspace being slowly built and pushed to the [repo](https://github.com/Txuritan/story-archive_ui) for use on Story Archive and anywhere else it is needed.

<script async="true" src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
