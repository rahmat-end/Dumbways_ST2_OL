package main

import (
	"pemilu_dumbways/database"
	"pemilu_dumbways/pkg/mysql"
	"pemilu_dumbways/routes"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	mysql.DatabaseInit()
	database.RunMigration()

	// routes
	routes.RouteInit(e.Group("/api/v1"))

	e.Logger.Fatal(e.Start("localhost:5000"))
}
