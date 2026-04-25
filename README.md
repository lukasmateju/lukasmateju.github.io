# lukasmateju.github.io
Personal repository for my E-Portfolio website displaying my experience, projects, and personal information

## Local Setup

Copy `.env.example` to `.env.local` and adjust values for your Mac. `.env.local` is ignored by git.

Common commands are available through `make`:

- `make dev` starts the Astro dev server in the foreground. Stop it with `Ctrl+C`.
- `make dev-bg` starts the Astro dev server in the background.
- `make dev-stop` stops the background dev server.
- `make dev-status` checks whether the background dev server is running.
- `make dev-logs` tails the background dev server log.
- `make check` runs Astro diagnostics.
- `make build` builds the static site.
- `make dns-check` checks the custom domain DNS records.
- `make docker-dev` starts the Docker-based dev environment.
- `make docker-stop` stops Docker containers from `compose.yml`.

## Custom Domain

The production domain is `lukasmateju.com`.

In GitHub, go to `Settings > Pages` and set:

- Source: `GitHub Actions`
- Custom domain: `lukasmateju.com`
- Enforce HTTPS: enabled after GitHub finishes provisioning the certificate

In Cloudflare DNS, configure:

- `A` record, name `@`, value `185.199.108.153`
- `A` record, name `@`, value `185.199.109.153`
- `A` record, name `@`, value `185.199.110.153`
- `A` record, name `@`, value `185.199.111.153`
- `CNAME` record, name `www`, value `lukasmateju.github.io`

Keep the GitHub Pages records DNS-only until GitHub has issued the HTTPS certificate.

## Content Controls

Project entries live in `src/content/projects`. The frontmatter controls whether a project is public:

- `published`: builds the detail page and allows the project to appear publicly.
- `showOnHome`: allows the project card to appear on the homepage.
- `showInArchive`: allows the project card to appear on `/projects`.
- `featured`: marks a project as featured on `/projects`.

Page/nav settings live in `src/config/site.ts`.
