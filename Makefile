SHELL := /bin/bash

ENV_FILE ?= .env.local
PORT ?= 4321

ifneq (,$(wildcard $(ENV_FILE)))
include $(ENV_FILE)
export
COMPOSE_ENV_FILE_ARG := --env-file $(ENV_FILE)
endif

.PHONY: help install sync dev check build preview clean docker-dev docker-stop docker-logs

help:
	@printf "Common commands:\n"
	@printf "  make install      Install npm dependencies\n"
	@printf "  make sync         Generate Astro content/types\n"
	@printf "  make dev          Start Astro locally\n"
	@printf "  make check        Run Astro diagnostics\n"
	@printf "  make build        Build the static site\n"
	@printf "  make preview      Preview the built site\n"
	@printf "  make docker-dev   Start the Docker dev container\n"
	@printf "  make docker-stop  Stop Docker containers\n"
	@printf "  make docker-logs  Tail Docker logs\n"

install:
	npm install

sync:
	ASTRO_TELEMETRY_DISABLED=$${ASTRO_TELEMETRY_DISABLED:-1} npm run sync

dev:
	ASTRO_TELEMETRY_DISABLED=$${ASTRO_TELEMETRY_DISABLED:-1} npm run dev -- --host $${HOST:-0.0.0.0} --port $${PORT:-$(PORT)}

check:
	ASTRO_TELEMETRY_DISABLED=$${ASTRO_TELEMETRY_DISABLED:-1} npm run check

build:
	ASTRO_TELEMETRY_DISABLED=$${ASTRO_TELEMETRY_DISABLED:-1} npm run build

preview:
	ASTRO_TELEMETRY_DISABLED=$${ASTRO_TELEMETRY_DISABLED:-1} npm run preview -- --host $${HOST:-0.0.0.0} --port $${PORT:-$(PORT)}

clean:
	rm -rf dist .astro

docker-dev:
	docker compose $(COMPOSE_ENV_FILE_ARG) up portfolio-dev

docker-stop:
	docker compose down

docker-logs:
	docker compose logs -f portfolio-dev
