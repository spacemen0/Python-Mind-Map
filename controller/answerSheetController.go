package controller

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func CreateAnswerSheet(ctx *gin.Context) {
	db := common.GetDataBase()
	var answerSheet = &model.AnswerSheet{}
	ctx.Bind(&answerSheet)
	var oldSheet = &model.AnswerSheet{}
	err := db.Where("chapter_id = ? AND test_id = ? And user_id = ?", answerSheet.ChapterID, answerSheet.TestID, answerSheet.UserID).First(oldSheet).Error
	if !(err == gorm.ErrRecordNotFound) {
		db.Unscoped().Delete(&oldSheet)
	}
	answerSheet.ID = 0
	err = db.Create(answerSheet).Error
	if err != nil {
		response.Response(ctx, 422, nil, "创建失败")
		return
	}
	response.Response(ctx, 200, nil, "创建成功")
}
