package main

import (
	"context"
	"flag"
	"net/http"
	"os"

	"github.com/a-h/templ"
	"github.com/go-chi/chi/v5"

	"github.com/GeoffMall/GeoffMall.github.io/assets"
	"github.com/GeoffMall/GeoffMall.github.io/components"
)

var generateStatic = flag.Bool("static", false, "A boolean flag for generating static HTML files.")

func main() {
	start()
}

func start() {

	codeBlock := `package main

func main() {
	println("Hello, world!")
}
`

	blueButton := components.BlueButton(codeBlock)

	page := components.Page(blueButton)
	r := chi.NewRouter()
	r.Get("/", templ.Handler(page).ServeHTTP)
	assets.Mount(r)

	startListening := func() {

		if err := http.ListenAndServe(":8080", r); err != nil {
			panic(err)
		}
	}

	renderStatic := func() {
		f, err := os.Create("./docs/index.html")
		if err != nil {
			panic(err)
		}
		err = page.Render(context.Background(), f)
		if err != nil {
			panic(err)
		}
	}

	flag.Parse()
	if *generateStatic {
		renderStatic()
	} else {
		startListening()
	}
}
