---
title: A Local Error Framework for Bounding KL Divergence
author: Yudhister Kumar
date: 2025-10-20
path: local-error-KL
draft: true
---

[Below consists of applications of techniques derived in [Shifted Composition III: Local Error Framework for KL Divergence](http://arxiv.org/abs/2412.17997) by Altschuler and Chewi. Chewi consistently writes some of my favorite papers! I thought I'd try to understand the results in this one a little bit better, hence this post. As always, mistakes are mine, and these are *notes* rather than polished output]

<h2>motivation</h2>

- the KL divergence between two stochastic processes is a natural measure of how similar they are (see appendix);
- bounding the KL divergence between two processes analytically is difficult because it typically requires applications of [Girsanov's theorem](https://en.wikipedia.org/wiki/Girsanov_theorem)[^1], which is quite clunky 
- bounding the Wasserstein 2-metric[^2] between two stochastic processes is much easier, but weaker.[^3] it typically only requires *local* information to bound *globally*
- more ergonomic $\operatorname{KL}$ bounds would be great, and it would be even better if they didn't require global information (like Girsanov). 

<h2>the criterion</h2>

(**Theorem 1.2**) Let $\hat{P}, P$ be two Markov kernels[^3] over $\mathbb{R^d}.$ Assume for all $x,y \in \mathbb{R}^d$ there exist random variables $\hat{X} \sim \delta_x \hat{P}, X \sim \delta_xP, Y \sim \delta_yP$ satisfying:
1. *Weak error:* $||\mathbb{E}\hat{X} - \mathbb{E}X|| \leq \mathcal{E}_{\text{weak}}(x)$
2. *Strong error:* $||\hat{X} - X|| \leq \mathcal{E}_{\text{strong}}(x)$
3. *$W_2$-Lipschitz:* $||X - Y||_{L^2} \leq L||x-y||$ for some $1/2 \leq L \leq 2,$ 
4. *Coupling:* $||X - x - (Y- y)||_{L^2} \leq \gamma || x - y||$
5. *Regularity:* $\operatorname{KL}(\delta_xP || \delta_yP) \leq c ||x-y||^2.$
6. *Cross-regularity:* $\operatorname{KL}(\delta_x\hat{P} || \delta_yP) \leq c' ||x-y||^2 + b(x)^2.$ 

Then, 

$$
\begin{align*}
&\operatorname{KL}(\mu\hat{P}^N || \nu P^N) \lesssim  \\\\
&(c + c') \left[\frac{L^{-1}-1}{L^{-N}-1}W_2^2(\mu,\nu) + \max\\{(L-1)N, \log \bar{N}\\} \cdot \bar{\mathcal{E}}^2_{\text{strong}}  + \bar{N}(\bar{\mathcal{E}}\_{\text{weak}} + \gamma \bar{\mathcal{E}}\_{\text{strong}})\right],
\end{align*} 
$$
where $\bar{N} = \max \\{N, \frac{1}{(1-L)_+}\\},$

<h2>some computations</h2>

<h2>appendix: why $\operatorname{KL}?$</h2>

[^1]: 

[^2]:

[^3]: $W_2$ is weaker than $\operatorname{KL}$ in the sense that small $\operatorname{KL}$ implies small $W_2,$ but the converse is not true, so "as an indicator of closeness" $W_2$ gives you less information. Example of the latter: the Wasserstein distance between a normal distribution and an empirical measure of its samples will go to $0,$ but the KL divergence is $\infty$ because one is continuous and the other is discrete. The former is given by $W_2$ being bounded by (some constant times) $\sqrt{\operatorname{TV}(P,Q)},$ which by Pinsker's inequality is bounded by $\sqrt{\frac{1}{2}\operatorname{KL}(P||Q)}.$

[^4]: 