---
title: Criticality in Value Formation
author: Yudhister Kumar
date: 2025-11-22
---

underspecified thesis: qualitative differences in phenomenal effects are primarily determined by the conditions under which nucleation occurs; the environmental conditions of phase transitions are the primary determinants of the long-run behavior.
- examples: [prion diseases](https://www.nature.com/articles/srep10101), [ritonavir](https://www.pnas.org/doi/10.1073/pnas.0437744100). cases where a structure exhibits polymorphism & the particular polymorph propagated is sensitive to initial conditions
- counterexamples: error-correcting codes (robust to perturbation), some chaotic systems (no 'qualitatively different' basins in double pendulum behavior), mutational reproductive success (more fit mutations will propagate more widely, this is not generally determined by the time at which the mutation appears in the population)

is this true for value formation? some cases:
- broadly, "developmental interpretability," insofar as one is interested in characterizing the stage-wise development of a neural network's policy. the SLT thesis as pursued by Timaeus (see [Influence Dynamics and Stagewise Data Attribution](https://timaeus.co/research/2025-10-05-influence-dynamics), [Embryology of a Language Model](https://timaeus.co/research/2025-08-01-embryology-of-a-language-model), [Modes of Sequence Models and Learning Coefficients](https://timaeus.co/research/2025-04-25-modes)) falls in this category, as does characterizing the inductive bias of SGD, expanding the SLT story to encompass RL, attempts to link algorithmic information theory to modern training dynamics, the "neural nets as QFTs" perspective (see [Grokking as a First Order Phase Transition in Two Layer Networks](https://arxiv.org/abs/2310.03789)). 
	- pros: empirical work on actual neural nets we can train and try to interpret!
	- cons: much work involves toy models and doesn't address the "what are values" question; there's a streetlighting effect where we find structure that we look for & ignore the parts of the network which look "random" from this perspective
	- meta-con of all? the theoretical interp work being somewhat predicated on the thesis that the algorithmic structure of the learned policy is determined by phase transitions in some thermodynamic-ish measurables of the network
		- comp-mech/Simplex not like this
	- success of these agendas should be evidence in favor of the thesis
- sharp-left turn discourse
	- existence of sharp-left turns implies criticality in value formation (not polymorphism)
	- my summary of [the original argument](https://www.lesswrong.com/posts/GNhMPAWcfBCASy8e6/a-central-ai-alignment-problem-capabilities-generalization):
		- "being generally capable" is instrumentally useful in a way that "being aligned" is not (also my understanding of the corrigibility is anti-natural argument), so there exists a strong attractor towards capability improvement that does not exist for alignment, alignment & capabilities are not aligned in the limit thus capabilities generalize farther & faster than alignment so your alignment breaks
	- i don't quite understand the arguments or counterarguments or really the arguments for why corrigibility is anti-natural? 
	- one way I want to concretize this is saying something about the stability of a logical inductor's value of statements which refer to itself (goals are 'just' beliefs about future actions, values are 'just' persistent goals)
		- LIs have Introspection (4.11) and Self-Trust (4.12) which makes their behavior nice in the limit
		- plausibly you'd want to study beliefs in a game-like setting, either with information revelation over agent preferences or environment state, and see what happens?
- humans
	- trauma / philosophy / psychosis / abnormal psychological effects can induce extreme value shifts. this does not seem to be accompanied by an overall increase in individual performance
	- humans raised in a slightly abnormal environment are pretty normal. humans raised outside of society are not very normal.
	- the 'philosopher AI concern' comes from a belief that at some point the agents will be able to arbitrarily reflect & decide what their values should be. i feel like consequentialist agents at time $t_0$ are incentivized not to let this happen at time $t_1 > t_0.$ 
	- in particular humans cannot arbitrarily intervene on their values very well


