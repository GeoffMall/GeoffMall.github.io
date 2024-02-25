dev:
	air

dev_v0:
	npx tailwindcss -i ./web/tailwind.css -o ./web/styles.css
	GOARCH=wasm GOOS=js go build -o web/app.wasm
	go build -o ./tmp/main .

build_static_website:
	npx tailwindcss -i ./web/tailwind.css -o ./web/styles.css
	GOARCH=wasm GOOS=js go build -o ./test-app/web/app.wasm
	go build -o server
	GENERATE_STATIC=true ./server
	mv ./app-worker.js ./docs/app-worker.js
	mv ./app.js ./docs/app.js
	mv ./index.html ./docs/index.html
	mv ./manifest.webmanifest ./docs/manifest.webmanifest
	mv ./wasm_exec.js ./docs/wasm_exec.js
	mv ./app.css ./docs/app.css
	mv ./test-app/web/app.wasm ./docs/web/app.wasm
	cp ./web/styles.css ./docs/styles.css
	rm ./server



