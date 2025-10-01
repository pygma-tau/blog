---
title: "Prediction and Generation"
author: "Yudhister Kumar"
date: 2025-04-03
draft: true
---

My friend [Aidan Smith](https://aidanjs.com) likes to make the argument that prediction and generation are fundamentally the same process. The optimal generator is the optimal predictor, after all! Training a neural network on a data distribution causes it to learn a satisfactory predictor, which in turn can act as a satisfactory generator (just sample from the latent space in the appropriate manner). What's the big deal?

Intuitively, this perspective rubs me the wrong way. While it is true that having a perfect model of the underlying data-generating function automatically lets you construct a perfect predictor for that distribution,

- Fox v. Mouse paper (use the generator and predictor in that case: in particular it seems like predictors are basically "privileged generators" where the space of generators is just too large for it to be reasonable)
-
