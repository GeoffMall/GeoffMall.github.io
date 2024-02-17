

install_templ:
	go install github.com/a-h/templ/cmd/templ@latest
install_tailwind:
	npm install -D tailwindcss

watch_templ:
	templ generate --watch
watch_tailwind:
	npx tailwindcss -i ./assets/tailwind.css -o ./assets/dist/styles.css --watch
watch_go:
	air -c .air.toml

build_templ:
	templ generate
build_tailwind:
	npx tailwindcss -i ./assets/tailwind.css -o ./assets/dist/styles.css
build_go:
	go build -o server main.go

go_run_main:
	go run main.go

tailwindcss_init:
	npx tailwindcss init

