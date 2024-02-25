package internal

import (
	"net/http"

	"github.com/maxence-charriere/go-app/v9/pkg/app"
)

const (
	styleCss            = "/web/styles.css"
	githubPagesStyleCss = "/styles.css"
)

func Run() {
	mainPage := &MainPage{}

	app.Route("/", mainPage)

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

func GenerateStatic() {
	mainPage := &MainPage{}

	app.Route("/", mainPage)

	app.RunWhenOnBrowser()

	err := app.GenerateStaticWebsite(".", &app.Handler{
		Name:        "Hello",
		Description: "An Hello World example",
		Resources:   app.GitHubPages("GeoffMall.github.io/docs"),
		Styles: []string{
			githubPagesStyleCss,
		},
	})
	if err != nil {
		panic(err)
	}
}

type MainPage struct {
	app.Compo
}

func (m *MainPage) Render() app.UI {
	return app.Div().Body(
		&TitleBar{},
		&CenterContent{},
		&Footer{},
	)
}
