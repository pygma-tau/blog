---
title: Kolmogorov-Arnold Networks
author: Yudhister Kumar
path: kan
date: 2024-05-10
draft: true
---

[[*Notes*](/notes)]

tl;dr---you can improve performance (really, fitting to physics-like models) by placing your activation functions (nonlinearities) on the edges between your nodes and making them *learnable* rather than fixed. your nodes then just pool the activations from each of the edges pointing to it

this differs from MLPs, which have activation functions on nodes (they do the aggregation and the nonlinearity), while applying a linear transformation in between (weights and biases). 

KANs have no such analogous linear transformation, instead, they approximate good activation functions with [B-splines](https://en.wikipedia.org/wiki/B-spline). Apparently, this allows them to escape the curse of dimensionality because the function can be "approximated well with a residue rate **independent of the dimension**" (emphasis theirs)

i get the vibe that this is pretty dependent on the underlying generating process being approximable by smooth functions, and I also don't think that GPU kernels have been optimized well for KANs? plausibly we can just write better kernels in CUDA/Triton for this. I think I'll do this 

ah, also the reason why they work: the [Kolmogorov-Arnold Representation theorem](https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Arnold_representation_theorem) guarantees that any multivariate continuous function can be represented as a superposition of two univariate continuous functions. MLPs satisfy a different universal approximation theorem that applies to Borel-measurable functions. 

Readings:

- [KAN: Kolmogorov-Arnold Networks](https://arxiv.org/abs/2404.19756)
- [pykan](https://github.com/KindXiaoming/pykan)---Github repo


