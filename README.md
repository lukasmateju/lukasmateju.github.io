# lukasmateju.github.io
Personal repository for my E-Portfolio website displaying my experience, projects, and personal information

## Local Setup

Copy `.env.example` to `.env.local` and adjust values for your Mac. `.env.local` is ignored by git.

Common commands are available through `make`:

- `make dev` starts the Astro dev server.
- `make check` runs Astro diagnostics.
- `make build` builds the static site.
- `make docker-dev` starts the Docker-based dev environment.

## Content Controls

Project entries live in `src/content/projects`. The frontmatter controls whether a project is public:

- `published`: builds the detail page and allows the project to appear publicly.
- `showOnHome`: allows the project card to appear on the homepage.
- `showInArchive`: allows the project card to appear on `/projects`.
- `featured`: marks a project as featured on `/projects`.

Page/nav settings live in `src/config/site.ts`.
