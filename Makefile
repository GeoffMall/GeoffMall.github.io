build: build_templ build_tailwind build_github_page

install: install_templ install_tailwind

dev:
	# TODO

install_templ:
	go install github.com/a-h/templ/cmd/templ@latest
install_tailwind:
	npm install -D tailwindcss

dev_tailwind:
	npx tailwindcss -i ./assets/tailwind.css -o ./assets/static/styles.css --watch
dev_go:
	./scripts/dev.sh

build_templ:
	templ generate
build_tailwind:
	npx tailwindcss -i ./assets/tailwind.css -o ./docs/static/styles.css
build_github_page:
	go run main.go -static


tailwindcss_init:
	npx tailwindcss init

