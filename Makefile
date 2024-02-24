build: build_templ build_tailwind build_github_page

install: install_templ install_tailwind

dev:
	# TODO

install_templ:
	go install github.com/a-h/templ/cmd/templ@latest
install_tailwind:
	npm install -D tailwindcss

dev_tailwind:
	npx tailwindcss -i ./web/tailwind.css -o ./web/styles.css --watch
dev_go:
	./scripts/dev.sh

build_templ:
	templ generate
build_tailwind:
	npx tailwindcss -i ./web/tailwind.css -o ./web/styles.css
build_github_page:
	go run main.go -static


tailwindcss_init:
	npx tailwindcss init

build_with_goapp:
	GOARCH=wasm GOOS=js go build -o web/app.wasm
	go build -o server

run_with_goapp: build_with_goapp
	./server
