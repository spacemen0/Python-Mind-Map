package controller

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func CreateQuestion(ctx *gin.Context) {
	db := common.GetDataBase()
	var question = &model.Question{}
	ctx.Bind(&question)
	err := db.Create(question).Error
	if err != nil {
		response.Response(ctx, 422, nil, "创建失败")
		return
	}
	response.Response(ctx, 200, nil, "创建成功")
}

func DeleteQuestion(ctx *gin.Context) {
	db := common.GetDataBase()
	testID, _ := strconv.Atoi(ctx.Query("TestID"))
	questionNumber, _ := strconv.Atoi(ctx.Query("QuestionNumber"))
	var question = model.Question{
		TestID:         uint(testID),
		QuestionNumber: uint(questionNumber),
	}
	err := db.Delete(&question)
	if err != nil {
		response.Response(ctx, 422, nil, "删除失败")
		return
	}
	response.Response(ctx, 200, nil, "删除成功")
}

func UpdateQuestion(ctx *gin.Context) {
	db := common.GetDataBase()
	var newQuestion = &model.Question{}
	ctx.Bind(&newQuestion)
	oldQuestion := model.Question{
		Model: gorm.Model{ID: newQuestion.ID},
	}
	fmt.Println(oldQuestion)
	hasError := false
	if db.Model(&oldQuestion).Update("description", newQuestion.Description).Error != nil {
		hasError = true
	}
	if db.Model(&oldQuestion).Update("test_id", newQuestion.TestID).Error != nil {
		hasError = true
	}
	if db.Model(&oldQuestion).Update("answer", newQuestion.Answer).Error != nil {
		hasError = true
	}
	if db.Model(&oldQuestion).Update("question_number", newQuestion.QuestionNumber).Error != nil {
		hasError = true
	}
	if db.Model(&oldQuestion).Update("question_type", newQuestion.QuestionType).Error != nil {
		hasError = true
	}
	if hasError {
		response.Response(ctx, 422, nil, "修改失败")
		return
	}
	response.Response(ctx, 200, nil, "修改成功")
}
