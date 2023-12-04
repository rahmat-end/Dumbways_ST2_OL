package models

import "time"

type User struct {
	Id           int       `json:"id" gorm:"primaryKey:autoIncrement"`
	FullName     string    `json:"fullName" gorm:"type: varchar(255)"`
	Alamat       string    `json:"alamat" gorm:"type: varchar(255)"`
	JenisKelamin string    `json:"jenisKelamin" gorm:"type: varchar(255)"`
	Username     string    `json:"username" gorm:"type: varchar(255)"`
	Password     string    `json:"password" gorm:"type: varchar(255)"`
	Role         string    `json:"role" gorm:"type: varchar(255)"`
	CreatedAt    time.Time `json:"createdAt"`
	UpdatedAt    time.Time `json:"updatedAt"`
}

type UserResponse struct {
	Id       int    `json:"id"`
	FullName string `json:"fullName"`
}

func (UserResponse) TableName() string {
	return "users"
}
