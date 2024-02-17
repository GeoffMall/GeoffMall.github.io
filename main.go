package main

import (
	"net/http"

	"github.com/a-h/templ"
	"github.com/go-chi/chi/v5"

	"github.com/GeoffMall/GeoffMall.github.io/assets"
	"github.com/GeoffMall/GeoffMall.github.io/components"
)

func main() {
	r := chi.NewRouter()

	codeBlock := `package main

func main() {
	println("Hello, world!")
}
`

	blueButton := components.BlueButton(codeBlock)

	page := components.Page(blueButton)
	r.Get("/", templ.Handler(page).ServeHTTP)

	assets.Mount(r)

	if err := http.ListenAndServe(":8080", r); err != nil {
		panic(err)
	}
}
