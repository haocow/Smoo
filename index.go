package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("~/go/src/github.com/haocow/Smoo/"))
	http.Handle("/", fs)

	log.Println("Listening...")
	http.ListenAndServe(":3192", nil)
}