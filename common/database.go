package common

import (
	"GinTest/model"
	"fmt"

	"github.com/spf13/viper"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var database *gorm.DB

func InitDataBase() {
	username := viper.GetString("datasource.username")
	password := viper.GetString("datasource.password")
	host := viper.GetString("datasource.host")
	port := viper.GetString("datasource.port")
	databasename := viper.GetString("datasource.databasename")
	charset := viper.GetString("datasource.charset")
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=True&loc=Local",
		username, password, host, port, databasename, charset)
	var err error
	database, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect to database")
	}
	database.AutoMigrate(&model.User{})
	database.AutoMigrate(&model.Question{})
	database.AutoMigrate(&model.AnswerSheet{})
	database.AutoMigrate(&model.Resource{})
	database.AutoMigrate(&model.CompletionRate{})
}

func GetDataBase() *gorm.DB {
	return database
}
