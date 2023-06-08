package common

import (
	"GinTest/model"
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var database *gorm.DB
var titles [][]string

func InitDataBase() {
	// username := viper.GetString("datasource.username")
	// password := viper.GetString("datasource.password")
	// host := viper.GetString("datasource.host")
	// port := viper.GetString("datasource.port")
	// databasename := viper.GetString("datasource.databasename")
	// charset := viper.GetString("datasource.charset")
	username := "root"
	password := "987654ZCy"
	host := "127.0.0.1"
	port := "3306"
	databasename := "gintest"
	charset := "utf8mb4"
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
	// var ch1 []string
	// ch1, err = ReadStringsFromJSON("ch1.json")
	// ch1 = append(ch1, " ")
	// ch1 = append(ch1, "hardware")
	// ch1 = append(ch1, "four functions")
	// ch1 = append(ch1, "recipe")
	// ch1 = append(ch1, "aspects of language")
	// ch1 = append(ch1, "IDE tools")
	// ch1 = append(ch1, "programming mode")
	// ch1 = append(ch1, "fundamentals")
	// ch1 = append(ch1, "python operators")
	// var ch2 []string
	// ch2, err = ReadStringsFromJSON("ch2.json")
	// ch2 = append(ch2, " ")
	// ch2 = append(ch2, "Statement")
	// ch2 = append(ch2, "Expression")
	// ch2 = append(ch2, "Name rules")
	// ch2 = append(ch2, "Assigning value")
	// ch2 = append(ch2, "definition")
	// ch2 = append(ch2, "convert")
	// ch2 = append(ch2, "definition")
	// ch2 = append(ch2, "convert")
	// ch2 = append(ch2, "definition")
	// ch2 = append(ch2, "convert")
	// ch2 = append(ch2, "Boolean Type")
	// ch2 = append(ch2, "attribute")
	// ch2 = append(ch2, "create")
	// ch2 = append(ch2, "access")
	// ch2 = append(ch2, "convert")
	// ch2 = append(ch2, "concatenate")
	// ch2 = append(ch2, "multiply")
	// ch2 = append(ch2, "print")
	// ch2 = append(ch2, "slicing")
	// ch2 = append(ch2, "built-in methods")
	// ch2 = append(ch2, "attribute")
	// ch2 = append(ch2, "create")
	// ch2 = append(ch2, "access")
	// ch2 = append(ch2, "slicing")
	// ch2 = append(ch2, "insert")
	// ch2 = append(ch2, "remove")
	// ch2 = append(ch2, "concatenate")
	// ch2 = append(ch2, "convert")
	// ch2 = append(ch2, "built-in methods")
	// ch2 = append(ch2, "attribute")
	// ch2 = append(ch2, "create")
	// ch2 = append(ch2, "access")
	// ch2 = append(ch2, "slicing")
	// ch2 = append(ch2, "application")
	// ch2 = append(ch2, "attribute")
	// ch2 = append(ch2, "create")
	// ch2 = append(ch2, "add")
	// ch2 = append(ch2, "remove")
	// ch2 = append(ch2, "binary opeation")
	// ch2 = append(ch2, "comparison")
	// ch2 = append(ch2, "built-in methods")
	// ch2 = append(ch2, "attribute")
	// ch2 = append(ch2, "create")
	// ch2 = append(ch2, "comparison")
	// ch2 = append(ch2, "built-in methods")
	// ch2 = append(ch2, "attribute")
	// ch2 = append(ch2, "create")
	// ch2 = append(ch2, "access")
	// ch2 = append(ch2, "test if key in dict")
	// ch2 = append(ch2, "add/modify")
	// ch2 = append(ch2, "delete")
	// ch2 = append(ch2, "built-in methods")
	// var ch3 []string
	// ch3, err = ReadStringsFromJSON("ch3.json")
	// ch3 = append(ch3, " ")
	// ch3 = append(ch3, "if")
	// ch3 = append(ch3, "if .. else ..")
	// ch3 = append(ch3, "if .. elif .. else ..")
	// ch3 = append(ch3, "nested")
	// ch3 = append(ch3, "while")
	// ch3 = append(ch3, "for")
	// ch3 = append(ch3, "break")
	// ch3 = append(ch3, "continue")
	// ch3 = append(ch3, "pass")
	// ch3 = append(ch3, "algorithms")
	// var ch4 []string
	// ch4, err = ReadStringsFromJSON("ch4.json")
	// ch4 = append(ch4, " ")
	// ch4 = append(ch4, "define")
	// ch4 = append(ch4, "interface")
	// ch4 = append(ch4, "Required argument")
	// ch4 = append(ch4, "Keyword argument")
	// ch4 = append(ch4, "Recursion")
	// ch4 = append(ch4, "local scope")
	// ch4 = append(ch4, "global scope")
	// ch4 = append(ch4, "lambda")
	// ch4 = append(ch4, "pyfile")
	// ch4 = append(ch4, "content")

	// WriteStringsToJSON("ch1.json", ch1)
	// WriteStringsToJSON("ch2.json", ch2)
	// WriteStringsToJSON("ch3.json", ch3)
	// WriteStringsToJSON("ch4.json", ch4)
	// titles = append(titles, ch1)
	// titles = append(titles, ch2)
	// titles = append(titles, ch3)
	// titles = append(titles, ch4)
	titles, err = ReadStringsArrayFromJSON("titles.json")
}

func GetDataBase() *gorm.DB {
	return database
}
func GetTitles() [][]string {
	return titles
}
