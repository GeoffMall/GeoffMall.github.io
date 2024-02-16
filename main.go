package main

import (
	"context"
	"os"

	"github.com/GeoffMall/GeoffMall.github.io/internal/components"
)

func main() {
	component := components.Hello("Geoff")
	if err := component.Render(context.Background(), os.Stdout); err != nil {
		panic(err)
	}
}
