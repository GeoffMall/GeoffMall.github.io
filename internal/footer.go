package internal

import "github.com/maxence-charriere/go-app/v9/pkg/app"

type Footer struct {
	app.Compo
}

func (f *Footer) Render() app.UI {
	return app.Footer().Class("p-4 bg-gray-300 text-center").Body(
		// Your footer content goes here
		app.Text("© 2024 Your Name. All rights reserved."),
	)
}
