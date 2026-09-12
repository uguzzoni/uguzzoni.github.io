---
layout: page
title: Anti-influenza peptides
description: Designing peptide inhibitors of the PA-PB1 interface of the influenza polymerase
img: assets/img/projects/influenza_card.jpg
importance: 2
category: current
published: true

hero:
  path: assets/img/projects/influenza_hero.jpg
  caption: TODO one line, e.g. predicted structure of a designed peptide bound to the PA subunit (reference complex PDB 2ZNL)
  zoomable: true

institutions:
  - name: Institut de Biologie Structurale
    logo: assets/img/logos/ibs.svg
    url: https://www.ibs.fr/


collaborators:
  - name: Darren Hart
    institution: IBS, Grenoble
    url: https://TODO
  - name: Alberto Florez Prada
    institution: IBS, Grenoble
    url: https://TODO
 

# funding:
#   - agency: TODO ANR
#     programme: TODO PRME
#     title: TODO acronym
#     role: TODO PI | co-PI | participant
#     years: TODO
#     grant: TODO

# TODO BibTeX key of the PLOS Comput Biol 2024 paper underpinning the fitness model,
# plus any output of this project once published
# related_publications: TODO_key1
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

The influenza RNA polymerase is a heterotrimer whose assembly depends on the interaction between the PA and PB1 subunits. The interface is small, structurally characterised and highly conserved across influenza strains, which makes it an attractive antiviral target and one where resistance is costly for the virus. Peptides derived from the PB1 N-terminus bind PA and inhibit assembly, but their affinity is insufficient for therapeutic use, and improving it by rational mutation is limited by the fact that the determinants of binding are distributed and epistatic.

This project designs optimised peptide binders by combining two signals that are individually incomplete. Structural plausibility comes from AlphaFold2-based hallucination, which optimises a relaxed sequence representation against a predicted-structure objective but has no access to measured activity. Selection signal comes from a fitness model trained on phage display deep sequencing data for this interface, which captures what the experiment actually selects but is blind to interface geometry. The two enter a single composite objective, so that candidates must satisfy both. Designs are filtered by structure prediction of the complex, then validated experimentally by biophysical binding measurements and cellular antiviral assays, with an mRNA-LNP formulation as the intended delivery route.

</div>
<div class="col-lg-4">

{% include project_panel.liquid %}

</div>
</div>
