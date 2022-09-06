package middleware

import (
	"GinTest/common"
	"GinTest/model"
	"GinTest/response"
	"strings"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		tokenString := ctx.GetHeader("Authorization")
		if tokenString == "" || !strings.HasPrefix(tokenString, "Bearer ") {
			response.Response(ctx, 401, nil, "鉴权失败")
			ctx.Abort()
			return
		}
		tokenString = tokenString[7:]
		token, claims, err := common.PaeseToken(tokenString)

		if err != nil || !token.Valid {
			response.Response(ctx, 401, nil, "鉴权失败")
			ctx.Abort()
			return
		}
		userID := claims.UserID
		db := common.GetDataBase()
		var user model.User
		err = db.First(&user, userID).Error
		if err == gorm.ErrRecordNotFound {
			response.Response(ctx, 401, nil, "鉴权失败")
			ctx.Abort()
			return
		}
		ctx.Set("user", user)
		ctx.Next()
	}
}
