---
title: "Chemical Turing Machines"
date: 2024-10-21
path: "chemical-turing-machines"
draft: false
---

Finite state automata (FSA) can be modeled with reactions of the form $A + B \to C + D.$ FSAs operate over regular languages, so our job is to find some reaction which corresponds to determining whether or not a given "word" (sequence of inputs to the reaction) is a member of the language. 

Generally, we will be associating languages of various grammars in the Chomsky hierarchy to certain combinations of "aliquots" added to a one-pot reaction, and in this case we want our aliquots to be potassium iodide and silver nitride. Take the language over the alphabet $\{a,b\}$ consisting of all words with at least one $a$ and one $b.$ Now associate $a$ with some part of $\text{KIO}_3$ and $b$ with some part of $\text{AgNO}_3.$ Then, the reaction
$$
\text{KIO}_3 + \text{AgNO}_3 \to \text{AgIO}_3 (\text{s}) + \text{KNO}_3
$$
only occurs when both of the reactants are present in solution, so the word is in the language *if and only if silver iodide is present.* (Or, equivalently, heat is released).

Type-2 grammars consist of languages that can be modeled with pushdown automatas, which differ from FSAs in that they have a stack that can store strings of arbitrary sizes. We call these languages "context-free languages", and the reactions which we associate to context-free languages are those with intermediaries. Again, because of automata equivalence, we can consider the simple case of the Dyck language: the collection of parentheses-strings that never contain more closed parentheses than open parentheses at any $i$ and contain exactly equal amounts of closed and open parentheses at $i=n.$ 

We associate this with the $pH$ reaction of sodium hydroxide and acetic acid (vinegar), with the amounts of each aliquot normalized to create identical disturbances in the $pH$ of the solution. Note that as $pH$ indicator aliquot is present at the beginning and end of the reaction (we associate it with the start-and-end token), the aliquot serves as the intermediary (the "stack", if you will). So, if $pH \geq \text{midpoint } pH$ throughout the reaction, but is $\text{midpoint } pH$ at the end, the reactor accepts the word. If not, it does not. 

Incidentally, you can interpret this as the *enthalpy yield*  $Y_{\Delta H} (\\%)$ of the computation, defined as
$$
Y_{\Delta H} (\\%) = \frac{\text{reaction heat during computation}}{\text{formation heat of input string}} \times 100.
$$
Dyck words *maximize* the enthalpy yield, whereas all other input sequences with imbalanced numbers of parentheses have lower enthalpy yields. Implication: all PDAs are doing something like "enthalpy maximization" in their computation. Couldn't find a good reference or exposition here, but something to look into. 

How do we model Turing machines? You can think of a Turing machine as a "two-stack" PDA, where each stack corresponds to moving left or right on the tape. Physically, this implies that we want to model TMs with a reaction with at least two interdependent intermediaries, and we want it to be "expressive" enough to model "non-linearities". Oscillatory redox reactions are a natural choice, of which the Belousov-Zhabotinsky (BZ) reaction is the most famous. 

A typical BZ reaction involves the combination of sodium bromate and malonic acid, with the main structure as follows:
$$
3\text{BrO}_3^- + 3\text{CH}_2(\text{COOH})_2 + 3\text{H}^+ \to 3\text{BrCH}(\text{COOH})_2 + 4\text{CO}_2 + 2\text{HCOOH} + 5\text{H}_2\text{O}.
$$

BZ reactions have *a ton* of macro-structure. Color changes as a function of the amount of oxidized catalyst, the proportions of the reactants and products fluctuate periodically, and even spatial patterns emerge from micro-heterogeneity in concentrations (e.g. reaction-diffusion waves, Pack patterns). These properties are incredibly interesting in and of themselves, but all we need for modeling TMs is that the reaction is sensitive to the addition of small amounts of aliquot.

Consider the language $L_3 = \\{a^nb^nc^n \mid n \geq 0\\}.$ Dueñas-Díez and Pérez-Mercader associate the letter $a$ with sodium bromate and $b$ with malonic acid. $c$ must somehow be dependent on the concentrations of $a$ and $b,$ so we associate $c$ with the $pH$ of the one-pot reactor, which we can read with sodium hydroxide. An aliquot of the rubidium catalyst maps to the start-and-end token. 

Oscillation frequency $f$ is proportional to $[\text{BrO}_3]^\alpha \times [\text{CH}_2(\text{COOH})_2]^{\beta} \times [\text{NaOH}]^{-\gamma},$ but it can also be modeled as a nonlinear function of the difference between the maximum redox value of the reaction and the mean redox value of a given oscillation, that is:
$$
D = V\_{\text{max}} + \left( V\_T + \frac{V\_P - V\_T}{2}\right),
$$
where $V_T$ and $V_P$ are the trough and peak potentials, respectively, and $V\_\text{max}$ is the maximum potential. Ultimately, the final frequency of the reaction can be modeled as a quadratic in $D\_{\\#}$ to high-precision ($\\#$ denotes the start-and-end token, so it can be taken to be the last timestep in reaction coordinates).

What actually allows word-by-word identification though, is the sensitivity of the oscillatory patterns to the concentrations of specific intermediaries:

> The various "out-of-order" signatures for words not in $L_3$ can be explained as follows. Each symbol has an associated distinct pathway in the reaction network. Hence, if the aliquot added is for the same symbol as the previous one, the pathway is not changed but reinforced. In contrast, when the aliquot is different, the reaction is shifted from one dominant pathway to another pathway, thus reconfiguring the key intermediate concentrations and, in turn, leading to distinctive changes in the oscillatory patterns. The change from one pathway, say 1, to say pathway 2 impacts the oscillations differently than going from pathway 2 to pathway 1. This is what allows the machine to give unique distinctive behaviors for out-of-order substrings.[^1]

Thermodynamically, characterizing word acceptance is a little bit more involved than that of PDAs or FSAs, but it can still be done. Define the *area* of a word as
$$
A^{\text(Word)} = V_{\text{max}} + \tau' - \int_{t_{\\#} + 30}^{t_{\\#} + \tau} V_\text{osc}(t) \\, dt,
$$
where $t_{\\#}$ is the time in reaction coordinates where the end token is added, $\tau'$ is the time interval between symbols, $V_\text{max}$ is the maximum redox potential, and $V_\text{osc}$ is the measured redox potential by the Nerst equation
$$
V_\text{osc} = V_0 + \frac{RT}{nF} \ln \left( \frac{[Ru(bpy)^{3+}\_{3}]}{[Ru(bpy)^{2+}\_{3}]} \right),
$$
where $Ru(bpy)^{3+}\_{3}$ and $Ru(bpy)^{2+}\_{3}$ are the concentrations of the oxidized and reduced catalyst of the BZ reaction, respectively. Now, the Gibbs free energy can be related to the redox potential as so:
$$
\Delta G_\text{osc} = -nFV_\text{osc},
$$
so the area of a word can be rewritten in terms of the free energy as
$$
A^{\text(Word)} = - \frac{1}{n_eF} \left( \Delta G ' \times \tau ' - \int_{t_{\\#} + 30}^{t_{\\#} + \tau} \Delta G_\text{osc}(t) dt\right).
$$
Accepted words all have some constant value of $A^{\text(Word)},$ while rejected words have a value that is dependent on the word.

$L_3$ is a context-sensitive language, so it is only a member of the Type-1 grammar not the Type-0 grammar. However, for our purposes (realizing some practical implementation of a TM) it is roughly equivalent, as any finite TM can be realized as a two-stack PDA, and this models a two-stack PDA quite well.

<h2>References</h3>

[^1]: Dueñas-Díez, M., & Pérez-Mercader, J. (2019). How Chemistry Computes: Language Recognition by Non-Biochemical Chemical Automata. From Finite Automata to Turing Machines. iScience, 19, 514-526. [https://doi.org/10.1016/j.isci.2019.08.007](https://doi.org/10.1016/j.isci.2019.08.007)

[^2]: Magnasco, M. O. (1997). Chemical Kinetics is Turing Universal. Physical Review Letters, 78(6), 1190-1193. [https://doi.org/10.1103/PhysRevLett.78.1190](https://doi.org/10.1103/PhysRevLett.78.1190)

[^3]: Dueñas-Díez, M., & Pérez-Mercader, J. (2019). Native chemical automata and the thermodynamic interpretation of their experimental accept/reject responses. In The Energetics of Computing in Life and Machines, D.H. Wolpert, C. Kempes, J.A. Grochow, and P.F. Stadler, eds. (SFI Press), pp. 119–139.

[^4]: Hjelmfelt, A., Weinberger, E. D., & Ross, J. (1991). Chemical implementation of neural networks and Turing machines. Proceedings of the National Academy of Sciences, 88(24), 10983-10987. [https://doi.org/10.1073/pnas.88.24.10983](https://doi.org/10.1073/pnas.88.24.10983)