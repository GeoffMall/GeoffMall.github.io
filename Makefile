

dev:
	# TODO: run all the commands in parallel
	# make watch_templ
	# make watch_tailwind
	# make watch_go

build: build_static

install: install_templ install_tailwind

install_templ:
	go install github.com/a-h/templ/cmd/templ@latest
install_tailwind:
	npm install -D tailwindcss

dev_templ:
	templ generate --watch
dev_tailwind:
	npx tailwindcss -i ./assets/tailwind.css -o ./assets/static/styles.css --watch
dev_go:
	air -c .air.toml

build_templ:
	templ generate
build_tailwind:
	npx tailwindcss -i ./assets/tailwind.css -o ./docs/static/styles.css
build_github_page:
	go run main.go -static
build_go:
	go build -o server main.go
build_static: build_templ build_tailwind
	go run main.go -static


go_run_main:
	go run main.go

tailwindcss_init:
	npx tailwindcss init

