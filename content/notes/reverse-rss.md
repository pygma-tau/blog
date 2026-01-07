---
title: clauding a reverse rss reader
author: Yudhister Kumar
date: 2026-01-06
path: reverse-rss
---

Most of the problems I have with feeds stem from their time-dependency. I don't really want to wake up and read [Scott Aaronson's takes on Venezuela](https://scottaaronson.blog/?p=9453) (I adore Scott) or [Tyler Cowen arguing about Western European migration](https://marginalrevolution.com/marginalrevolution/2026/01/yes-western-europe-will-survive-recent-waves-of-migration.html?utm_source=rss&utm_medium=rss&utm_campaign=yes-western-europe-will-survive-recent-waves-of-migration). I enjoy the punditry of both. Yet neither article is [Long Content](https://gwern.net/about#long-content), of the sort that would be refreshing in a decade or two.

Ideally, my feed should consistently serve me the posts I find most valuable, rather than the ones on a given day. Hiccups: [Bostrom](https://nickbostrom.com) and [Gwern](https://gwern.net) post their writing publicly, but not in a form immediately amenable to subscription. Paul Christiano is too busy to write blog posts anymore; his decade-old ones are incredible but hard to find. What to do?

I wanted an app that:
- could take in an arbitrary webpage, archive the interesting links, and serve the links with some specified weighting
- kept a searchable database of webpages, with tagging
- had optionality to subscribe to feeds traditionally (e.g. via RSS)

[Claude made a reasonable MVP](https://github.com/pygma-tau/reverse-rss-reader). LLMs are good enough at parsing page sources to make this possible; however, I found Claude to be pretty bad at generating prompts for the tasks I cared about (if you know of good automated prompt-gen tooling, [let me know](mailto:yudhister.j.kumar@gmail.com)). 

Pretty excited about including:
- LLM-powered recommendation algorithms. IIUC one of the major AI labs considers recommendation systems to be "the perfect" testing ground for continual learning algorithms, and good paper recommenders are not that far away from having useful research taste
- LLM curation / summarization of info-dense feeds (can I get a daily digest of stat.ML)
- better UIs :P