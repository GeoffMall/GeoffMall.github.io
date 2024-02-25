package main

import (
	"os"

	"github.com/GeoffMall/GeoffMall.github.io/internal"
)

func main() {
	genStatic := os.Getenv("GENERATE_STATIC")
	if genStatic != "" {
		internal.GenerateStatic()
		return
	}
	internal.Run()
}
