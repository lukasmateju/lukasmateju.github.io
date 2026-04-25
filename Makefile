SHELL := /bin/bash

ENV_FILE ?= .env.local
PORT ?= 4321
PID_FILE ?= .astro/dev-server.pid
LOG_FILE ?= .astro/dev-server.log

ifneq (,$(wildcard $(ENV_FILE)))
include $(ENV_FILE)
export
COMPOSE_ENV_FILE_ARG := --env-file $(ENV_FILE)
endif

.PHONY: help install sync dev dev-bg dev-stop dev-status dev-logs check build preview clean dns-check docker-dev docker-stop docker-logs

help:
	@printf "Common commands:\n"
	@printf "  make install      Install npm dependencies\n"
	@printf "  make sync         Generate Astro content/types\n"
	@printf "  make dev          Start Astro locally in the foreground\n"
	@printf "  make dev-bg       Start Astro locally in the background\n"
	@printf "  make dev-stop     Stop the background Astro dev server\n"
	@printf "  make dev-status   Show background dev server status\n"
	@printf "  make dev-logs     Tail background dev server logs\n"
	@printf "  make check        Run Astro diagnostics\n"
	@printf "  make build        Build the static site\n"
	@printf "  make preview      Preview the built site\n"
	@printf "  make dns-check    Check custom domain DNS records\n"
	@printf "  make docker-dev   Start the Docker dev container\n"
	@printf "  make docker-stop  Stop Docker containers\n"
	@printf "  make docker-logs  Tail Docker logs\n"

install:
	npm install

sync:
	ASTRO_TELEMETRY_DISABLED=$${ASTRO_TELEMETRY_DISABLED:-1} npm run sync

dev:
	ASTRO_TELEMETRY_DISABLED=$${ASTRO_TELEMETRY_DISABLED:-1} npm run dev -- --host $${HOST:-0.0.0.0} --port $${PORT:-$(PORT)}

dev-bg:
	@mkdir -p .astro
	@if [ -f "$(PID_FILE)" ] && kill -0 "$$(cat $(PID_FILE))" 2>/dev/null; then \
		printf "Astro dev server is already running with PID %s\n" "$$(cat $(PID_FILE))"; \
	else \
		nohup env ASTRO_TELEMETRY_DISABLED=$${ASTRO_TELEMETRY_DISABLED:-1} npm run dev -- --host $${HOST:-0.0.0.0} --port $${PORT:-$(PORT)} > "$(LOG_FILE)" 2>&1 & \
		printf "%s" "$$!" > "$(PID_FILE)"; \
		printf "Astro dev server started at http://localhost:%s with PID %s\n" "$${PORT:-$(PORT)}" "$$!"; \
		printf "Logs: %s\n" "$(LOG_FILE)"; \
	fi

dev-stop:
	@if [ -f "$(PID_FILE)" ] && kill -0 "$$(cat $(PID_FILE))" 2>/dev/null; then \
		kill "$$(cat $(PID_FILE))"; \
		printf "Stopped Astro dev server with PID %s\n" "$$(cat $(PID_FILE))"; \
		rm -f "$(PID_FILE)"; \
	else \
		printf "No background Astro dev server found.\n"; \
		rm -f "$(PID_FILE)"; \
	fi

dev-status:
	@if [ -f "$(PID_FILE)" ] && kill -0 "$$(cat $(PID_FILE))" 2>/dev/null; then \
		printf "Astro dev server is running at http://localhost:%s with PID %s\n" "$${PORT:-$(PORT)}" "$$(cat $(PID_FILE))"; \
	else \
		printf "Astro dev server is not running through make dev-bg.\n"; \
	fi

dev-logs:
	@mkdir -p .astro
	@touch "$(LOG_FILE)"
	tail -f "$(LOG_FILE)"

check:
	ASTRO_TELEMETRY_DISABLED=$${ASTRO_TELEMETRY_DISABLED:-1} npm run check

build:
	ASTRO_TELEMETRY_DISABLED=$${ASTRO_TELEMETRY_DISABLED:-1} npm run build

preview:
	ASTRO_TELEMETRY_DISABLED=$${ASTRO_TELEMETRY_DISABLED:-1} npm run preview -- --host $${HOST:-0.0.0.0} --port $${PORT:-$(PORT)}

clean:
	rm -rf dist .astro

dns-check:
	@printf "A records for lukasmateju.com:\n"
	@dig lukasmateju.com +noall +answer -t A
	@printf "\nAAAA records for lukasmateju.com:\n"
	@dig lukasmateju.com +noall +answer -t AAAA
	@printf "\nCNAME records for www.lukasmateju.com:\n"
	@dig www.lukasmateju.com +noall +answer -t CNAME
	@printf "\nCAA records for lukasmateju.com:\n"
	@dig lukasmateju.com +noall +answer -t CAA

docker-dev:
	docker compose $(COMPOSE_ENV_FILE_ARG) up portfolio-dev

docker-stop:
	docker compose down

docker-logs:
	docker compose logs -f portfolio-dev
