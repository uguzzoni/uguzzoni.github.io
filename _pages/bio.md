---
layout: page
permalink: /bio/
title: bio
nav: true
nav_order: 1
description: >
  Bio and research trajectory of Guido Uguzzoni — protein design, protein language models,
  fitness landscape inference, phage display and peptide design, machine learning for
  structural biology.
---

<div class="profile float-right">
  {% assign profile_image_path = 'assets/img/prof_pic.jpg' %}
  {% capture sizes %}(min-width: {{ site.max_width }}) {{ site.max_width | minus: 30 | times: 0.3 }}px, (min-width: 576px) 30vw, 95vw{% endcapture %}
  {%
    include figure.liquid loading="eager" path=profile_image_path class="img-fluid z-depth-1 rounded" sizes=sizes alt="Guido Uguzzoni"
    cache_bust=true
  %}
  <div class="more-info">
    <p>
      <a href="{{ 'assets/pdf/cv_2pg_2025.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-file-pdf"></i> Download full CV (PDF)
      </a>
    </p>
  </div>
</div>

## Bio

I am a permanent researcher in the Genomics and Chemogenomics team at CEA's Biosciences and Bioengineering for Health laboratory (BGE) in Grenoble, which I joined in December 2024. I trained as a statistical physicist and moved to computational biology, with research positions at Université Pierre et Marie Curie, Politecnico di Torino and the Italian Institute for Genomic Medicine. My work develops machine learning methods that learn sequence-function relationships from high-throughput screening experiments and use them to design proteins and peptides with a defined biochemical activity. I develop these methods on concrete therapeutic targets, in collaboration with experimental groups that provide the constraints and the validation.

## Research trajectory

**Inferring structure from sequence statistics.** My early work used maximum-entropy models of
homologous sequence families to extract structural constraints from coevolution signal. The
question was how far residue-residue couplings inferred from sequence alone can resolve contacts,
including across protein-protein interfaces, where the signal is diluted and interacting partners
must first be matched. This line set the framework I still work in: a sequence family as a sample
from a distribution shaped by selection.

**Learning fitness landscapes from selection experiments.** Moving from natural to experimental data, I developed methods that infer sequence-function relationships from high-throughput screening. Directed evolution, phage display and deep mutational scanning return read counts across selection rounds rather than direct measurements, so the model must describe the landscape and the experiment that samples it jointly. The resulting models are generative: they propose sequences optimized for activity instead of only scoring existing ones.

**Designing therapeutic proteins with experimental partners.** I applied this framework to antibody specificity with Collège de France, to peptides that selectively bind KRAS-mutated
tumors with Candiolo Cancer Institute, and to the tropism of adeno-associated viral capsids for gene therapy with Institut de la Vision. Each collaboration runs as a design and test cycle, where the screening data of one round trains the model for the next. 

**Structure-aware design and AI for health (current).** At CEA I combine the selection signal from screening experiments with structure-based generative models, including AlphaFold-based hallucination and inverse folding, so that designs are constrained by both measured activity and predicted structure. Current targets include peptides inhibiting the influenza polymerase interface. In parallel I work on machine learning methods for clinical omics data in oncology.

## Education and positions

**Education**

- Master of Business Administration — MIB Trieste School of Management, Italy (2022)
- Ph.D. in Statistical Physics and Computational Biology — Università di Parma, Italy (2014)
- Master's degree in Physics — Università di Roma "La Sapienza", Italy (2010)
- Bachelor's degree in Physics — Università di Roma "La Sapienza", Italy (2007)

**Positions**

- Researcher, IRIG CEA, Grenoble, France (2024 - present) — AI for precision medicine
- Researcher, Candiolo Cancer Institute, Italy (2022 - 2024) — AI for protein design
- Postdoctoral Researcher, Politecnico di Torino, Italy (2018 - 2022) — Generative models of
  biological active protein sequences
- Research Engineer, Institut Curie, Paris, France (2016 - 2017) — Reconstruction of causal
  graphs for clinical applications
- Postdoctoral Researcher, Université Pierre et Marie Curie, Paris (2014 - 2016) — Statistical
  physics inference approaches for protein structure prediction


<!-- ## Funding

TODO: grants obtained, with role (PI / co-PI / participant) and funding body.

## Supervision and teaching

TODO: counts of PhD/M2/M1 students supervised, plus lectures and hackathons.

## Software and data

Repositories from [github.com/uguzzoni](https://github.com/uguzzoni) (see also `_data/repositories.yml`):

- **[BiophysViabilityModel](https://github.com/uguzzoni/BiophysViabilityModel)** — TODO: one-line description. Paper: TODO:
- **[PlmDCAtime](https://github.com/uguzzoni/PlmDCAtime)** — TODO: one-line description. Paper: TODO:
- **[DMSsim](https://github.com/uguzzoni/DMSsim)** — TODO: one-line description. Paper: TODO:
- **[PottsMC](https://github.com/uguzzoni/PottsMC)** — TODO: one-line description. Paper: TODO:

## Patents

- Uguzzoni, G., Pagnani, A., Fernandez-de-Cossio-Diaz, J. (2022). *Computer implemented method to
  optimize physical-chemical properties of biological sequences.* US Patent App. 17/620,768.

 -->
