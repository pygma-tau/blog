---
title: "Why SSMs Aren't Recurrent"
date: 2025-07-29
author: "Yudhister Kumar"
draft: true
---

*Mostly a distillation of [The Illusion of State in State-Space Models](https://arxiv.org/abs/2404.08819). All errors mine.*

Holding performance constant, exponential increases in network width can be matched by only linear increases in network depth. Dynamically allocating an $O(\log n)$ depth transformer to an input of size $n$ lets you characterize the vocabulary of any regular language,[^1]

[^1]: Merril, William and Sabharwal, Ashish.  A Little Depth Goes a Long Way: The Expressive Power of Log-Depth Transformers. [https://arxiv.org/abs/2503.03961](http://arxiv.org/abs/2503.03961)