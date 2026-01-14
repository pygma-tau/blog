---
title: The Germ of a Turing Machine
date: 2025-06-08
author: Yudhister Kumar
draft: true
---

*Caveat emptor*, I do not have a PhD in mathematics. Essentially all of this is exposition of section 2 in Dan Murfet and Will Troiani's [Programs as Singularities](https://arxiv.org/abs/2504.08075) paper.

A *noisy Turing machine* is associated with a transition function
$$
\delta: \Sigma \times Q \to \Delta\Sigma \times \Delta Q \times \Delta \\{-1, 0, 1\\}
$$
