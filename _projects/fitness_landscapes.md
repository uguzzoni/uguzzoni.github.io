---
layout: page
title: Inference of experimental protein fitness landscapes
description: Probabilistic models that infer sequence-function relationships directly from high-throughput selection experiments
img: assets/img/projects/fitness_card.jpg
importance: 1
category: current
published: true

hero:
  path: assets/img/projects/fitness_hero.jpg
  caption: TODO one line describing the figure, e.g. inferred selection energy across rounds of a phage display experiment
  zoomable: true

institutions:
  - name: IPhT, CEA Saclay
    logo: assets/img/logos/ipht.svg
    url: https://www.ipht.fr/
  - name: Politecnico di Torino
    logo: assets/img/logos/TODO.svg
    url: https://TODO
  - name: Sorbonne Université
    logo: assets/img/logos/TODO.svg
    url: https://TODO
  - name: ESPCI Paris

collaborators:
  - name: Jorge Fernandez de Cossio Diaz
    institution: IPhT, CEA Saclay
  - name: Andrea Pagnani
    institution:  Politecnico di Torino
  - name: Luca Sesta
    institution:  Politecnico di Torino
  - name: Clement Nizak
    institution:  Sorbonne Université
  - name: Olivier Rivoire
    institution: ESPCI Paris

funding:
  - agency: TODO
    programme: TODO
    title: TODO project title or acronym 
    years: TODO
    grant: TODO

# TODO replace with the BibTeX keys of the MBE 2021 and PLOS Comput Biol 2024 papers
related_publications: fernandez2021unsupervised, sesta2021amala, sesta2023inference, fernandez2024inference, de2024unsupervised
---

<div class="row">
<div class="col-lg-8" markdown="1">

{% if page.hero %}
{% include figure.liquid
   path=page.hero.path
   caption=page.hero.caption
   zoomable=page.hero.zoomable
   class="img-fluid rounded z-depth-1" %}
{% endif %}

High-throughput selection experiments such as deep mutational scanning, phage display and directed
evolution probe millions of sequence variants in a single assay, and are now the main source of
quantitative sequence-function data. What they return, however, is not a measurement of function
but a set of read counts across selection rounds, shaped by the library composition, the stringency
of each round and the amplification steps in between. Models trained directly on enrichment ratios
inherit these artifacts and conflate the landscape with the experiment that sampled it.
Evolutionary models, at the other end, capture the constraints acting on natural sequences but are
blind to the specific biochemical activity being selected for.

I develop probabilistic models that describe the selection experiment explicitly, inferring a
sequence-dependent selection energy by maximum likelihood on the observed counts. Because the
experimental process is part of the likelihood, the inferred landscape is separated from
round-specific effects, and epistatic couplings can be estimated without assuming additivity. These
models are generative: they do not only score existing variants but define a distribution from
which optimized sequences can be sampled, either directly or by guiding pretrained protein
generative models toward regions of high predicted activity. The framework is developed on data
produced by experimental collaborators and validated prospectively on newly designed sequences.

</div>
<div class="col-lg-4">

{% include project_panel.liquid %}

</div>
</div>
