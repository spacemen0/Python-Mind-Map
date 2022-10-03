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
		response.Response(ctx, 400, gin.H{"error": err}, "创建资源失败")
		return
	}
	response.Response(ctx, 200, nil, "创建资源成功")

}

func GetResourceList(ctx *gin.Context) {
	db := common.GetDataBase()
	var resources []model.Resource
	nodeID, _ := strconv.Atoi(ctx.Query("NodeID"))
	chapterID, _ := strconv.Atoi(ctx.Query("ChapterID"))
	err := db.Where("node_id = ? AND chapter_id = ?", nodeID, chapterID).Find(&resources).Error
	if err != nil {
		response.Response(ctx, 422, gin.H{"error": err}, "获取资源失败")
		return
	}
	var resourceDTOs []model.ResourceDTO
	for _, r := range resources {
		resourceDTOs = append(resourceDTOs, r.ToDTO())
	}
	response.Response(ctx, 200, gin.H{"resources": resourceDTOs}, "获取资源成功")
}
