---
title: "Probabilistic Logic <=> Reflective Oracles?"
date: 2024-06-30
path: "fullstack-cooperation"
---

The Probabilistic Payor's Lemma implies the following cooperation strategy:

Let $A_{1}, \ldots, A_{n}$ be agents in a multiplayer Prisoner's Dilemma, with the ability to return either 'Cooperate' or 'Defect' (which we model as the agents being logical statements resolving to either 'True' or 'False').  Each $A_{i}$ behaves as follows:

$$ 
\, \vdash \Box_{p_{i}} \left( \Box_{\max \{p_{1},\ldots, p_{n}\}}\bigwedge_{k=1}^n A_{k} \to \bigwedge_{k=1}^n A_{k} \right) \to A_{i}
$$

Where $p_i$ represents each individual agents' threshold for cooperation (as a probability in $[0,1]$), $\Box_p \, \phi$ returns True if credence in the statement $\phi$ is greater than $p,$ and the conjunction of $A_{1}, \ldots, A_{n}$ represents 'everyone cooperates'. Then, by the PPL, all agents cooperate, provided that all $\mathbb{P}\_{A\_{i}}$ give credence to the cooperation statement greater than each and every $A_{i}$'s individual thresholds for cooperation.
 
This formulation is desirable for a number of reasons: firstly, the Payor's Lemma is much simpler to prove than Lob's Theorem, and doesn't carry with it the same strange consequences as a result of asserting an arbitrary modal-fixedpoint; second, when we relax the necessitation requirement from 'provability' to 'belief', this gives us behavior much more similar to how agents actually I read it as it emphasizing the notion of 'evidence' being important.

However, the consistency of this 'p-belief' modal operator rests on the self-referential probabilistic logic proposed by Christiano 2012, which, while being consistent, has a few undesirable properties: the distribution over sentences automatically assigns probability 1 to all True statements and 0 to all False ones (meaning it can only really model uncertainty for statements not provable within the system).

I propose that we can transfer the intuitions we have from probabilistic modal logic to a setting where 'p-belief' is analogous to calling a 'reflective oracle', and this system gets us similar (or identical) properties of cooperation.

<h2>Oracles</h2>

A *probabilistic oracle* $O$ is a function from $\mathbb{N} \to [0,1]^\mathbb{N}.$ Here, its domain is meant to represent an indexing of *probabilistic oracle machines,* which are simply Turing machines allowed to call an oracle for input. An oracle can be queried with tuples of the form $(M, p),$ where $M$ is a probabilistic oracle machine and $p$ is a rational number between 0 and 1. By Fallenstein et. al. 2015, there exists a *reflective oracle* on each set of queries such that $O(M,p) = 1$ if $\mathbb{P}(M() = 1) > p,$ and $O(M,p) = 0$ if $\mathbb{P}(M() = 0) < 1-p$ (check this).

Notice that a reflective oracle has similar properties to the $Bel$ operator in self-referential probabilistic logic. It has a coherent probability distribution over probabilistic oracle machines (as opposed to sentences), it only gives information about the probability to arbitrary precision via queries ($O(M,p)$ vs. $Bel(\phi)$). So, it would be great if there was a canonical method of relating the two. 

Peano Arithmetic is Turing-complete, there exists a method of embedding arbitrary Turing machines in statements in predicate logic and there also exist various methods for embedding Turing machines in PA. We can form a correspondence where implications are preserved: notably, $x\to y$ simply represents the program ```if TM(x), then TM(y)``` , and negations just make the original TM output 1 where it outputted 0 and vice versa. 

(Specifically, we're identifying non-halting Turing machines with propositions and operations on those propositions with different ways of composing the component associated Turing machines. Roughly, a Turing machine outputting 1 on an input is equivalent to a given sentence being true on that input)

CDT, expected utility maximizing agents with access to the same reflective oracle will reach Nash equilibria, because reflective oracles can *model other oracles* and *other oracles that are called by other probabilistic oracle machines*---so, at least in the unbounded setting, we don't have to worry about infinite regresses, because the oracles are guaranteed to halt.

So, we can consider the following bot:
$$
A_{i} := O_{i} \left( O_{\bigcap i} \left( \bigwedge_{k=1}^n A_{k}\right) \to \bigwedge_{k=1}^n A_{k}, \, p_{i}\right),
$$
where $A_i$ is an agent represented by a oracle machine, $O_i$ is the probabilistic oracle affiliated with the agent, $O_{\bigcap i}$ is the closure of all agents' oracles, and $p_{i} \in \mathbb{Q} \cap [0,1]$ is an individual probability threshold set by each agent. 

How do we get these closures? Well, ideally $O_{\bigcap i}$ returns $0$ for queries $(M,p)$ if $p < \min\{p_{M_1}, \ldots, p_{M_n}\}$ and $1$ if $p > \max \{p_{M_1}, \ldots, p_{M_n}\},$ and randomizes for queries in the middle---for the purposes of this cooperation strategy, this turns out to work. 

I claim this set of agents has the same behavior as those acting in accordance with the PPL: they will all cooperate if the 'evidence' for cooperating is above each agents' individual threshold $p_i.$ In the previous case, the 'evidence' was the statement $\Box_{\max \{p_{1},\ldots, p_{n}\}}\bigwedge_{k=1}^n A_{k} \to \bigwedge_{k=1}^n A_{k}.$ Here, the evidence is the statement $O_{\bigcap i} \left( \bigwedge_{k=1}^n A_{k}\right) \to \bigwedge_{k=1}^n A_{k}.$

To flesh out the correspondence further, we can show that the relevant properties of the $p$-belief operator are found in reflective oracles as well: namely, that instances of the weak distribution axiom schema are coherent and that necessitation holds. 

For necessitation, $\vdash \phi \implies \vdash \Box_{p}\phi$ turns into $M_{\phi}() = 1$ implying that $O(M_{\phi},p)=1,$ which is true by the properties of reflective oracles. For weak distributivity, $\vdash \phi \to \psi \implies \vdash \Box_{p} \phi \to \Box_{p}\psi$ can be analogized to 'if it is true that the Turing machine associated with $\phi$ outputs 1 implies that the Turing machine associated with $\psi$ outputs 1, then you should be at least $\phi$-certain that $\psi$-outputs 1, so $O(M_{\phi},p)$ should imply $O(M_{\psi}, p)$ in all cases (because oracles represent true properties of probabilistic oracle machines, which Turing machines can be embedded into).

<h2>Models</h2>

Moreover, we can consider oracles to be a rough model of the p-belief modal language in which the probabilistic Payor's Lemma holds. We can get an explicit model to ensure consistency (see the links with Christiano's system, as well as its interpretation in neighborhood semantics), but oracles seem like a good intuition pump because they actively admit queries of the same form as $Bel(\phi)>p,$ and they are a nice computable analog.  

They're a bit like the probabilistic logic in the sense that a typical reflective oracle just has full information about what the output of a Turing machine will be if it halts, and the probabilistic logic gives $\mathbb{P}(\phi)=1$ to all sentences which are deducible from the set of tautologies in the language. So the correspondence has some meat.  

*Crossposted to [LessWrong](https://www.lesswrong.com/posts/HZusY5jPYvpmkTkZD/probabilistic-logic-less-than-greater-than-oracles).*