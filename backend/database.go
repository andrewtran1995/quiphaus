package main

import (
	"fmt"
	"log"
	"net/http"

	"quiphaus-backend/internal/configuration"

	"github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

var db *sqlx.DB

func init() {
	// Open a db connection
	var err error
	config := configuration.New()
	fmt.Printf("The configuration is: \n")
	fmt.Printf("%+v\n", config)
	db, err = sqlx.Open("postgres", ":memory:")
	if err != nil {
		panic("failed to connect database")
	}
	err = db.Ping()
	log.Print(err)
}

func main() {
	fmt.Printf("hello, world\n")
	router := gin.Default()
	router.GET("/ping", func(c *gin.Context) {
		c.IndentedJSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})
	router.Run()
}
