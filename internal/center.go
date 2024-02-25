package internal

import "github.com/maxence-charriere/go-app/v9/pkg/app"

type CenterContent struct {
	app.Compo
}

func (c *CenterContent) Render() app.UI {
	return app.Div().Class("p-8 text-center").Body(
		// Your main content goes here
		app.H2().Class("text-2xl font-bold mb-4").Text("Main Content Title"),
		app.P().Text("This is the main content area. You can customize it as needed."),
	)
}
