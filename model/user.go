package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Username    string `gorm:"type:varchar(20);not null"`
	PhoneNumber string `gorm:"type:varchar(11);not null;unique"`
	Password    string `gorm:"size:256;not null"`
}

type UserDTO struct {
	Username    string `json:"Username"`
	PhoneNumber string `json:"PhoneNumber"`
}

func (u User) ToDTO() UserDTO {
	return UserDTO{
		Username:    u.Username,
		PhoneNumber: u.PhoneNumber,
	}
}
