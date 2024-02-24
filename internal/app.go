package internal

import (
	"net/http"

	"github.com/maxence-charriere/go-app/v9/pkg/app"
)

const (
	styleCss = "/web/styles.css"
)

func Run() {
	app.Route("/", &hello{})

	app.RunWhenOnBrowser()

	http.Handle("/", &app.Handler{
		Name:        "Hello",
		Description: "An Hello World example",
		Styles: []string{
			styleCss,
		},
	})

	if err := http.ListenAndServe(":8000", nil); err != nil {
		panic(err)
	}
}

type hello struct {
	app.Compo
}

func (h *hello) Render() app.UI {
	return app.H1().Text("Hello, World!").Class("inline-block w-8 text-right text-gray-500 pr-4 select-none")
}
