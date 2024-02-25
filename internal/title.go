package internal

import "github.com/maxence-charriere/go-app/v9/pkg/app"

type TitleBar struct {
	app.Compo
	Title string // The title to display
}

// The Render method is where you define the HTML structure and styling of your component.
func (t *TitleBar) Render() app.UI {
	return app.Div().Class("flex items-center justify-between p-4 bg-gray-200").Body(
		app.Div().Class("left-component").Body(
			// Add your left component content here
			app.Text("Left Component"),
		),
		app.Div().Class("center-component text-center").Body(
			// Add your center component content here
			app.Text("Center Component"),
		),
		app.Div().Class("right-component text-right").Body(
			// Add your right component content here
			app.Text("Right Component"),
		),
	)
}
