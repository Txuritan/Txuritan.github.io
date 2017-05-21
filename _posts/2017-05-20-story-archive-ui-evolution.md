--- 
title: Evolution of the Story Archive UI
layout: post
disqusid: story-archive-ui-evolution
category: post
---

The UI of Story Archive has gone through numerous interations, from using frameworks like [Bootstrap](http://getbootstrap.com/) and [Foundation](http://foundation.zurb.com/) to writing my own CSS. In the end none of them really work for what I wanted and how I wanted it to work, to me this ment one thing.

*Write my own.*

---

This is the process of multiple rewrites that the Story Archive UI has under gone from the beginning to now.
---

I started off looking at websites that do what I want to do, host stories. [FanFiction&#46;net](https://www.fanfiction.net/) and [AO3(Archive of Our Own)](http://archiveofourown.org/) is the best place to start, I could not use [Tumblr](https://www.tumblr.com/) as allows for custom markup.

With the basic layout in mind I started writing, the HTML atleast.I wanted to start easy and began off with Bootstrap. To add a bit of complexity of just using Bootstrap I decided to start with a user profile.

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

That ```.star-sitebar``` stopped it but would change size for reasons beyond me. I got as far as below before I stop with the cause being taht Bootstrap was too restrictive fo what I need to do.

<p data-height="265" data-theme-id="0" data-slug-hash="XpjpVg" data-default-tab="html,result" data-user="txuritan" data-embed-version="2" data-pen-title="STAR User Profile" class="codepen">See the Pen <a href="http://codepen.io/txuritan/pen/XpjpVg/">STAR User Profile</a> by Txuritan (<a href="http://codepen.io/txuritan">@txuritan</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async="true" src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
