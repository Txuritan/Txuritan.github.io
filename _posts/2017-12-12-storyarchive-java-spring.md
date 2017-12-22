--- 
title: "StoryArchive: Java + Spring"
layout: post
disqusid: storyarchive-java-spring
category: post
---
StoryArchive is a story/fanfiction website that I have been making (trying) over the past year now. 

It started when I got annoyed at [FanFiction.net’s](https://www.fanfiction.net/) and [ArchiveOfOurOwn’s](https://archiveofourown.org/) theme (among other things). [Wattpad’s](https://www.wattpad.com/) theme is quite nice but I don’t use it all too much due to story shortage, at least for the ones I’m looking for.

The next few posts will be about my experiences and thoughts on the different languages and frameworks I used and thought about using.

---

StoryArchive is a site that has gone though many different languages and frameworks. Even thought I started a year ago it still isn’t any closer to completion.

Since Spark didn’t work the next Java framework is [Spring](https://spring.io/) or specifically [Spring Boot](https://projects.spring.io/spring-boot/).

Spring is a framework made for enterprise level projects, so I knew that there would be a lot of support in case I were to need help. Its even the top Java web framework, thanks to [ZeroTurnaround's](https://zeroturnaround.com/) [Java Web Frameworks Index](https://zeroturnaround.com/webframeworksindex/) and the page that lead me to it, their [Java Web Frameworks Index: February 2017](https://zeroturnaround.com/rebellabs/java-web-frameworks-index-by-rebellabs/) post.

Unlike Spark, Spring took a while to setup even the most basic parts of StoryArchive. Mostly because of how big Spring is, all the guides and tutorial use different libraries and can’t be easily converted over to another set of libraries.

Even though Spring was meant for enterprise applications and StoryArchive is quite like one of those, and that Spring Boot is the easier version of Spring MVC, Spring Boot is too complex for StoryArchive.

Spring is a great web framework, especially for how long it’s been around for, it’s just too big for some any of my projects as most of them are quite small and don’t need a massive web framework for something simple.

That said some of the smallest programs ever have been recreated in Spring, like [FizzBuzzEnterpriseEdition](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition), which I find quite funny.
