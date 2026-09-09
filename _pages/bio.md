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

TODO: short narrative bio (3-4 sentences, first person, for a grant-evaluator audience).

## Research trajectory

TODO: organize by project/theme rather than by employer — e.g. one paragraph or bullet block
per research thread (statistical-physics inference of protein structure/fitness → generative
models of protein sequences → antibody/peptide design → AI for precision medicine at CEA),
each with 2-3 sentences on the question, approach, and outcome.

## Funding

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

## Service

TODO: peer review activity (journals reviewed for) and any committee membership.

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
