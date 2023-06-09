package model

import "gorm.io/gorm"

type AnswerSheet struct {
	gorm.Model
	ChapterID uint   `gorm:"not null;uniqueIndex:T_Q" json:"ChapterID"`
	TestID    uint   `gorm:"not null;uniqueIndex:T_Q" json:"TestID"`
	UserID    uint   `gorm:"not null;uniqueIndex:T_Q" json:"UserID"`
	Answers   string `gorm:"type:text;not null" json:"Answers"`
}
