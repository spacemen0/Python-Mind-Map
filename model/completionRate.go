package model

import "gorm.io/gorm"

type CompletionRate struct {
	gorm.Model
	Chapter uint    `gorm:"not null"`
	Test    uint    `gorm:"not null"`
	UserID  uint    `gorm:"not null"`
	Value   float32 `gorm:"not null"`
}
