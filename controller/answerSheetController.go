package controller

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"
	"strconv"

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
		response.Response(ctx, 422, gin.H{"error": err}, "创建失败")
		return
	}
	response.Response(ctx, 200, nil, "创建成功")
}

func GetCorrectAnswers(ctx *gin.Context) {
	db := common.GetDataBase()
	var correctAnswer *model.AnswerSheet
	testID, _ := strconv.Atoi(ctx.Query("TestID"))
	chapterID, _ := strconv.Atoi(ctx.Query("ChapterID"))
	UserID, _ := strconv.Atoi(ctx.Query("UserID"))
	done, userAnswer := hasDoneTest(db, testID, chapterID, UserID)
	if !done {
		response.Response(ctx, 422, nil, "获取答题卡失败")
		return
	}
	err := db.Where("test_id = ? AND chapter_id = ? AND user_id = ?", testID, chapterID, 100000000000).First(&correctAnswer).Error
	if err != nil {
		response.Response(ctx, 422, gin.H{"error": err}, "获取失败")
		return
	}
	uAns := common.StringToAnswers(userAnswer.Answers)
	cAns := common.StringToAnswers(correctAnswer.Answers)
	var res []bool
	count := 0
	for i := 0; i < len(uAns); i++ {
		ans := uAns[i] == cAns[i]
		if ans {
			count += 1
		}
		res = append(res, ans)
	}
	rate := model.CompletionRate{
		Chapter: uint(chapterID),
		Test:    uint(testID),
		UserID:  uint(UserID),
		Value:   float32(count / len(uAns)),
	}
	if !HasCompletionRate(uint(chapterID), uint(testID), uint(UserID), db) {
		success, erra := CreateCompletionRate(rate)
		if !success {
			response.Response(ctx, 422, gin.H{"error": erra}, "创建完成率失败")
			return
		}
	}
	response.Response(ctx, 200, gin.H{"user answer": userAnswer.Answers, "correct answer": correctAnswer.Answers, "result": res}, "获取成功")
}

func hasDoneTest(db *gorm.DB, tid int, cid int, uid int) (bool, *model.AnswerSheet) {
	var answer *model.AnswerSheet
	err := db.Where("test_id = ? AND chapter_id = ? AND user_id = ?", tid, cid, uid).First(&answer).Error
	return !(err == gorm.ErrRecordNotFound), answer
}
