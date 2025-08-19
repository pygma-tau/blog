---
title: "Toy Models of Syntax-Semantics in Generative Linguistics"
date: 2025-06-30
path: "syntax-semantics"
draft: True
---

<!-- Recently, [Matilde Marcolli](https://www.its.caltech.edu/~matilde/), [Robert Berwick](https://idss.mit.edu/staff/robert-c-berwick/), and [Noam Chomsky](https://en.wikipedia.org/wiki/Noam_Chomsky) published a [series](https://www.its.caltech.edu/~matilde/2311.06189v1.pdf) [of](https://www.its.caltech.edu/~matilde/2306.10270.pdf) [papers](https://arxiv.org/pdf/2305.18278.pdf) formalising Chomsky's models of generative linguistics in the language of Hopf algebras and renormalization.[^1] I think this is really cool! In particular, applying renormalization techniques to more "computational" settings to extract semantically meaningful information is a really interesting frame to consider, especially when your underlying notion of "syntactics" is so broad.

In what follows, I'd like to talk about their formalisms and toy models, why they're interesting to me, and why they might be interesting in other cases that I care about. 

<h2>Formalisms</h2>

The core thesis of Chomsky's Minimalist Program is that all syntactic structure can be described simply via the application of one simple operation called **Merge**. 

Take some alphabet $\mathcal{SO}_0.$ This is your set of "lexical features and semantic objects" (your set of "punctuation & words", essentially). Then consider the set of all binary trees with leaves in $\mathcal{SO}_0$ that are 


[^1]: A book condensing the material in these papers is forthcoming! -->

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

