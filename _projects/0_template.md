---
layout: page
title: TODO short project title
description: TODO one line, shown on the project card and as the meta description
img: assets/img/projects/TODO_card.jpg      # card image in the projects grid, ~1200x800
importance: 1                                # ordering within the category
category: current                            # current | past
published: false

# Image shown at the top of the project page itself.
# Omit the whole block to render the page without a hero image.
hero:
  path: assets/img/projects/TODO_hero.jpg
  caption: TODO one line describing what the figure shows
  zoomable: true

# Right panel, block 1: institution logos.
# Logos go in assets/img/logos/, ideally SVG or transparent PNG, height >= 120px.
institutions:
  - name: TODO Institution
    logo: assets/img/logos/TODO.svg
    url: https://TODO

# Right panel, block 2: people.
collaborators:
  - name: TODO Name Surname
    institution: TODO Lab, TODO Institution
    role: TODO two or three words, e.g. experimental validation
    url: https://TODO                        # optional
  - name: TODO Name Surname
    institution: TODO
    role: TODO
    group: Students                          # optional; entries with the same group are
                                             # rendered under a subheading

# Right panel, block 3: funding.
funding:
  - agency: TODO
    programme: TODO
    title: TODO project acronym or short title
    role: TODO PI | co-PI | participant
    years: TODO 2026-2029
    grant: TODO reference number
    url: https://TODO                        # optional

# Publications rendered by the theme at the bottom of the page.
# Recent al-folio: comma-separated BibTeX keys from _bibliography/papers.bib
related_publications: TODO_key1, TODO_key2
# Older al-folio: uncomment the line below instead and drop the one above
# related_publications: true
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

TODO first paragraph: the context and the open problem. What the field currently does, and where
it falls short for this specific question.

TODO second paragraph: the approach. What is combined or inferred, why that addresses the gap,
and how the results are validated.

</div>
<div class="col-lg-4">

{% include project_panel.liquid %}

</div>
</div>