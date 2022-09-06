package response

import "github.com/gin-gonic/gin"

func Response(c *gin.Context, code int, data gin.H, msg string) {
	c.JSON(code, gin.H{"data": data, "msg": msg})
}
