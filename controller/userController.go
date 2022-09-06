package controller

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"
	"math/rand"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func Register(c *gin.Context) {

	db := common.GetDataBase()
	//获取参数
	// phoneNumber := c.PostForm("phoneNumber")
	phoneNumber := c.Query("PhoneNumber")
	password := c.Query("Password")
	if !isLegalPhoneNumber(phoneNumber) {
		response.Response(c, 422, nil, "请输入正确手机号")
		return
	}
	//写入数据库
	isExisted, _ := isExistedPhoneNumber(db, phoneNumber)
	if isExisted {
		response.Response(c, 422, nil, "手机号已存在")
		return
	}
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		response.Response(c, 500, nil, "加密错误")
		return
	}
	newUser := model.User{
		Username:    randomUsername(10),
		PhoneNumber: phoneNumber,
		Password:    string(hashedPassword),
	}
	db.Create(&newUser)
	response.Response(c, 200, nil, "注册成功")
}

func Login(c *gin.Context) {
	db := common.GetDataBase()
	//获取数据
	phoneNumber := c.Query("PhoneNumber")
	password := c.Query("Password")
	//验证数据
	isExisted, user := isExistedPhoneNumber(db, phoneNumber)
	if !isExisted {
		response.Response(c, 403, nil, "手机号不存在")
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

func Info(c *gin.Context) {
	user, _ := c.Get("user")
	response.Response(c, 200, gin.H{"user": user.(model.User).ToDTO()}, "")

}

func isLegalPhoneNumber(pn string) bool {
	if len(pn) != 11 {
		return false
	}
	if pn[0] != '1' {
		return false
	}
	return true
}

func isExistedPhoneNumber(db *gorm.DB, pn string) (bool, *model.User) {
	var user *model.User
	err := db.Where("phone_number = ?", pn).First(&user).Error
	return !(err == gorm.ErrRecordNotFound), user

}

func randomUsername(n int) string {
	const letterBytes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
	b := make([]byte, n)
	for i := range b {
		b[i] = letterBytes[rand.Intn(len(letterBytes))]
	}
	return "User" + string(b)
}
