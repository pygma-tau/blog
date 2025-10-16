---
title: On Non-Isolated Calls for Structure
author: Yudhister Kumar
date: 2025-09-26
path: safety-cases
---

Safety cases are arguments that AI deployments are safe in some specified context. The context can include restrictions on deployment environments as well as training or deployment protocols. For instance, [the debate safety case](https://arxiv.org/abs/2505.03989) only applies to low-stakes deployment environments, requires exploration guarantees on the model, and relies on a debate protocol which avoids obfuscated arguments. Given these assumptions, Buhl et. al. argue for “asymptotic guarantees”—that high performance on alignment objectives during training translate to approximate alignment during deployment. [The control safety case](https://arxiv.org/abs/2501.17315) is structurally similar, instead focusing directly on an explicit threat model and concretizing assumptions accordingly.

A naive way of constructing an “alignment portfolio” is simply to make safety cases which adequately cover all deployment environments with the appropriate degree of risk-tolerance. Formal verification for high-stakes SWE deployment, white-box interpretability for monitoring automated alignment researchers, some adapted debate protocol for use in executive decision-making. If the individual arguments are all sound, this works!

What if we introduce some error into the soundness judgements? If every safety case has some epsilon probability of failure, then straightforwardly you should make more safety cases for the scenarios in which alignment properties matter more. But if all your safety cases for non-deceptive automated alignment researchers rely on “white-box interpretability mostly working,” then if this isn’t true you’re still doomed no matter how many safety cases you write!

[Anthropic’s ASL-4 safety case sketches](https://alignment.anthropic.com/2024/safety-cases/) are not quite this correlated, but only just. [1] relies on white-box methods successfully monitoring deception, [3] relies on guarantees that the pretrained model is not coherently deceptive (likely requiring successful white-box or black-box methods), and [2] still depends on linear activation probes adequately showing that the model cannot distinguish between certain classes of train and test deployments, as well as black-box evaluations providing sufficiently robust guarantees on behavior. These are similar assumptions! These assumptions are all only true in worlds where “models are sufficiently parsimonious such that present-day interpretability techniques and evals can provide rigorous guarantees on good behavior.”

In general, *insufficient diversity over the world structure assumed in an alignment portfolio makes the portfolio fragile and irrobust*.[^1]

It is always necessary to make assumptions about world structure when predicting world behavior. A bounded reasoner simulates the world with a local, low-fidelity model based on the reasoner’s accumulated evidence about the world. Some assumptions on world structure are better than others—gravity following an inverse-square law vs. homeopathic remedies curing cancer, for instance.

Considering the structure of one’s structural assumptions is critically important in domains where the world behavior has not been exhibited and it is of importance. Note:

- The largest scientific breakthroughs are accompanied by structural assumptions about the world breaking. See the atomic bomb, CRISPR, heavier-than-air flight. Fundamentally, these “expand the domain of the possible.” Sometimes, the world structure is discovered first (as in nuclear theory leading to the first controlled chain reaction). Other times, a prototype uncovers the structure (see: penicillin). In both cases, the non-specialist intelligent reasoner understands a different possibility domain before and after.

- Top-down searches for structural guarantees must be incredibly judicious in their assumptions, because the vast majority of hypotheses are incorrect. Ex post, the structure is obvious, but ex ante it is not. Consider Newton devoting as much energy to alchemy as the study of gravitation.

- If we take the perspective that [alignment is an infinite problem](https://www.lesswrong.com/posts/nkeYxjdrWBJvwbnTr/an-advent-of-thought), there is no good reason to expect that the world structure we can reasonably assume is simple. It might be that it is infinitely complex and is only limited by our current understanding, and that we will recover finer and finer approximations of it as our understanding improves. At each stage of this process we will have to repeat our assumption examination from a roughly equivalent epistemic vantage point of staring into the abyss.

- Much of the existential risk from AI development comes from tail risks and black swan events. Mitigating these requires a portfolio of solutions which each rely on decorrelated or independent world models (note this is not a guarantee).

Natural corollaries of this observation:

- we should be explicit about which world models are going into constructing safety cases,

- we should be developing independent safety cases for high-stakes deployment situations,

- we should emphasize diversity in theoretical agendas to buttress our ability to make such safety cases reliant on disjoint sets of assumptions.

[^1]: This is a specific instance of the general case of “Swiss cheese models only work when the holes don’t line up in the same worlds,” which is probably not sufficiently justified in this post but is something I believe to be true.