---
title: Bandits
author: Yudhister Kumar
path: bandits
date: 2024-05-10
draft: true
---

[[*Notes*](/notes)]

## Multi-Armed Bandits

Looks at the explore-exploit problem. An agent is tasked with choosing from one of a set of lotteries which they only have limited information about at any given point. Each of the lotteries is part of the environment, & has some probability distribution over reward the agent gets by sampling from the lottery. 

Then the question becomes: what's the best policy to implement for this agent? Random sampling is dumb, so it should be a decent benchmark. A cheater knows the rewards beforehand, and can just sample from the lottery with the highest expected payoff. But what sane learning strategy can we implement that converges to the optimal policy over time?

Naively, let's say you implement an algorithm that just samples from the (historically, to the agent) highest-value lottery/arm. Let's define some functions:

$$Q_t(a) = \frac{\text{sum of rewards when } a \text{ was taken prior to } t}{\text{# of times } a \text{ was taken prior to } t} = \frac{\sum_{i=1}^{t-1} R_i \cdot \unicode{x1D7D9}_{A_i=a}}{\sum_{i=1}^{t-1} \unicode{x1D7D9} _{A_i = a}}$$

This tracks the mean reward of taking the action $a$, which corresponds to sampling from the arm $A_i.$ By the law of large numbers, this eventually converges to the true expected value of any *given* arm---but this does not guarantee that this algorithm converges to the *maximal* arm. For instance, the greedy strategy

$$A_t = \text{argmax}_a Q_t(a)$$

*never explores*, so (depending on initialization) nearly always exploits the first arm it comes across. We can add an $\epsilon$-randomness component to this, which ensures it acts greedily *most* of the time. And, in fact, in the limit this converges to the optimal policy, because each arm will be sampled an infinite amount of times and $Q_t(a)$ for each arm becomes accurate in the limit. Still has shit asymptotics. 

We'd like stronger explore incentives that make achieving optimality more tractable (in shorter amounts of time). One way of doing this is the following:

$$A_t = \text{argmax}_a \left[ Q_t(a) + c \sqrt{\frac{\ln t}{N_t(a)}}\right]$$

where $N_t(a)$ is the number of times each arm has been sampled. This algorithm goes through all the arms at least once (dividing by 0 = inf), and then slowly converges on the one with the best reward. $c$ is some parameter. This **upper confidence bound** action selection converges more nicely. We take the square root because it's approximately meant to capture the 'variance' of $a$'s value, ergo the 'upper bound' nature of this optimization.

There's some interesting infra-Bayesian stuff here.

Readings:

- [Imprecise Multi-Armed Bandits](https://arxiv.org/abs/2405.05673)---Vanessa Kosoy
- Sutton & Barto, Chapter 2
- 
