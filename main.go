package main

import (
	"GinTest/common"
	"GinTest/controller"
	"GinTest/middleware"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/spf13/viper"
)

func main() {
	InitConfig()
	common.InitDataBase()
	engine := gin.Default()
	CollectRoutes(engine)
	port := "6679"
	if port != "" {
		panic(engine.Run(":" + port))
	}
	panic(engine.Run())
}

func CollectRoutes(r *gin.Engine) *gin.Engine {
	r.Use(middleware.CORSMiddleware())
	r.POST("/register", controller.Register)
	r.POST("/login", controller.Login)
	user := r.Group("user")
	user.Use(middleware.AuthUser())
	{
		user.GET("/getuser", controller.GetUser)
		user.GET("/getquestions", controller.GetQuestion)
		user.GET("/getresourcelist", controller.GetResourceList)
		user.GET("/getcorrectanswers", controller.GetCorrectAnswers)
		user.POST("/createanswersheet", controller.CreateAnswerSheet)
		user.POST("/uploadcodes", controller.UploadCodes)
		user.GET("/getcrbystudentandchapter", controller.GetCRByStudentAndChapter)
		user.GET("/getcrbystudent", controller.GetCRByStudent)
		user.POST("/createcr", controller.CRTest)
	}
	admin := r.Group("admin")
	admin.Use(middleware.AuthAdmin(), middleware.CORSMiddleware())
	{
		admin.POST("/createquestion", controller.CreateQuestion)
		admin.POST("/deletequestion", controller.DeleteQuestion)
		admin.POST("/updatequestion", controller.UpdateQuestion)
		admin.POST("/uploadresource", controller.UploadResource)
		admin.POST("/createresource", controller.CreateResource)
		admin.POST("/importstudents", controller.ImportStudents)
		admin.GET("/getstudents", controller.GetStudents)
	}
	r.StaticFS("/upload", http.Dir("./upload"))
	return r
}

func InitConfig() {
	workDir, _ := os.Getwd()
	viper.SetConfigName("config")
	viper.SetConfigType("yml")
	viper.AddConfigPath(workDir + "/config")
	viper.ReadInConfig()
}
