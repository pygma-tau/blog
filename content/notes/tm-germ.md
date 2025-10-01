---
title: The Germ of a Turing Machine
date: 2025-06-08
author: Yudhister Kumar
draft: true
---

*Caveat emptor*, I do not have a PhD in mathematics. Essentially all of this is exposition of section 2 in Dan Murfet and Will Troiani's [Programs as Singularities](https://arxiv.org/abs/2504.08075) paper.

<!-- Dan Murfet and Will Troiani's [Programs as Singularities](https://arxiv.org/abs/2504.08075) paper develops a correspondence between the structures of arbitrary Turing machines and real analytic functions, by essentially "continualizing" the space of Turing machine codes into a smooth manifold and studying the critical points of a potential function on this manifold which is specifically constructed such that the critical points are Turing machines themselves. Two avenues immediately pop out to me as worth exploring:

1. The specifics of the "continualization." Mathematical definitions are powerful, and the translation between them offers new perspectives on each.
2. The specifics of the singularity  machine correspondence. In my opinion, this is where the meat of the implied thesis lies. -->

<!-- Let $\Sigma$ be a finite set of symbols and $Q$ be a finite set of states. We identify a Turing machine $M$ with $\Sigma$ symbols and $Q$ states with its transition function
$$
\delta: \Sigma \times Q \to \Sigma \times Q \times \\{-1,0,1\\}
$$
such that $\delta$ reads $\sigma \in \Sigma$ given state $q \in Q,$ writes $\sigma' \in \Sigma$ to the block where $\sigma$ was, transitions to state $q' \in Q,$ and then shifts its head left or right or stays in place. Subsequently, the space of all Turing machines (holding $\Sigma, Q$ constant) can be parametrized faithfully by
$$
W^{code} = \prod_{\sigma, q} \Sigma \times Q \times \\{-1,0,1\\}
$$
where each element $[M] \in W^{code}$ is the code for a Turing machine.

<!-- Let's work out[^1] $[M]$ for a small machine. Let $\Sigma = \\{\square, 0, 1\\}, Q = \\{q_0, q_1\\}.$ $M$, our machine, will turn $0$ into $1$ and vice versa, and then halt. $\square$ is our blank symbol on the tape, and $q_1$ is our halting state. We have $6$ initial conditions to worry about, which we order like so:
$$
(\square, q_0), (\square, q_1), (0, q_0), (0, q_1), (1, q_0), (1, q_1).
$$
Then (note that our head never moves),
$$
[M] = \left( (\square, q_0, 0), (\square, q_1, 0), (0, q_0, 0), (0, q_1, 0), (1, q_0,0 ), (1, q_1, 0 )\right) \in W^{code}_{\Sigma, Q}.
$$ -->

<!-- Each element of $W^{code}$ looks like an ordered pair specifying the machine behavior for each input, so it naturally parametrizes the space of machines in full detail[^2].

In general, $|W^{code}| = (3|\Sigma| |Q|)^{ |\Sigma| |Q|}.$ We see that there are $(3 \cdot 2 \cdot 6)^{2 \cdot 6} = 36^{12}$ $\approx 4 \times 10^{18}$ possible machines with a 2-symbol alphabet and 6 states, which helps give some intuition for why $BB(6)$ was so intractable. -->

A *noisy Turing machine* is associated with a transition function
$$
\delta: \Sigma \times Q \to \Delta\Sigma \times \Delta Q \times \Delta \\{-1, 0, 1\\}
$$
