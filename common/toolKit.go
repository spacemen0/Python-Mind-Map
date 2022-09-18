package common

import "strings"

func AnswersToString(answers []string) string {
	res := strings.Join(answers, "@")
	return res
}

func StringToAnswers(str string) []string {
	res := strings.Split(str, "@")
	return res
}
