package controller

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"
	"strconv"

	"github.com/gin-gonic/gin"
)

func CreateResource(ctx *gin.Context) {
	db := common.GetDataBase()
	var resource = &model.Resource{}
	ctx.Bind(&resource)
	err := db.Create(resource).Error
	if err != nil {
		response.Response(ctx, 400, nil, "创建失败")
		return
	}
	response.Response(ctx, 200, nil, "创建成功")

}

func GetResourceList(ctx *gin.Context) {
	db := common.GetDataBase()
	var resources []model.Resource
	nodeID, _ := strconv.Atoi(ctx.Query("NodeID"))
	chapterID, _ := strconv.Atoi(ctx.Query("ChapterID"))
	err := db.Where("node_id = ? AND chapter_id = ?", nodeID, chapterID).Find(&resources).Error
	if err != nil {
		response.Response(ctx, 422, nil, "获取失败")
		return
	}
	response.Response(ctx, 200, gin.H{"resources": resources}, "获取成功")
}

// func GetResource(ctx *gin.Context) {

// }
