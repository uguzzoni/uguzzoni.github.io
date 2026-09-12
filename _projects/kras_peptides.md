---
layout: page
title: Anti-tumor peptides for KRAS-mutant lung cancer
description: Whole-cell phage display and probabilistic modelling to identify peptide binders associated with KRAS-mutant contexts
img: assets/img/projects/kras_card.jpg
importance: 3
category: current
published: true

hero:
  path: assets/img/projects/kras_hero.jpg
  caption: TODO one line, e.g. selection energies of the four latent modes across the cell line panel
  zoomable: true

institutions:
  - name: Candiolo Cancer Institute
    logo: assets/img/logos/candiolo.svg
    url: https://www.ircc.it/
  - name: Università di Torino
    logo: assets/img/logos/TODO.svg
    url: https://TODO
  - name: Politencico di Torino
    logo: assets/img/logos/TODO.svg
    url: https://TODO

collaborators:
  - name: Serena Marchiò
    institution: Candiolo Cancer Institute, Università di Torino
    url: https://TODO
  - name: Andrea Pagnani
    institution: Politecnico di Torino
    role: TODO
  - name: Carolina Belisario
    institution: Candiolo Cancer Institute, Italy
    role: TODO

funding:
  - agency: AIRC
    programme: TODO
    title: TODO
    role: TODO
    years: TODO
    grant: TODO

# TODO add the key of the manuscript once accepted
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

KRAS is among the most frequently mutated oncogenes in lung adenocarcinoma, and the recent covalent
inhibitors address only a subset of alleles. An alternative to inhibiting the protein is to exploit
the fact that the oncogenic state remodels the cell surface, so that mutant cells may be
distinguishable from their wild-type counterparts by an extracellular phenotype. Peptide ligands
that bind such a phenotype would be useful as targeting moieties for delivery rather than as
inhibitors. Identifying them is difficult because the relevant surface determinants are not known
in advance, which rules out target-based screening.

The project uses whole-cell phage display biopanning of a 7-residue peptide library against a panel
of lung cancer cell lines carrying different KRAS backgrounds, including wild-type and the G12V,
G12D and G12C mutants, followed by deep sequencing of the selected populations. Enrichment alone
does not separate genotype-associated binding from amplification bias and from binding to features
shared by all cell lines, so the counts are analysed with a probabilistic model that assigns each
peptide four distinct contributions: unspecific background, counter-selection against pooled
wild-type cells, wild-type-associated binding and mutant-associated binding. Candidates are then
prioritised by multi-objective optimisation over these components and validated by flow cytometry
on the cell panel.

</div>
<div class="col-lg-4">

{% include project_panel.liquid %}

</div>
</div>
