package internal

import "github.com/maxence-charriere/go-app/v9/pkg/app"

type CenterContent struct {
	app.Compo
}

func (c *CenterContent) Render() app.UI {
	return app.Div().Class("p-8 text-center").Body(
		// Your main content goes here
		app.H2().Class("text-2xl font-bold mb-4").Text("Main Content Title"),
		&StatefulButton{},
		//app.P().Text("This is the main content area. You can customize it as needed."),
	)
}

type StatefulButton struct {
	app.Compo
	currentState int
}

func (b *StatefulButton) Render() app.UI {
	// Define color classes for each state
	colorClasses := []string{"bg-blue-500 hover:bg-blue-700", "bg-red-500 hover:bg-red-700", "bg-green-500 hover:bg-green-700"}

	// Ensure the currentState index is within bounds
	if b.currentState >= len(colorClasses) {
		b.currentState = 0
	}

	return app.Button().Class("text-white font-bold py-2 px-4 rounded " + colorClasses[b.currentState]).Text("Click me!").
		OnClick(b.onClick)
}

func (b *StatefulButton) onClick(ctx app.Context, e app.Event) {
	// Increment the state and loop back to 0 if it exceeds the number of states
	b.currentState = (b.currentState + 1) % 3
	b.Update()
}
