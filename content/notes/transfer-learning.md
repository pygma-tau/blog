---
title: "do scaling laws for transfer learning exist?"
author: Yudhister Kumar
date: 2025-10-11
path: "scaling-transfer-1"
---

Chinchilla scaling posits that 

$$
L(N,D) = L_{\infty} + AN^{-\alpha} + BD^{-\beta},
$$

where $N$ is the number of parameters in your language model, $D$ is the number of training tokens seen, $A,B,\alpha,\beta, L_{\infty}$ are constants, and $L(N,D)$ is the test loss. 

Of course, this analysis is limited:
- parameters do not hold across architectural shifts: dense vs. MoE for ex.
- "scale data and model size similarly" is derived from the regime where compute $C \propto ND,$ 
- data repetition may or may not degrade performance in the long-term: it seems like [4x is the limit](https://arxiv.org/abs/2305.16264) for traditional autoregressive transformers, but [100x can be useful for diffusion LMs](https://arxiv.org/abs/2507.15857)
- $L(N,D)$ is in-distribution test loss, loss often not predictive of downstream task performance, although [loss-to-loss predictions across different training distributions are predictable](https://arxiv.org/abs/2411.12925v1)
- [the original Chinchilla paper likely did their regressions wrong](https://epoch.ai/blog/chinchilla-scaling-a-replication-attempt)

Still, it is remarkable that test loss performance is so clearly a function of parameters and dataset size, with little assumptions made about the distributional structure or architectural specifics (this holds across varying depth/width ratios, for instance). I find two questions natural:
- does scaling hold outside of the cross-entropy pretraining regime? 
- can we derive scaling relationships for downstream task performance? in particular, how predictable is transfer learning? 

In 2021, OpenAI [studied the question](https://arxiv.org/abs/2102.01293) of "how much more quickly does a pretrained LM achieve low loss on a finetuning dataset than an LM initialized from scratch on the dataset?" (Note pretraining and finetuning on this case are "the same operation", the objective is still cross-entropy). They find that the "effective data transferred"[^1] $D_T$ is described by
$$
D_T = k(D_F)^\alpha (N)^\beta,
$$
where $D_F$ is the size of the finetuning dataset (in tokens) and $N$ is the number of non-embedding parameters of the model.[^2] This is great! Strong evidence of the generality of abstractions the model learns in pretraining (especially given the independence of $\beta$ from the source distribution). However, it doesn't explicitly tell us about downstream task performance given an external metric. 

[Brandfonbrener et. al. do somewhat better](https://arxiv.org/abs/2411.12925v1). They derive scaling relationships for train-train, train-test, and test-test loss transfer for models trained on different datasets, which can be expressed as  

$$L\_i(\hat{f}\_j^{N,D}) \approx K \cdot \left( L\_k(f\_l^{N,D}) - E\_{k | l}\right)^\kappa + E\_{i|j},$$

where you have models $f_j, f_l$ trained on distributions $j,l$ evaluated on distributions $i, k$ and you're fitting the constants $K, \kappa.$[^3] As an example, the case of train-train would be where $(i,j) = (0,0)$ and $(k, l) = (1,1).$ We pair models by $(N,D)$ for coherence. Notably, these laws hold for diverse datasets, but only well in low-loss regimes and when $E_{m|n}$ terms can be well estimated. Still no breaking of the pretraining regime, and no explicit predictions for downstream metric performance!

[There's a meta-analysis out this year that claims that scaling laws are unreliable for dowstream task performance prediction.](https://arxiv.org/abs/2507.00885). Seems correct. Metrics are noisy and don't have nice algorithmic properties like cross-entropy loss might. Perhaps intriguing is their observation that irregular scaling is (1) common and (2) can occur for cross-entropy on normal tasks and normal LM datasets. [This paper claims that larger models & models trained for longer have better downstream task performance even when holding loss constant.](https://proceedings.mlr.press/v202/liu23ao/liu23ao.pdf) Which is an argument for certain training setups & architectures having better inductive biases?

Honestly, I am kind of sad that the extant literature here seems to be tainted by publication bias? I wouldn't really trust these papers (or the ten others I read writing this), and I want to run the experiments myself. The Tinker API seems good for doing this quickly. I'll go do that. 

(Titular question pending.)

[^1]: In essence, the number of tokens that you "save" seeing in finetuning by pretraining. 

[^2]: Notably $\beta$ only depends on architecture and TARGET distribution (not SOURCE), while $\alpha$ is a rough "distributional proximity" proxy that can be easily estimated. 

[^3]: $E_{m|n}$ is the irreducible loss of a model trained on with infinite compute on distribution $n$ evaluated on distribution $m.$



