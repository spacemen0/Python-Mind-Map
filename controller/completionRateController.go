package controller

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"
	"strconv"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func CreateCompletionRate(rate *model.CompletionRate) (success bool, erra error) {
	db := common.GetDataBase()
	err := db.Create(rate).Error
	if err != nil {
		return false, err
	}
	return true, nil
}
func CRTest(c *gin.Context) {
	db := common.GetDataBase()
	var rate *model.CompletionRate
	c.Bind(&rate)
	err := db.Create(rate).Error
	if err != nil {
		response.Response(c, 500, gin.H{"error": err}, "error")
		return
	}
}

func HasCompletionRate(cid uint, tid uint, uid uint, db *gorm.DB) bool {
	err := db.Where("chapter = ? AND test = ? AND user_id = ?", cid, tid, uid).First(&model.CompletionRate{}).Error
	return !(err == gorm.ErrRecordNotFound)
}

func GetCRByStudent(c *gin.Context) {
	db := common.GetDataBase()
	uid := c.Query("UserID")
	var cr []model.CompletionRate
	err := db.Where("user_id = ?", uid).Find(&cr).Error
	if err != nil {
		response.Response(c, 422, gin.H{"error": err}, "获取完成率失败")
		return
	}
	var str []string
	titles := common.GetTitles()
	for i := 0; i < len(cr); i++ {
		str = append(str, titles[cr[i].Chapter-1][cr[i].Test])
	}
	response.Response(c, 200, gin.H{"CompletionRate": cr, "NodeTitle": str}, "获取完成率成功")
}

func GetCRByStudentAndChapter(c *gin.Context) {
	db := common.GetDataBase()
	uid := c.Query("UserID")
	cid := c.Query("Chapter")
	var cr []model.CompletionRate
	err := db.Where("user_id = ? AND chapter = ?", uid, cid).Find(&cr).Error
	if err != nil {
		response.Response(c, 422, gin.H{"error": err}, "获取完成率失败")
		return
	}
	var str []string
	titles := common.GetTitles()
	chap, _ := strconv.Atoi(cid)
	for i := 0; i < len(cr); i++ {
		str = append(str, titles[chap-1][cr[i].Test])
	}
	response.Response(c, 200, gin.H{"CompletionRate": cr, "NodeTitle": str}, "获取完成率成功")
}
