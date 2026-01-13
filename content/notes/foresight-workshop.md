---
title: Foresight Workshop
author: Yudhister Kumar
path: foresight-workshop
date: 2024-05-20
draft: true
---

# Sam Bowman

- we want LLMs to accurately answer factual answers that humans can't
- scalable oversight: human supervision is a source of trust
- how do we supervise LLMs in domains where we don't have full knowledge?

have been working on this with debate w/evan hubinger, beth barnes etc. debate works by having two AI debaters and a human judge judging which argument is the best. the debaters have a skill advantage over the judge, and they're trained entirely to be persuasive (reward proportional to judge's confidence). evidence presentable in these arguments shouldbe verifiable. failure mode: hs/college debate where rhetoric takes all. however, it could also be like the civil trial system where hopefully it could truth-seek

the benchmark of experienced NYU debaters where they were debater and judge performed better when the judge had to judge debate as opposed to the human just consults the other. this is replicated in LLMs. takeaway: **the adversarial element of debate is good for truth-seeking**

- even as the *dishonest debater gets more effective, the overall system is better at truth-seeking, because of the inherent adversarial interaction*
- debate seems to incentivize AI systems to answer questions they couldn't otherwise (adversarial mechanism design etc.)

questions:

- have you done asymmetric experiments? where the truth-seeking debater is better than the adversarial one or other things? 
    - they have. if you have very unbalanced skill levels, then it does in fact bias the judge. way to counteract this: default to 50/50 when the judge notices that the debate is going badly (too much rhetoric etc)
- What does the human consultancy look like? 
    - one side could have an unlimited openended interaction with the judge. (maybe should read the paper). reasoning: judge is worse than adversarial debater at picking holes in arguments

# Fazl Barez

**Unlearning in Large Language Models**

unlearing might be good bc

- you can remove harmful responses
- you can erase copyright protected data
- reduce hallucinations
- reduce hazardous capabilities

unlearning is just RLHF but you want to prevent the model from being helpful in certain aspects. and you want to do this in a way where you don't have to retrain the entire model from scratch

also want to retain 'novice representation'

issue: llms relearn removed concepts---how?

method:

- finetune model on dataset for named entity recognition
- prune neurons linked to a specific concept
- retrain the model on the same dataset & figure what out

re-learning happens faster when concept-neurons are pruned vs. random neurons

pruned concepts when present are later layers get transferred to earlier layers

neurons that relearn pruned concepts exhibit polysemanticity

(isn't this only possible because of superposition????)

how do we actually unlearn the concepts? maybe you should just identify the concept neurons during training and prune them once they're above a certain threshold

hm this research seems kind of bad, but also seems good

# Evan Miyazono

**formal scalable oversight**

reducing ai risk with lead-bullet solutions

"guaranteed safe ai"

- ai systems should use a separate, auditable world-model
- users can create a specification for safety in terms of that model
- a verifier validates proposals against the specification using the world-model

agi alignment focuses on individual preferences, not institutional or community preferences???

don't wholly encode optima---just enable specifying constraints

then make rules to set rules for this

how do we take codebases and formally verify them with ai

can you predict bioactivity & toxicity?

can you predict generalization behavior??

longterm goal: international standards organization for verifiably governable AI

make it economically efficient for companies to make safe AI

# Kevin Esvelt

SecureDNA as a model for safe capability evals

no recording

we need to ensure that we don't lose the game in building bioweapons

delay, detect, defend: preparing for a future where thousands can release new pandemics

scenario 1: "wildfire"---as transmissible as measles and 95% fatality. they exist in rabbits. they don't exist in humans, but adversaries could make it

"stealth"---hiv infects everyone before people notice

securing civilization against catastrophic pamdenics

~30,000 individuals can assmble any influenza virus. all the genome sequences are public. can dna synthesis screening actually works. NO????? 36/38 providers gave them the 1918 influenza virus????? with really really basic attacks

screen the dna without learning what's in the orders


OH FUCK LLMS CAN ENCRYPT STUFF AND BREAK THIS OH FUCK LLMS ARE GOOD AT JAILBREAKING

what if you develop something outside the database???? llms will be able to do this????? what the actual fuck you could probably use llms to analyze the gene sequences such that they can just send the orders what the fuck we're fucked

the worst thing to do at the moment is to lay out a correct strategy for building a wildfire agent. the risk is disclosing how to do this. biologists don't have security mindset. this is an information problem. SecureDNA has curators. contact the curators and they can add it to the database. 

dna for quick feasiblity test requires permission. make stuff annoying. make dangerous stuff annoying. 

how do we eval these models? transcripts can't be disclosed. but jesus christ we're fucked

- does this depend on dna synthesis being centralized?
    - we're all fucked we're all fucked holy fuck what the actual fuck 

malice analysis

# Mimee Xu

Neartermist safety

oversight measurement is stuck in an incentives rut

pay more attention to data rights

# Esben Kran

multipolar agi security

multi-polar Ai is a near-term security question

unleashing sleeper agents

# Anthony Aguirre

it's 2034, humanity is still empowered---how?

software can proliferate

compute governance is hopefully useful

tight supply chain

compute security is an opportunity (this is how we do this w/nuclear---enriched uranium)

h100s are wayyyy harder to build than enriched uranium. amd can't build an h100

governance: contracts/regulations/agreements re: ai-specialized compute

security: hardware + software cryptographic based security measures are a crucial tool that could help verify and enforce these

governance:

- export controls
- reporting requirements keep track of large clusters

security side:

- gpu secure-boot firmware that requires:
    - permission to do flops
    - permissions to connect w/other gpus
- permissions are granted by signed messages from external custodians
- message rtt times approximately geolocate gpus
- permission to run/connect withheld from gpus not where they should be

h100s already have shutoff switches. maybe if AIs don't have shutoff switches then gpus have shutoff switches

example:

- off switch
- compute cap

vision: 

- core safety limits are low-level and generally out of sight
- technical side: demos/production software (fli, mithril)
- field-building
- policy development
- policy engagement

hiring to be a technical program manager in this space

fli-mithril proof of concept demo

rumors of factories in china taking gamer cards and moving the chips

# Richard Ngo

what should alignment aim for?

drawing on two frameworks

critch's taxonomy of types of alignment:

- single-single alignment
    - longest standing area
    - should ai's be aligned with humans instructions? intentions? preferences? values? extrapolated values? core problem: balancing obedience and paternalism
    - more principled way to think about this: defining empowerment. optimal policies tend to seek power (turner et al)
- single-multi alignment
    - many AIs working together: delegation + hierarchy
    - different kind of superintelligence: "superorganism"
        - copies of GPT-4 calling each other etc...
    - highly parallel, more internal coordination problems (like corporation)
    - alignment could include
        - copies for monitoring
        - analyzing communications between copies
        - ai control

- multi-single alignment
    - different ppl have conflicting goals and values
    - common criticism of alignment: "who to align to"
    - not good. this is acc a choice between different types of values
        - personal values
        - product values
        - political values
        - platform values
        - philosophical values
- multi-multi alignment
    - unifyhing misuse and misalignment threat models
        - misalignment: ai gain illegitimate power by manipulating humans
        - misuse: humans gain illegitimate power by using ais
    - coalition of humans + ais are actually very similar.
    - both would aim for state capture

respectively, each of these types of alignment should be considered as:

- empowerement
- superorganism alignment
- choosing high level values
- preventing state capture

openai's recent model spec describes desirable AI behavior

# Phil

wtaf sparc guy

lionheart is the first vc fund focused on ai safety

developing counterfactual evaluation:

impact moic = impact value / capital invested (using joe carlsmith's model)

how do multipolar scenarios get exacerbated by AI?

fathom radiant

encultured

# Josh

public AI

like healthcare.gov, BBC, library, 

# Keri Warr 

anthropic (security engineer)

securing llm weights

things to do

rate limiting egress proxy:

- build a boundary around the cluster
- limit bandwidth across that boundary to tens or hundreds of GB/day

rate limits mean that exfiltration will take a TON of time

threat modeling:

- leaked credentials
- attacker-triggered restarts
- single point of failure

we have a lot to gain by collaborating on cybersecurity
you can help to devise new methods
anthropic is hiring :D

# Lawyer person

google news can only exist because of hard-fought copyright relaxations---if we copyright AI in the way that AI safety measures would imply then we're kind of fucked. Criminal liability for writing code is NOT the way to do this. Code sis speech, etc. 

but then how can we hold labs accountable? 

ca bill 1047 isn't actually that bad. dk what Evan is going on about.

ok i want to work for evan

jeffrey: interesting test case of biological weapons. won't be long before you actually have a model that can help you with dna synthesis. 

"balance"

# Jason Clinton

securing AI at the frontier---anthropic CISO

what is practically useful in preventing nation-states from stealing models?

RSPs circumscribe everything that Anthropic does. "so much of how we think about the way we run the company runs through the RSPs". Anthropic is a public benefit corporation, so then they put these priorities in a matrix and then solve. 
anthropic will probably get to asl-3 soon. they're going to leapfrog openai hm. so much of the way that internal comms works is through RSPs. it's a very powerful governance tool. it's effective self-governance. 

nation state defense

anthropic is a nation-state target. they have been attacked at least once by a nation state attacker. largest tech companies are pretty good at nation state defense. so anthropic wants to copy paste that here. 

but if a nation state turned its entire attention on a lab, they would be able to exfiltrate the weights. however, they are at asl-2, so this is fine. 

ai deployment security

in the training environment: drawing boundaries between your customers & teams etc. means that at the cluster level you can isolate stuff and then attackers can't use it to leapfrog into the entire environment. 

segmentation of clusters is big here etc.

in the inference environment: the deployment env needs to scale far beyond training env. confidential compute!! so many effective nation-state attacks use insider attacks. family member threatened, financial incentives, etc. this happened a couple months ago when someone was arrested going through san jose airport after stealing stuff from google.

defense: peer review, in the place where model weights are stored, even if you are an insider than you cannot steal it. if you're running on google/amazon then someone in that environment can in fact steal the weights. 

aws uses nitro. guarantees that an employee will not compromise aws. nitro is a hardware guarantee that this isn't true. learn how nitro is structured & use this for compute governance. 

even if we solve alignment, we always need to draw a perimeter around model interactions that acts as a barrier. we need an input classifier and an output classifier. amazon has a product called e.g. guardrails. 

hosted vs open weights. deployment needs guardrails. the open weights don't matter, but the deployment guardrails need to exist and everyone needs to use. 

cloud providers >> anthropic security team. they have to rely on cloud service providers. at amazon. ~43 on anthropic security team, 4 1yr ago

sub-agents architecture: air-gaps 5yrs out. models get self-exfiltration capacity at 5yrs out

# Jeffrey Ladish

many deepfakes

jeffrey is very very good at marketing

automation enables scale

they were able to clone 80 trusted voices

automation of ai deception

# Dean Tribble

smart contract: contract-like arrangement, expressed in code, where the behavior of the program enforces the terms of the contract

inventor of the first smart contract

what does blockchain do for smart contract?

multiple independent computers under different admins & jurisdictions come to consensus about data, order, and results. then this causes computational integrity to exist.

safe cooperation + ai

conventional software has type safety, legal contracts have none lol

smart contracts: either gets money back or the thing you want

conventional ai - dumb (lol problem is GANs???)

where you want is superintelligences using smart contracts to get assurance that the superintelligences are actually playing by the rules of the game

- ai economy

# portia murray

wargaming possible tai futures

simulations 

- clearly specificed ontologies & causality
- let us explore emergent behaviors

ai objectives institute is building understanding of the risks inherent to the wide-spread use of AI in new domains

hg wells developed the first recreational game for sale

gamers have pushed simulation research forward

wargaming TAI is underutilized

"if it is smart, it is vulnerable. if it can count, it can hack."

# steve stone

will agi make data defensible?

no one knows stuff about data

single largest problem in the entire history of cybersecurity is that no one has a good handle on how much data is under their jurisdiction

typical org has ~240 backend TB, which is a multi-petabyte

grows about 48% every 14 months

a typical orgs data will grow by 7x in the next five years

nothing grows like that

typical org in 10 yrs looks like the top 1% of the organizations today

your defensive boundary isn't your infra, it's your data

in sensitive data, the rate of increase is even faster than this

typical org today has 30m sensitive data records, in 5yrs it'll be 150m

united health testimony---10 weeks for the date after that testimony

two people here have given testimony to senate & house for congress huh. wild

# dimitri usynin

data privacy and governance regulations prohibit direct sensitive data sharing

also this person is going to go do ML at microsoft research. wild

federated learning (everyone trains their own model), swarm learning

k-anonymity doesn't work

dp-sgd

# divya siddarth

collective intelligence project

in a good world, people have agency and choice. concentration of power is bad for this most of the time. 

more experiments combining collective intelligence and ai. isn't this what openai was trying to elicit with their grants program? 

collective constitutional ai

collective stuff works when:

- you're trying to elicit tacit info
    - this is why markets work
- incorporating normative values
- accelerating inherently with ai

taiwan experiments worked well bc people were supposed to have opinions

w/openai it doesn't rlly work so well bc they don't have opinions

# bogdan 

# people to talk to

- evan miyazono -- working at atlas computing
- jason anthropic -- working on anthropic security
- keri (other anthropic security) -- more specific stuff
- xiaohu zhu -- provably safe agi, what are his takes
- anthony aguirre -- probably work on his team? 
- richard ngo -- philosophy and fiction tbh?






