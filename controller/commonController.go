package controller

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/xuri/excelize/v2"
	"golang.org/x/crypto/bcrypt"
)

func ImportStudents(c *gin.Context) {
	db := common.GetDataBase()
	f, err := excelize.OpenFile("./upload/students.xlsx")
	if err != nil {
		panic(err.Error())
	}
	rows, err := f.GetRows("Sheet1")
	if err == nil {
		for _, row := range rows {
			studentID := row[0]
			studentName := row[1]
			password := studentID[6:]
			uintID, _ := strconv.Atoi(studentID)
			hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
			if err != nil {
				response.Response(c, 500, nil, "加密错误")
				return
			}
			newUser := model.User{
				StudentID:   uint(uintID),
				StudentName: studentName,
				Password:    string(hashedPassword),
				Admin:       false,
			}
			err = db.Create(&newUser).Error
			if err != nil {
				response.Response(c, 500, nil, studentID+"注册失败")
				return
			}
			response.Response(c, 200, nil, studentID+"注册成功")
		}
	}
	f.Close()
}

func UploadExcel(c *gin.Context) {
	f, err := c.FormFile("img")
	if err != nil {
		response.Response(c, 400, nil, "上传失败")
		return
	}
	err = c.SaveUploadedFile(f, "./upload/"+"students.xlsx")
	if err != nil {
		response.Response(c, 500, nil, "文件保存出错")
		return
	}
	response.Response(c, 200, gin.H{"f": f.Filename}, "上传成功")

}
