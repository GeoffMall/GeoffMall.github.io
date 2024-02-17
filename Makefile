

install_templ:
	go install github.com/a-h/templ/cmd/templ@latest
install_tailwind:
	npm install -D tailwindcss

watch_templ:
	templ generate --watch
watch_tailwind:
	npx tailwindcss -i ./assets/tailwind.css -o ./assets/static/styles.css --watch
watch_go:
	air -c .air.toml

build_templ:
	templ generate
build_tailwind:
	npx tailwindcss -i ./assets/tailwind.css -o ./assets/static/styles.css
build_go:
	cp ./assets/static/styles.css ./static/styles.css
	go build -o server main.go
build_static: build_templ build_tailwind
	cp ./assets/static/styles.css ./static/styles.css
	go run main.go -static

go_run_main:
	go run main.go

tailwindcss_init:
	npx tailwindcss init

