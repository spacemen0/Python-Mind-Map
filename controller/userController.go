package controller

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"
	"strconv"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func Register(c *gin.Context) {

	db := common.GetDataBase()
	//获取参数
	// phoneNumber := c.PostForm("phoneNumber")
	studentID := c.Query("StudentID")
	studentName := c.Query("StudentName")
	password := c.Query("Password")
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
		response.Response(c, 500, nil, "注册失败")
		return
	}
	response.Response(c, 200, nil, "注册成功")
}

func Login(c *gin.Context) {
	db := common.GetDataBase()
	//获取数据
	studentID := c.Query("StudentID")
	password := c.Query("Password")
	//验证数据
	isExisted, user := isExistedStudentID(db, studentID)
	if !isExisted {
		response.Response(c, 403, nil, "用户不存在")
		//自动注册不存在
		return
	}
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		response.Response(c, 403, nil, "密码错误")

		return
	}
	//发放token
	token, err := common.ReleaseToken(*user)
	if err != nil {
		response.Response(c, 500, nil, "生成Token出错")

		return
	}
	//返回结果
	response.Response(c, 200, gin.H{"token": token}, "登录成功")

}

func isExistedStudentID(db *gorm.DB, studentID string) (bool, *model.User) {
	var user *model.User
	err := db.Where("student_id = ?", studentID).First(&user).Error
	return !(err == gorm.ErrRecordNotFound), user
}

func UserInfo(c *gin.Context) {
	user, isExisted := c.Get("user")
	if !isExisted {
		response.Response(c, 500, nil, "错误")
		return
	}
	response.Response(c, 200, gin.H{"user": user.(*model.User).ToDTO()}, "获取成功")
}
