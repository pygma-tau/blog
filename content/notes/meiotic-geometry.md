---
title: meiotic geometry
author: Yudhister Kumar
date: 2026-01-17
path: meiotic-geometry
---

[taken from Thom's [Structural Stability and Morphogenesis](https://pmc.ncbi.nlm.nih.gov/articles/PMC2734982/)]

Meiosis is the process by which germ cells divide into gametes in preparation for organismal reproduction. It differs from mitosis in numerous ways, but in particular that the ultimate daughter cells are haploid (only retaining one copy of each chromosome as opposed to two). 

Thom proposes a geometric model of meiosis based on the following principle:

> *at the pachytene stage, the local genetic state of the chromatic tetrad is the result of a competition between the genetic regimes defined by the parent chromosomes joined in the synaptic complex.* 

The *pachytene* stage of meiosis is a substage of prophase I where homologous chromosomes fully pair and genetic recombination occurs; it determines the haplotype of each chromosome in the resulting gametes. This haplotype determination is synonymous with "the local genetic state of the chromatic tetrad:" the tetrad consisting of the paired homologs and "the local genetic state" referring to the specific allele arrangements. Complexities of the these mechanisms (e.g. chiasma) are hidden under "competition." The synaptic complex is the protein structure binding the homologous chromosomes (maternal-paternal pairs).

Represent the synaptic complex by the cylinder $x^2 + y^2 = 1$ in $\mathbb{R}^3,$ where the half $x<0$ represents (say) the maternal chromosome and the half $x>0$ represents the paternal one. Insofar as pachytene "determines" recombination between non-sister chromatids, this motivates the addition of a "shockwave" which cuts each plane of the cylinder (e.g. $z$ constant) as some convex curve $c(z)$ through the origin, such that when associating each gene $g_i$ with a plane $z = g_i$ the lines $x = 0$ and $c(z)$ separate the cylindrical cross-section into four chromatids.

The case where each $c(z)$ is a straight line corresponds to the case where every recombination is symmetric. Generally, the chromatids correspond to continuous regions cut out by $c(z)$ as one travels up the $z$-axis, so this is proposed to be a satisfactory, geometric model for recombination: small local changes, the large geometric ones satisfying the models correspond to known behavior. 

For instance, chiasma:[^1]

<div style="display: flex; justify-content: center; align-items: center; gap: 16px;">
  <img src="/images/chiasma.png" alt="Chiasma" style="width: 120px; height: auto;" />
  <img src="/images/chiasma-2.png" alt="Chiasma2" style="width: 240px; height: auto;" />
</div>


> *Hence our model of meiotic crossing over will give the following situation associated with chiasma: a narrow zone of gene conversion bounded by two zones of multiple fractures of total odd order, each involving a pair of distinct chromatids.*

[^1]: Apparently, without which, offspring suffers from aneuploidy. 

**Claude made this. It's slightly wrong but fun:**

<div style="width: 100%; overflow: hidden;">
  <iframe src="/meiotic-geometry.html" title="Thom's Meiotic Geometry Visualization" style="width: 200%; height: 1600px; border: 0; border-radius: 8px; transform: scale(0.5); transform-origin: top left;" loading="lazy"></iframe>
</div>