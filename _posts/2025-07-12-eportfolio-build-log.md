---
layout: post
title: E-Portfolio Build Log
description: Ongoing updates, fixes, and features for this site
date: 2025-07-12
last_updated: 2025-08-12 20:00:00
tags: [jekyll, website, updates]
categories: website
giscus_comments: true
related_posts: false
featured: true
toc:
  beginning: true
---

This post serves as a build log for my personal e-portfolio. Each section below documents updates, features, and fixes I’ve made over time.

---

## Beta (v0.00–v0.05)

### v0.05 — Resume Fixes, Giscus Comments, and Posts Overhaul (August 2, 2025)
- Enabled [Giscus](https://giscus.app) comments on post pages using GitHub Discussions.
- Tested authentication and embed on deployed GitHub Pages site.
- Polished resume page layout and spacing.
- Applied additional formatting to `.bullet-section` and adjusted font sizes for PDF rendering.
- Added support for linking external blog posts (e.g., LinkedIn) to Jekyll post list.
- Introduced `--global-divider-color` as a custom CSS variable for adaptive borders in light/dark mode.
- Styled `<hr>` elements and header bar dividers accordingly.
- Applied divider styles to `.featured-posts`, `.post-list`, and `.tag-category-list` sections.
- Updated `custom.sass` for consistent card scaling and spacing.
- Updated `external-posts.rb` plugin to allow `title`, `date`, `external_source`, `redirect`, and `feed_content`.
- Added first external post linking to [LinkedIn research presentation](https://www.linkedin.com/posts/lukas-mateju_this-past-tuesday-i-presented-my-summer-activity-7357409881961734144-Woju?utm_source=share&utm_medium=member_desktop).
- Added `featured: true` option to surface key external posts at top of list.

### v0.04 — Blog → Build Notes (July 24–27, 2025)
- Renamed `blog/` directory and all routes to `posts/` for better framing as a build log.
- Adjusted navigation label and page permalinks.
- Moved example posts to `/examples/` and excluded from main feed.
- Enabled proper pagination with trail settings in `posts.md`.
- Minor edits to post meta display, including year link and icon logic.

### v0.03 — Navigation + Verification (July 20, 2025)
- Finalized `navbar.html` navigation with dropdowns for Posts, Projects, and Resume.
- Added support for project categories and horizontal cards.
- Enabled Google Site Verification and Google Analytics using custom `head.html` includes.
- Updated metadata defaults and favicon links.
- Resolved issues with site description metadata in `_config.yml`.

### v0.02 — About Page Overhaul (July 19, 2025)
- Reformatted the About section and created `about-custom.liquid` for modular layout.
- Reworked photo styling, added social links, and contact section styling.
- Integrated more semantic structure and spacing with `about-box`.
- Fixed vertical alignment issues with custom social icons.
- Verified and added custom icons with Font Awesome.
- Added location header and "he/him" label styling.

### v0.01 — Initial Setup (July 12, 2025)
- Chose the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme for its clean academic/portfolio style.
- Initialized the repository and added LICENSE.
- Set up GitHub Pages with basic config (`_config.yml`) and folder structure.
- Started customizing the About page and layout content.
- Created first sample pages and navigation structure.
- Docker development environment set up via `docker-compose.yml`.