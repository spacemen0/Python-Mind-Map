package main

import (
	"GinTest/common"
	"GinTest/controller"
	"GinTest/middleware"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func main() {
	InitConfig()
	common.InitDataBase()
	engine := gin.Default()
	CollectRoutes(engine)
	port := viper.GetString("server.port")
	if port != "" {
		panic(engine.Run(":" + port))
	}
	panic(engine.Run())
}

func CollectRoutes(r *gin.Engine) *gin.Engine {
	r.POST("/register", controller.Register)
	r.POST("/login", controller.Login)
	user := r.Group("user")
	user.Use(middleware.AuthUser())
	{
		user.GET("/info", controller.UserInfo)
	}
	admin := r.Group("admin")
	admin.Use(middleware.AuthUser())
	{
		admin.POST("/createquestion", controller.CreateQuestion)
		admin.POST("/deletequestion", controller.DeleteQuestion)
		admin.POST("/updatequestion", controller.UpdateQuestion)
		admin.POST("/uploadexcel", controller.UploadExcel)
		admin.POST("/createanswersheet", controller.CreateAnswerSheet)
		admin.GET("/importstudents", controller.ImportStudents)
	}
	return r
}

func InitConfig() {
	workDir, _ := os.Getwd()
	viper.SetConfigName("config")
	viper.SetConfigType("yml")
	viper.AddConfigPath(workDir + "/config")
	viper.ReadInConfig()
}
