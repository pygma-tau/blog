---
title: "SL5 Literacy"
author: Yudhister Kumar
date: 2026-01-02
path: sl5-literacy
draft: false
---

In 2024, RAND released [a paper](https://www.rand.org/pubs/research_reports/RRA2849-1.html) aiming to develop security standards for "preventing [the] theft and misuse of frontier models." It introduced the "security level" framework for the first time, where each level SL1-SL5 is characterized by the necessary security properties a system must possess to resist threats from an attacker of a given cybercapacity. Examples:

- SL2: "a system that can likely thwart most professional opportunistic efforts by attackers that execute moderate-effort or nontargeted attacks." At this level, frontier model weights should be exclusively stored on company servers, copies should only be shared through encrypted channels, and duplicates are monitored closely. Google DeepMind trained Gemini 2.5 at this level. 


- SL4: "A system that can likely thwart most standard operations by leading cyber-capable institutions.[^1]" Now we're talking about source-code auditing all hardware used, supply chain validation, "specialized hardware for all external interfaces", "occasional employee integrity testing", in-house ability to discover zero-days, confidential computing where possible, and so on. This level of security is comparable to AWS or Google. 


- SL5: "A system that could plausibly be claimed to thwart most top-priority operations by the top cyber-capable institutions." Requires trusted execution environments on GPUs/TPUs, robust hardware security against side-channel attacks, completely secure supply chains, and quite stringent organizational practices. **SL5 systems do not exist and cannot exist with currently public technology.** If OpenAI had SL5-level security, then it would be able to resist China putting a significant amount of national resources into stealing GPT-7.

At least to my ears, developing SL5 standards is abuzz in the technical governance crowd. I'm not even a cybersecurity amateur, so I didn't really know what to make of it. Why is it so hard? What are the major obstacles to implementing even SL4 in practice? From a purely technical perspective, what sorts of technology needs to be developed? 

IFP released [a report](https://ifp.org/a-sprint-toward-security-level-5/) roadmapping "a sprint towards" SL5. I found the specifics lackluster. They break down necessary improvements into five areas: "hardware, software, people, facilities, and integrated security operations." Hardware improvements: funding anti-tamper tech, mapping supply chains, using DARPA to fund next-gen GPU security solutions. Software improvements: [literally translate all your C to Rust](https://www.darpa.mil/research/programs/translating-all-c-to-rust) and invent formal verification protocols with good UX. Very helpful. 

The SL5 Task Force released [an SL5 blueprint](https://sl5.org/pdfs/SL5_NOVEL-RECOMMENDATIONS.pdf) in November 2025. It's five separate memos stapled together: Machine Security, Network Security, Personnel Security, Physical Security, and Supply Chain Security.[^2] While I can't judge quality, I enjoyed the specificity. 

Insightful: 

> Whereas SL4 can plausibly be reached incrementally, *SL5 can likely only or at least most quickly and cheaply be reached by a radical reduction in the hardware and software stack that is trusted*, as well as a reduction of the volume of code that interfaces with critical components, or is necessary for critical actions (this term for instance includes any processes touching model weights, hardware and software that trust is deferred to, etc.)

Although this is mentioned in the context of supply chains, it's likely true for all other areas as well. Supply chains are insecure by default, especially to a nation-state actor, because economic incentives for efficiency (and subsequently diversity, because of gains from trade) drastically increase the surface area of attack. The surface area remains large at other parts of the stack as well. Modern ML training frameworks are sprawling, and no one invented good trusted execution environments for chips that serve models. One of the reasons why AWS & Google are so secure is because trust is distributed among personel such that there are very few singular points of failure, and that sensitive information is carefully sandboxed. 

> Access to sensitive resources should be provided only through safe, narrow APIs that perform specific operations (e.g., fine-tuning, quantization, inference) rather than allowing direct resource manipulation. This enables critical operations to run with a minimal software stack containing only essential, hardened components, while the broader R&D ecosystem—with its necessary but less-trusted dependencies—operates in isolated environments without direct access.

The set {fine-tuning, quantization, inference} allows an end-user quite a lot of behavioral access to the model! If logits or similar are exposed, training a student model is not insane? Managing such API access in a research org also seems quite complicated, but maybe tech companies have the organizational chutzpah to pull this off without completely sacrificing their progress engine on the altar. 

> AI accelerators have historically lacked critical security features, leaving model weights and sensitive data vulnerable to extraction. One example is earlier generations of accelerators (e.g., TPU v3 and v4) that typically lack native link-layer encryption for ICI. For instance, TPU v4 relies on Optical Circuit Switches (OCS) to create "air gapped network isolation" between customers rather than encrypting the data on the interconnects. Consequently, model weights and other sensitive data are transmitted between accelerators in plaintext. These could potentially be intercepted directly from the cables in data centers without any need to interact with the chip itself.

Weights have to be protected at the hardware level because fully homomorphic encryption is not mature enough to allow computations to be done on encrypted structures at the level of complexity models have. However, clusters and GPUs have not been designed to meet this standard. From a cluster perspective, protecting weights is difficult because weights are transferred quite a lot to/fron without encryption. From a chip perspective, making TEEs is a tall order.

[this is unfinished, need to include more examples, but meets the blog post bar]


[^1]: "Operations roughly less capable than or comparable to 100 individuals who have experience in a variety of relevant professions [...] spending a year with a total budget of up to $10 million on the specific operation, with vast infrastructure and access to state resources..."

[^2]: Compare to IFP's categorization. (They're the same). 