---
title: Deriving the Langevin equation from the reduced Wigner function
author: Yudhister Kumar
date: 2025-04-07
draft: true
---
Langevin dynamics are the prototypical example of a "chaotic" system.
$$
\frac{dX}{dt}(t) + \Gamma(t) X(t) = \Xi(t).
$$
The Wigner function is an object which allows you to recover a "joint probability distribution" for $\psi(x)$ and $\psi(p)$ via integration.
$$
f^W(x,p) = \int \frac{du}{2\pi\hbar}  e^{-ipu/\hbar}\psi^*\left( x- \frac{u}{2}\right)\psi \left( x + \frac{u}{2}\right).
$$
The Langevin equation is recovered from the time-evolution of the Wigner function, implying that quantum open systems evolve according to Langevin dynamics.
