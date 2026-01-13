---
title: Brief Takes on Kolmogorov-Arnold Networks
author: Yudhister Kumar
path: kan-takes
date: 2024-05-20
draft: true
---

[[*Home*](/)]

There's been a lot of hype recently about [Kolmogorov-Arnold networks](https://arxiv.org/html/2404.19756v1) (hereafter KANs) and whether or not they provide a sufficient replacement for MLPs, have a place in future novel-architecture development, and what they mean for understanding neural networks generally. Here, I aim to:  

1.  provide a lucid exposition of their relevant properties,
2. relay some of my empirical findings and analyze their scaling properties,
3. pontificate on the potentially-revolutionized AI utopia we're all going to be sleepwalking into.

Righto!

# Formalisms

MLPs (Multi-Layer Perceptrons) are pretty simple. Fundamentally, they're just a composition of affine transformations $W_i$ and nonlinearities $\sigma_i$ applied to a given vector $\bf{x},$ for $L$ layers.

$$
\text{MLP}(x) = (W_{L-1} \circ \sigma_{L-1} \circ \cdots \circ \sigma_{1} \circ W_{0})(x). 
$$

(We are denoting $\sigma_i$ for each individual layer because hypothetically the activation functions in fact could be different, but typically there's just a single $\sigma$ (ReLU, GeLU, LeakyReLU, sigmoid) except in GAN-like cases where there's a tanh at the end. but they're all roughly the same)

In KANs, this is slightly different. Each KAN layer $\Phi_l$ is a matrix of continuous functions $\phi_{i,j}$, where each individual $\phi_{i,j}$ corresponds to the activation function for each neuron in the layer. Then, these activation functions are learned w/backprop. 

You can think of this as at each node, instead of applying weights and biases, you just sum/pool all the activations of the neurons going to that node. Another intuition is that there's no separation of linear and non-linear layers.

The implementation details of the KAN described in the paper are, in my opinion, not really worth going through, because they're just not the most efficient version of what is possible. The fundamnetal problem here is: how do you parametrize $\phi_{i,j}?$ The paper uses B-splines, but Fourier bases and Chebyshev polynomials are also worth looking at (and in fact other repos have tried this).

- what is, in principle, the best way to build function approximators? there's this Kolmogorov-Arnold representation, there's the Stone-Weierstrass theorem, there's a lot of other things---and you can just think of this as a general function that you find the gradient of and then update all the way in that direction via backprop. Fundamentally, what's the best way to do this?
