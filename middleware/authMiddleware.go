package middleware

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"
	"strings"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func verifyToken(ctx *gin.Context) *model.User {
	tokenString := ctx.GetHeader("Authorization")
	if tokenString == "" || !strings.HasPrefix(tokenString, "Bearer ") {
		response.Response(ctx, 401, nil, "验证token失败")
		ctx.Abort()
		return nil
	}
	tokenString = tokenString[7:]
	token, claims, err := common.PaeseToken(tokenString)

	if err != nil || !token.Valid {
		response.Response(ctx, 401, gin.H{"error": err}, "验证token失败")
		ctx.Abort()
		return nil
	}
	userID := claims.UserID
	db := common.GetDataBase()
	var user *model.User
	err = db.First(&user, userID).Error
	if err == gorm.ErrRecordNotFound {
		response.Response(ctx, 401, gin.H{"error": err}, "无此用户")
		ctx.Abort()
		return nil
	}
	return user
}

func AuthUser() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		user := verifyToken(ctx)
		ctx.Set("user", user)
		ctx.Next()
	}
}

func AuthAdmin() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		user := verifyToken(ctx)
		if user == nil || !user.Admin {
			ctx.Abort()
		}
		ctx.Next()
	}
}
