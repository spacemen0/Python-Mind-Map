package controller

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"

	"github.com/gin-gonic/gin"
)

func CreateQuestion(ctx *gin.Context) {
	db := common.GetDataBase()
	var question = &model.Question{}
	ctx.Bind(&question)
	err := db.Create(question).Error
	if err != nil {
		response.Response(ctx, 422, nil, "创建失败")
	}
	response.Response(ctx, 200, nil, "创建成功")
}

func DeleteQuestion(ctx *gin.Context) {

}

func UpdateQuestion(ctx *gin.Context) {

}
