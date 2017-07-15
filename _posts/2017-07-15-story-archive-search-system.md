--- 
title: Story Archive Search System
layout: post
disqusid: story-archive-search-system
category: post
---

So I've been thinking about how the Story Archive search should work. I began looking at sites similar to my own. (e.g., FanFiction.net, AO3, and Wattpad.)

FanFiction.net really doesn't have a search system, well it does but not the search engine style that I'm looking for. So FanFiction.net is out.

Wattpad has a comma separated based search system. A system that I tried to implement but found it redundant, but that's closer to what I'm looking for based on the fact that I already tried it. So now Wattpad is out, that leaves AO3.

AO3's search system as it turns out is more like an image board and a search engine had a child. It has AND OR operators and even tag removal with -. When I realized that it was similar to a booru, it dawned on me that that is what I should use as a basis.

One of the biggest image boorus would have to be Danbooru, begin the first one after all. I started there looking at the search help page on their built-in wiki.

Apparently, Danbooru's search system is quite complex. It gives you access to info that I've never thought of.

Now Story Archive won't be that complex but it will still share some similarities to Danbooru and its clones. I have settled on the system below.

<script src="https://gist.github.com/Txuritan/5742438900da5374f027f33ab89c22e5.js"></script>
