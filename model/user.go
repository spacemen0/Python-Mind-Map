package model

type User struct {
	StudentID   uint   `gorm:"primarykey"`
	StudentName string `gorm:"type:varchar(20);not null"`
	Password    string `gorm:"size:256;not null"`
}

type UserDTO struct {
	StudentID   uint   `json:"StudentID"`
	StudentName string `json:"StudentName"`
}

func (u User) ToDTO() UserDTO {
	return UserDTO{
		StudentID:   u.StudentID,
		StudentName: u.StudentName,
	}
}
