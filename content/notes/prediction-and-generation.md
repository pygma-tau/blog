---
title: "Prediction is not Generation"
author: "Yudhister Kumar"
date: 2025-10-13
path: prediction-is-not-generation
---

[a long overdue response to [Aidan](https://aidanjs.com) :)]

In ML, generation and prediction are practically synonymous. Your model learns an appropriate, performant compression of your dataset, and somehow such artifacts generate "completions" (broadly construed) with high accuracy. 

It's tempting to then make the leap to *man, if I just managed to tokenize the entire past and future of the universe and train a transformer (with infinite compute) to predict the next universe state every Planck time[^1] from the universe history up until that point, then it'll be guaranteed to faithfully represent the true laws of physics somewhere in its weights!* 

I claim this is unclear! Even if the laws of physics were describable by some finite state automata, the optimal predictive representation of a process does not have to necessarily correspond to the optimal generative representation! 

Here's a toy case. Consider the space of all stationary Markov processes generating the symbol set $\\{0,1\\}.$ Clearly the best way to predict a process like this (given Markovity) is to assign some probability $p$ to $1$ being generated after a $0,$ and some probability $q$ to $0$ being generated after a $1.$ There are two "belief states" of this policy (let's call them $A$ and $B$—each corresponding to the "belief" that $0,1$ will be generated[^2]) that the reasoner will occupy with probabilities

$$
\mathbb{P}(A) = \frac{1-q}{2-p-q}\\, , \\, \mathbb{P}(B) = \frac{1-p}{2-p-q}
$$
respectively. The entropy of this two-state system is just the entropy of the stationary distribution (given above), which turns out to be

$$
\begin{align*}
C_\mu &= {-} \mathbb{P}(A) \cdot \log_2 \mathbb{P}(A) - \mathbb{P}(S_1) \cdot \log_2 \mathbb{P}(B) \\\  
&= \frac{q-1}{2-p-q} \log_2 \left(\frac{1-q}{2-p-q}\right) + \frac{p-1}{2-p-q} \log_2 \left( \frac{1-p}{2-p-q} \right).
\end{align*}
$$

The key point to remember here is that we're using the entropy of the stationary state distribution as a measure of "optimality," in the sense that lower entropy means higher simplicity and as a result it is "more optimal." It stands to reason that if generation and prediction are "the same," then it should be impossible to construct a generative process with lower entropy than $C_\mu$ for some values $p,q.$ Right?

Well. Consider $p = q = 0.4,$ and consider the generating process below. 

<img src="/images/Lohr-model.png" alt="Lohr" width="550"/>

You can check for yourself that this process outputs $0 \to 1$ with probability $p,$ and $1 \to 0$ with probability $q$ for $0 \leq p = q \leq 1/2.$ This process has a stationary distribution 

$$
\pi = \left[ \frac{1}{2} - p, 2p, \frac{1}{2} - p\right],
$$

and its entropy $H[\pi]$ for $p = q = 0.4$ is approximately $0.922,$ less than $C_\mu = 1.$ 

Have we been hoodwinked? Maybe one should never trust a sentence beginning with "Clearly, . . ." in a mathematical text. Maybe there's a secret predictive policy that magically has lower entropy for $p \in [0.38, 0.5]$[^3] that we're just missing. 

I argue against this. In particular, there is a particular interpretation of "prediction" we're using here that I claim is simultaneously natural and correct. 

Consider an infinite string of tokens $\ldots X_{-2}, X_{-1}, X_0, X_1, X_2, \ldots.$ The Markov property states that $\mathbb{P}(X_0 | X_{-\infty: 0}) = \mathbb{P}(X_0 | X_{-1}):$ that my causal state is fully determined by timestep $T-1,$ and thus the last token output contains all the information I could use to predict the next token output. As an *optimal predictor*, I want to adhere to the *optimal causal policy* which is the minimal entropy policy over belief states that can be causally differentiated. In this case, it is the two-state policy $\mu$ with entropy $C_\mu$ above. 

Observe that the introduction of causality meaningfully differentiates solely generative policies from predictive ones! We have constructed a lower-entropy generative process by relaxing the assumption that we only rely on meaningfully causally differentiated belief states given the token history. There's a sense in which this is the fundamental difference between prediction and generation. It remains to be seen how widely this holds, but the two concepts are canonically differentiated. 

*Examples taken from [James et. al.](https://csc.ucdavis.edu/~cmg/papers/gmc.pdf).*

[^1]: Ignoring that the universe doesn't have a sense of absolute time.

[^2]: In general, belief states are not by default interpretable. 

[^3]: The ranges in which the Lohr model has lower entropy than the predictive model. 