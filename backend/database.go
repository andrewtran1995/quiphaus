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
var config *configuration.Configuration

func init() {
	config = configuration.New()
	// Open a db connection
	var err error
	dsn := fmt.Sprintf("user=%v password=%v host=%v dbname=%v sslmode=disable", config.Postgres.Username, config.Postgres.Password, config.Postgres.URL, config.Postgres.Dbname)
	db, err = sqlx.Open("postgres", dsn)
	if err != nil {
		panic("failed to connect database")
	}
	err = db.Ping()
	if err != nil {
		log.Print(err)
	}
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
