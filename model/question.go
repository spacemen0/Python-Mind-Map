package model

import "gorm.io/gorm"

type Question struct {
	gorm.Model
	ChapterID      uint   `gorm:"not null;uniqueIndex:T_Q"`
	TestID         uint   `gorm:"not null;uniqueIndex:T_Q"`
	Description    string `gorm:"type:text;not null"`
	Answer         string `gorm:"size:25;not null"`
	QuestionNumber uint   `gorm:"type:tinyint;not null;uniqueIndex:T_Q"`
	QuestionType   uint   `gorm:"type:boolean;not null"`
}

type QuestionDTO struct {
	Description    string `json:"Description"`
	QuestionNumber uint   `json:"QuestionNumber"`
	QuestionType   uint   `json:"QuestionType"`
}

func (q Question) ToDTO() QuestionDTO {
	return QuestionDTO{
		Description:    q.Description,
		QuestionNumber: q.QuestionNumber,
		QuestionType:   q.QuestionType,
	}
}
