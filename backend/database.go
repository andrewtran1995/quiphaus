package main

import (
	"fmt"
	"log"
	"net/http"
	"github.com/jmoiron/sqlx"
	"github.com/lib/pq"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there, handling this request at %s!", r.URL.Path[1:])
}

func main() {
	fmt.Printf("hello, world\n")
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}