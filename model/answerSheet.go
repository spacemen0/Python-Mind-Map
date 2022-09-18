package model

import "gorm.io/gorm"

type AnswerSheet struct {
	gorm.Model
	ChapterID uint   `gorm:"not null;uniqueIndex:T_Q"`
	TestID    uint   `gorm:"not null;uniqueIndex:T_Q"`
	UserID    uint   `gorm:"not null;uniqueIndex:T_Q"`
	Answers   string `gorm:"type:text;not null"`
}
