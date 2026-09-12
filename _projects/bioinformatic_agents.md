---
layout: page
title: Context-aware bioinformatic AI agents
description: Inverting differential expression analysis by building context-specific knowledge graphs that generate directional predictions
img: assets/img/projects/agents_card.png
importance: 4
category: current
published: true

hero:
  path: assets/img/projects/agents_hero.jpg
  caption: TODO one line, e.g. schema of the extraction pipeline from literature to context-specific knowledge graph
  zoomable: true

institutions:
  - name: CEA IRIG 
    logo: assets/img/logos/cea.svg
    url: https://www.cea.fr/

collaborators:
  - name: Yoann Cure
    institution: CEA, L_Sim team
    role: Retrieval and persistent-memory architecture
    url: https://TODO
  - name: Christophe Battail
    institution: CEA IRIG BGE, Grenoble
    role: Pharmacogenomics
    url: https://TODO
  - name: Hector Pezet
    institution: CEA IRIG BGE, Grenoble
    role: TODO internship topic in a few words
    group: Students

funding:
  - agency: MIAI UGA
    programme: TODO
    title: TODO
    role: TODO
    years: TODO
    grant: TODO

# TODO add keys once there are outputs; remove the field entirely if empty,
# an empty value makes the theme render a bare Publications heading
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

Differential gene expression analysis follows a fixed order: genes are ranked by a statistical
test, and biological meaning is attached afterwards through enrichment against ontologies. The
interpretation step is where most of the prior knowledge enters, and it enters late, in aggregate
form and without direction, so a gene list is rarely sufficient to discriminate between competing
mechanistic explanations. Meanwhile the relevant knowledge, including the sign of regulatory
relationships and the context in which they hold, is distributed across the literature and curated
databases in a form that is not directly computable.

This project inverts the order. Prior knowledge is first extracted from publications and curated
resources into a context-specific knowledge graph, structured by an ontology that fixes the schema
of the extracted relations and preserves their direction and provenance. The graph then generates
explicit, directional predictions of gene regulation by signed propagation from seed nodes, and
experimental data are evaluated against those predictions through a coherence score, so that the
informative output becomes the disagreement rather than the ranking. The case study is resistance
to anti-PD-1 immunotherapy in clear cell renal cell carcinoma. The current phase concerns the
extraction pipeline and the reliability of the constructed graph; validation against patient cohort
data follows.

</div>
<div class="col-lg-4">

{% include project_panel.liquid %}

</div>
</div>
