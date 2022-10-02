package controller

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func CreateCompletionRate(rate model.CompletionRate) (success bool, erra error) {
	db := common.GetDataBase()
	err := db.Create(rate).Error
	if err != nil {
		return false, err
	}
	return true, nil
}

func HasCompletionRate(cid uint, tid uint, uid uint, db *gorm.DB) bool {
	err := db.Where("chapter_id = ? AND test_id = ? AND user_id = ?", cid, tid, uid).First(&model.CompletionRate{}).Error
	return !(err == gorm.ErrRecordNotFound)
}

func GetCRByStudent(c *gin.Context) {
	db := common.GetDataBase()
	uid := c.Query("UserID")
	var cr []model.CompletionRate
	err := db.Where("user_id = ?", uid).Find(cr).Error
	if err != nil {
		response.Response(c, 422, gin.H{"error": err}, "获取完成率失败")
		return
	}
	response.Response(c, 200, gin.H{"CompletionRate": cr}, "获取完成率成功")
}

func GetCRByStudentAndChapter(c *gin.Context) {
	db := common.GetDataBase()
	uid := c.Query("UserID")
	cid := c.Query("ChapterID")
	var cr []model.CompletionRate
	err := db.Where("user_id = ? AND chapter_id = ?", uid, cid).Find(cr).Error
	if err != nil {
		response.Response(c, 422, gin.H{"error": err}, "获取完成率失败")
		return
	}
	response.Response(c, 200, gin.H{"CompletionRate": cr}, "获取完成率成功")
}
