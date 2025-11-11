---
title: Why Does Self-Play Learn Nash?
date: 2025-11-03
author: Yudhister Kumar
path: self-play-nash
draft: true
---

Noam Brown [wrote a tweet](https://x.com/polynoamial/status/1980697004658556972?s=20) (excerpt): 

> Sound self play, even from scratch, is guaranteed to converge to a minimax equilibrium in finite 2p0s games. That's amazing! By simply scaling memory and compute, and with no human data, we can converge to a strategy that's unbeatable in expectation.

I found this surprising. In general, Nash equilibria in finite games are guaranteed by Brouwer's fixed-point theorem, and approximating fixed-points guaranteed by Brouwer's theorem is hard: 
- For $d\geq 2,$ algorithms with query-only access to $f$ require exponentially many queries to find an $\epsilon$-fixed-point.[^1] 
- Computable functions $f:[0,1]^2 \to [0,1]^2$ without computable fixed-points exist.[^2] 
- Finding Nash equilibria in any two-player game is $\textbf{PPAD}$-complete,[^3] and the query complexity of an $\epsilon$-equilibrium in an $n$-player game is exponential in $n.$[^4]

However, [finding minimax in two-player zero-sum games is polynomial-time with linear programming](https://arxiv.org/pdf/2205.11196), and the minimax solution is a Nash equilibrium. Maybe two-player zero-sum games are just special, and self-play algorithms converge to the minimax solution quickly. 

This is true.[^5] Two players using the strategy of "best-respond to my opponent's empirical strategy" in a zero-sum game will approach a minimax solution. 


TODO: gradient approximations, understanding what alpha-zero does, how well do ML architectures learn the decision algorithm





[^1]: [Exponential Lower Bounds for Finding Brouwer Fixed Points](https://ieeexplore.ieee.org/document/4568294). 

[^2]: I believe the original result can be found in [this German article](https://link.springer.com/article/10.1007/BF02007567), but I found it referenced in [Connected Choice and the Brouwer Fixed Point Theorem](https://people.math.wisc.edu/~jsmiller8/Papers/BFT.pdf). 

[^3]: [Settling the Complexity of Computing Two-Player Nash Equilibria](https://arxiv.org/pdf/0704.1678). Medium? evidence against polynomial-time Nash finders (although I'm not sure how likely complexity theorists think $\textbf{PPAD} \subseteq \textbf{P}$ is). 

[^4]: [Query Complexity of Approximate Nash Equilibria](https://arxiv.org/pdf/1306.6686). 

[^5]: [An Iterative Method of Solving a Game](https://cs.brown.edu/courses/csci1440/labs/2023/lab01/robinson.pdf). 


