package database

import (
	"fmt"
	"pemilu_dumbways/models"
	"pemilu_dumbways/pkg/mysql"
)

func RunMigration() {
	err := mysql.DB.AutoMigrate(
		&models.User{},
	)

	if err != nil {
		panic(err)
	}

	fmt.Println("Migration success")
}
