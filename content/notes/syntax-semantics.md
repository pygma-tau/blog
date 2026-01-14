---
title: "Toy Models of Syntax-Semantics in Generative Linguistics"
date: 2025-06-30
path: "syntax-semantics"
draft: True
---

Chomsky's *Minimalist Program* posits that human understanding of language is implemented by a computational system with a single operation **Merge**, satisfying the following desiderata:[^1]

- **Merge** is a binary operation;
- **Merge** can be applied to any generated syntactic object;
- **Merge**$(\alpha, \beta)$ neither adds nor removes structural properties from $\alpha, \beta.$

Formalizing this adequately requires the following machinery. Consider a set of lexical items and syntactic features $\mathcal{SO}_0,$ [^2] and the operation $\mathfrak{M}(\alpha, \beta) = \\{\alpha, \beta \\}.$ The set of all syntactic objects constructible from $\mathcal{SO}_0$ is then the free magma[^3]  $$\mathcal{SO} = \text{Magma}(\mathcal{SO}\_0, \mathfrak{M}),$$
canonically identifiable with the set of binary rooted trees $\mathfrak{T}\_{SO\_0}$. The *accessible terms* of $T \in \mathfrak{T}\_{SO\_0}$ are defined as all subtrees $T\_v \subset T$ with non-root root vertices.[^5] A *workspace* $\mathcal{WS} \subset \mathfrak{F}\_{\mathcal{SO}\_0}$ is a forest consisting of finite binary rooted trees with leaves labeled by $\mathcal{SO}_0,$ and these will be the objects our **Merge** operation acts on.

Now, consider the vector space $V(\mathfrak{F}\_{\mathcal{SO}\_0})$ over all workspaces, spanned by the forests made of finite binary rooted trees. We turn this into a commutative Hopf algebra by defining the product operation to be the disjoint union 






[^1]: Other desiderata can be considered, and often exact wording changes from source to source. Here we draw from Marcolli et. al.'s [Mathematical Structure of Syntactic Merge](http://arxiv.org/abs/2305.18278). 

[^2]: You should think of this as your starting "alphabet", built of phonemes, punctuation symbols, etc. 

[^3]: Observe that this magma is non-associative yet commutative. 

[^4]: If $\mathcal{SO}_0$ is your alphabet, then this is the set of all possible building blocks for your language built on $\mathcal{SO}_0.$ 

[^5]: Intuitively, "accessible terms" are exactly the terms which **Merge** can "see" and act on. 

[^6]: So $\mathfrak{F}\_{\mathcal{SO}\_0}$

