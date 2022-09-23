package model

import "gorm.io/gorm"

type Resource struct {
	gorm.Model
	ChapterID      uint   `gorm:"not null;uniqueIndex:T_Q"`
	NodeID         uint   `gorm:"not null;uniqueIndex:T_Q"`
	Filename       string `gorm:"type:varchar(32);not null"`
	Description    string `gorm:"type:text;not null"`
	ResourceNumber uint   `gorm:"type:tinyint;not null;uniqueIndex:T_Q"`
	ResourceType   uint   `gorm:"type:tinyint;not null"`
}

type ResourceDTO struct {
	ResourceNumber uint   `json:"ResourceNumber"`
	Description    string `json:"Description"`
	ResourceType   uint   `json:"ResourceType"`
	Filename       string `json:"FileName"`
}

func (r Resource) ToDTO() ResourceDTO {
	return ResourceDTO{
		ResourceNumber: r.ResourceNumber,
		Description:    r.Description,
		ResourceType:   r.ResourceType,
		Filename:       r.Filename,
	}
}
