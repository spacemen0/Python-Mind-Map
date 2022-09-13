package model

import "gorm.io/gorm"

type AnswerSheet struct {
	gorm.Model
	TestID  uint   `gorm:"not null;uniqueIndex:T_Q"`
	UserID  uint   `gorm:"type:tinyint;not null;uniqueIndex:T_Q"`
	Answers string `gorm:"type:text;not null"`
}
