package common

import (
	"encoding/json"
	"io/ioutil"
	"strings"
)

func AnswersToString(answers []string) string {
	res := strings.Join(answers, "@")
	return res
}

func StringToAnswers(str string) []string {
	res := strings.Split(str, "@")
	return res
}

func ReadStringsFromJSON(filename string) ([]string, error) {
	// 读取文件内容
	content, err := ioutil.ReadFile(filename)
	if err != nil {
		return nil, err
	}

	// 定义一个[]string来保存结果
	var strings []string

	// 解析JSON
	err = json.Unmarshal(content, &strings)
	if err != nil {
		return nil, err
	}

	return strings, nil
}

func WriteStringsToJSON(filename string, strings []string) error {
	// 将[]string转换为JSON
	content, err := json.Marshal(strings)
	if err != nil {
		return err
	}

	// 将JSON写入文件
	err = ioutil.WriteFile(filename, content, 0644)
	if err != nil {
		return err
	}

	return nil
}
func ReadStringsArrayFromJSON(filename string) ([][]string, error) {
	// 读取JSON文件
	content, err := ioutil.ReadFile(filename)
	if err != nil {
		return nil, err
	}

	// 定义一个[][]string来保存结果
	var result [][]string

	// 解析JSON
	err = json.Unmarshal(content, &result)
	if err != nil {
		return nil, err
	}

	return result, nil
}
