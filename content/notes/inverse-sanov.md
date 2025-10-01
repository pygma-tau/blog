---
title: "The Inverse Sanov Theorem"
author: Yudhister Kumar
date: 2025-05-28
draft: True
---

*The following is distillation of and commentary on [An inverse of Sanov's theorem](https://www.sciencedirect.com/science/article/abs/pii/S0167715298002156) by Ganesh and O'Connell.*

Let $\mathcal{X}$ be a Hausdorff space, and let $\mathcal{B}$ be a Borel $\sigma$-algebra over $\mathcal{X}.$ Let $(\mu_n)$ be a sequence of measures on $(\mathcal{X}, \mathcal{B}),$ and let $I$ be a rate function$^1$ on $\mathcal{X}.$ The sequence $(\mu_n)$ (at times abbreviated $\mu_n$) satisfies the **Large Deviation Principle** (LDP) with $I$ if for all $B \in \mathcal{B},$ the following holds:

$$- \inf_{x \in B^\circ} I(x) \leq \liminf_n \frac{1}{n} \log \mu_n(B) \leq \limsup_n \frac{1}{n} \log \mu_n(B) \leq - \inf_{x \in \overline{B}} I(x).$$

Intuitively, this

[1] A *rate function* is a nonnegative lower semicontinuous function over the sample space.
