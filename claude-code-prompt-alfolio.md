# Task: restructure my al-folio academic website

You are working on my personal academic website (Jekyll + al-folio), currently deployed at
https://uguzzoni.github.io/ from this repository. I am Guido Uguzzoni, permanent researcher at
CEA-Grenoble (BGE laboratory, Gen&Chem team). The site needs to become more informative and
better organised, mainly because grant evaluators use it as a complementary source of information.

## Ground rules

1. **Inspect before editing.** Read the repo structure first and report a short plan before making
   changes. Check which conventions this al-folio version uses (`.liquid` vs `.html` includes,
   `_data/` usage, `_config.yml` flags) instead of assuming.
2. **Do not merge upstream al-folio.** The theme version is frozen. All changes are local.
3. **Do not touch `_projects/` or the projects page.** Content there will be reworked separately.
4. **Never invent content.** Where I have to supply names, dates, titles, grant numbers or links,
   insert a clearly marked `TODO:` placeholder. Do not fabricate plausible-looking entries.
5. **Content in YAML, not in markup.** Lists of people and similar repeated content go in
   `_data/*.yml` files, rendered by a small include. I want to update them by editing YAML.
6. Preserve dark mode, responsive layout and existing styling conventions. Reuse al-folio's
   existing CSS classes rather than introducing new ad-hoc styles where possible.
7. Work on a branch, commit in small logical steps, and verify the site builds and renders
   before finishing.

## Local-only workflow

All work happens in this local clone. Deployment to GitHub comes later, in a separate step that
I will drive.

- **Do not push anything.** No `git push`, no PR, no tag. Leave the branch committed locally and
  tell me its name when you are done.
- **Do not run or modify the deploy pipeline.** al-folio publishes through a GitHub Action that
  builds and pushes to `gh-pages`. Leave `.github/workflows/` untouched, except to tell me if the
  cleanup in Part 1 makes some step in it obsolete. I decide whether to change it.
- **Verify locally.** Get `bundle exec jekyll serve` running and actually check the rendered pages,
  including the mobile breakpoint for the two side-by-side panels. If the Ruby toolchain fights
  you, use the Docker setup that ships with al-folio rather than spending time on gem versions.
  Also run a build with `JEKYLL_ENV=production` at the end, since that path differs from the dev
  server and is what the Action will use.
- Report any warning or error in the build output even if the page still renders.

## Part 1: cleanup

- **Remove leftover template text.** The about page still contains the default al-folio sentence
  "You can even add a little note about which of these is the best way to reach you." Remove it and
  check the whole repo for other placeholder text from the template.
- **Fix the broken publication previews.** The selected publications on the home page currently
  render empty images pointing at `assets/img/publication_preview/` with no filename. Either wire up
  real preview images or disable thumbnails in `_config.yml`. Report which `.bib` entries have a
  `preview:` field and which do not, so I can supply the missing figures. Default to disabling
  thumbnails if no images are available, so nothing renders broken in the meantime.
- **Prune unused theme features** to reduce maintenance surface: blog/posts, distill support,
  teaching page, repositories page, books/bookshelf, and any other section I do not use. Remove the
  corresponding pages, layouts, includes and config blocks. List what you removed.
- **News hygiene.** Expired announcements are still the top items. Keep at most the 5 most recent
  entries on the home page with the rest in the `/news/` archive, and make sure that is what the
  config actually does.

## Part 2: home page structure

Rebuild the home page (`_pages/about.md` and its layout) in this order:

1. **Research description, no photo.** Move the profile picture to the Bio page. The text should be
   two-tiered: one opening sentence understandable by a non-specialist evaluator (what I design and
   for which medical purpose), then three or four technical sentences. Keep my existing text as the
   basis for the technical part; mark the opening sentence as `TODO:` if you cannot derive it
   faithfully from what is already there. Keep the CEA/BGE/IRIG affiliation links and the postal
   address.
2. **Announcements panel** (the existing news mechanism). It must be able to carry three kinds of
   item: open positions, new publications, and talks/seminars. Add an `icon` or `category` field to
   the news front matter so the three kinds are visually distinguishable, and add a permanent line
   at the bottom of the panel: "I am always interested in motivated M2 and PhD applications, feel
   free to get in touch."
3. **Two side-by-side panels**: selected publications on the left, collaborators on the right.
   - Selected publications: keep it driven by `selected: true` in `_bibliography/papers.bib`, but
     show 5 entries instead of 3. Flag for me which entries are currently marked selected.
   - Collaborators: new `_data/collaborators.yml`, rendered as a grouped list, no logos. Group by
     the nature of the collaboration (experimental / computational / clinical). Each entry has
     name, institution, optional URL. Pre-fill the groups and the institutions I already work with
     (IPhT Saclay, IBS, MEM, Sorbonne Université, Institut de la Vision, DIGPHAT and KATHY
     consortia) and leave `TODO:` for the individual names.
   - On mobile the two panels must stack cleanly.
4. **Alumni panel**, new `_data/alumni.yml`, rendered as a grouped plain list with three groups:
   PhD students, past members, M2/M1 internships. Entry fields: name, years, short topic, optional
   current position (used only for past members). Structure it so a group renders nothing if empty.
   Populate with `TODO:` placeholders for: 3 current PhD students, 1 past member, 1 M2 intern,
   3 M1 interns.

## Part 3: navigation and pages

Top navigation must be exactly: **Bio, Publications, Projects**.

- **Bio** replaces the current CV page. It is a simplified CV organised around past and present
  research projects rather than a reverse-chronological job list. It carries the profile photo and
  a link to download a full CV in PDF (`TODO:` for the file). Structure it with these sections,
  using `TODO:` placeholders where I need to supply content:
  - short narrative bio (3-4 sentences)
  - research trajectory, organised by project/theme
  - funding: grants obtained, with my role (PI, co-PI, participant) and the funding body
  - supervision and teaching: counts of PhD/M2/M1 supervised, plus lectures and hackathons
  - software and data: 3-4 repositories, each with one line on what it does and the linked paper
  - patents: the US patent application
  - service: peer review activity and any committees
  - education and positions (compact, at the end)
- **Publications**: full list, unchanged in mechanism (`_bibliography/papers.bib` via
  jekyll-scholar), but check that grouping by year, links and the `selected` filter all work after
  the cleanup.
- **Projects**: leave entirely as is.
- Remove any other nav entry.

## Part 4: discoverability

- Add a per-page `description` front matter field and make sure the layout emits it as a
  `<meta name="description">`. Write descriptions for the home, Bio and Publications pages using
  the terminology an evaluator would search for (protein design, protein language models, fitness
  landscape inference, phage display, peptide design, machine learning for structural biology).
- Verify `jekyll-sitemap` is active and `url`/`baseurl` in `_config.yml` are correct.
- Add an ORCID link alongside the existing email, GitHub, LinkedIn and Google Scholar icons
  (`TODO:` for the URL).
- HAL: the profile does not exist yet, so **do not add a visible link**. Instead, leave the entry
  in place but disabled, commented in `_config.yml` next to the other social handles, with a short
  note saying it only needs the identifier filled in and uncommenting. Nothing broken or empty must
  render on the page.
- Make sure the BGE/Gen&Chem lab link in the home description is prominent, since I plan to set up
  a reciprocal link from the lab site.

## Deliverable

When done, give me:
- a summary of the changes, grouped by the four parts above
- the complete list of `TODO:` placeholders with file and line, so I can fill them in one pass
- any decision you took where the al-folio structure forced a compromise
