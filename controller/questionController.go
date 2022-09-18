package controller

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateQuestion(ctx *gin.Context) {
	db := common.GetDataBase()
	var question = &model.Question{}
	ctx.Bind(&question)
	err := db.Create(question).Error
	if err != nil {
		response.Response(ctx, 400, nil, "创建失败")
		return
	}
	response.Response(ctx, 200, nil, "创建成功")
}

func DeleteQuestion(ctx *gin.Context) {
	db := common.GetDataBase()
	testID, _ := strconv.Atoi(ctx.Query("TestID"))
	chapterID, _ := strconv.Atoi(ctx.Query("ChapterID"))
	questionNumber, _ := strconv.Atoi(ctx.Query("QuestionNumber"))
	var question = model.Question{
		ChapterID:      uint(chapterID),
		TestID:         uint(testID),
		QuestionNumber: uint(questionNumber),
	}
	err := db.Unscoped().Where(&question).Delete(&question).Error
	if err != nil {
		response.Response(ctx, 400, nil, "删除失败")
		return
	}
	var questions []model.Question
	db.Where("test_id = ? AND chapter_id = ? AND question_number > ?", testID, chapterID, questionNumber).Find(&questions)
	for _, q := range questions {
		q.QuestionNumber -= 1
		db.Save(q)
	}

	response.Response(ctx, 200, nil, "删除成功")
}

func UpdateQuestion(ctx *gin.Context) {
	db := common.GetDataBase()
	var newQuestion = &model.Question{}
	ctx.Bind(&newQuestion)
	oldQuestion := model.Question{
		ChapterID:      newQuestion.ChapterID,
		TestID:         newQuestion.TestID,
		QuestionNumber: newQuestion.QuestionNumber,
	}
	fmt.Println(oldQuestion)
	err := db.Where(&oldQuestion).First(&oldQuestion).Error
	if err != nil {
		response.Response(ctx, 422, nil, "查询题目失败")
		return
	}
	oldQuestion.Description = newQuestion.Description
	oldQuestion.Answer = newQuestion.Answer
	oldQuestion.ChoiceQuestion = newQuestion.ChoiceQuestion
	err = db.Save(&oldQuestion).Error
	if err != nil {
		response.Response(ctx, 422, nil, "更新失败")
		return
	}
	response.Response(ctx, 200, nil, "修改成功")
}

func GetQuestion(ctx *gin.Context) {
	db := common.GetDataBase()
	var questions []model.Question
	testID, _ := strconv.Atoi(ctx.Query("TestID"))
	chapterID, _ := strconv.Atoi(ctx.Query("ChapterID"))
	err := db.Where("test_id = ? AND chapter_id = ?", testID, chapterID).Find(&questions).Error
	if err != nil {
		response.Response(ctx, 422, nil, "获取失败")
		return
	}
	var questionDTOs []model.QuestionDTO
	for _, q := range questions {
		questionDTOs = append(questionDTOs, q.ToDTO())
	}
	response.Response(ctx, 200, gin.H{"questions": questionDTOs}, "获取成功")
}
