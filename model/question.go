package model

import "gorm.io/gorm"

type Question struct {
	gorm.Model
	TestID         uint   `gorm:"not null"`
	Description    string `gorm:"type:text;not null"`
	Answer         string `gorm:"size:25;not null"`
	QuestionNumber uint   `gorm:"type:tinyint;not null"`
	QuestionType   bool
}
