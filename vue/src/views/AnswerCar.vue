<template>
    <div>
        <div class="title">
            <div>python第{{ ChapterID }}章</div>
            <div>{{ TestName }}</div>
        </div>
        <el-form class="main">
            <P class="headline">客观题<span class="score" v-if="isSubmit">正确率：{{ score }}</span></P>
            <!--单选题-->
            <el-form-item v-for="(t,i) in optQuesList" size="medium">
                <P class="quesTitle" :class="{ 'wrongAns': checkResult.optQuesRes[i] === false }">
                    <span class="quesNum question">{{ t.number }}</span>
                    <span class="question" v-html="t.title"></span>
                    <i v-if="checkResult.optQuesRes[i] === false" class="el-icon-close"></i>
                    <el-image v-if="t.imgurl !== ''" :src="t.imgurl" alt="题目图片" fit="none" class="question-img"/>
                </P>
                <br/>
                <el-radio-group v-model="optAns[i]">
                    <div v-for="(e,j) in t.options">
                        <el-radio :label="getAlpha(j)" size="medium">
                            <span>{{ getAlpha(j) }}.</span>
                            <span class="option">{{ e }}</span>
                        </el-radio>
                    </div>
                </el-radio-group>
                <div v-if="isSubmit" class="correctAnswer">正确答案：{{ correctAnswers[0][i] }}</div>
            </el-form-item>

            <!--多选题-->
            <el-form-item v-for="(t,i) in multiOptQuestList" size="medium">
                <P class="quesTitle" :class="{ 'wrongAns': checkResult.multiOptQuesRes[i] === false }">
                    <span class="quesNum question">{{ t.number }}</span>（多选）<span class="question" v-html="t.title"></span>
                    <i v-if="checkResult.multiOptQuesRes[i] === false" class="el-icon-close"></i>
                    <el-image v-if="t.imgurl !== ''" :src="t.imgurl" alt="题目图片" fit="none" class="question-img"/>
                </P>
                <br/>
                <el-checkbox-group v-model="multiAns[i]" size="medium">
                    <div v-for="(e,j) in t.options">
                        <el-checkbox :label="getAlpha(j)" size="medium">
                            <span>{{ getAlpha(j) }}.</span>
                            <span class="option">{{ e }}</span>
                        </el-checkbox>
                    </div>
                </el-checkbox-group>
                <div v-if="isSubmit" class="correctAnswer">正确答案：{{ correctAnswers[1][i] }}</div>
            </el-form-item>

            <!--判断题-->
            <el-form-item v-for="(t,i) in TFQuestionList" size="medium">
                <P class="quesTitle" :class="{ 'wrongAns': checkResult.TFQuesRes[i] === false }">
                    <span class="quesNum question">{{ t.number }}</span><span class="question" v-html="t.title"></span> <i v-if="checkResult.TFQuesRes[i] === false" class="el-icon-close"></i>
                </P>
                <el-radio-group v-model="TFAns[i]">
                    <div>
                        <el-radio label="1" size="medium"><i class="el-icon-check TFOpt"></i></el-radio>
                    </div>
                    <div>
                        <el-radio label="0" size="medium"><i class="el-icon-close TFOpt"></i></el-radio>
                    </div>
                </el-radio-group>
                <div v-if="isSubmit" class="correctAnswer">正确答案：{{ correctAnswers[2][i] }}</div>
            </el-form-item>

            <!--填空题-->
            <el-form-item v-for="(t,i) in blankQuesList">
                <P class="quesTitle" :class="{ 'wrongAns': checkResult.blanQuesRes[i] === false }">
                    <span class="quesNum question">{{ t.number }}</span><span class="question" v-html="t.title"></span> <i v-if="checkResult.blanQuesRes[i] === false" class="el-icon-close"></i>
                </P>
                <el-input size="medium" v-model="blanAns[i]" clearable style="width: 50%"></el-input>
                <div v-if="isSubmit" class="correctAnswer">正确答案：{{ correctAnswers[3][i] }}</div>
            </el-form-item>

            <el-button type="primary" class="subBtn" @click="clickSubmit">提交答案</el-button>

            <el-divider v-if="programQuestList.length > 0"/>

            <!--编程题-->
            <P class="headline" v-if="programQuestList.length > 0">编程题<span style="font-size: 0.8em; font-weight: normal">（将代码文件上传即可）</span></P>
            <el-form-item v-for="(t,i) in programQuestList">
                <P class="quesTitle"><span class="quesNum question">{{ t.number }}</span><span class="question" v-html="t.title"></span></P>
                <el-upload class="upload-demo" drag :limit="1" :file-list="codefileList[i]" show-file-list :auto-upload="false"
                           :on-error="uploadError" :on-success="uploadSuccess" action="#"
                           :on-change="(file, fileList)=>{return handleChange(file, fileList, i)}" :on-remove="(file, fileList)=>{return fileRemove(file, fileList, i)}">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
                </el-upload>
                <el-button type="primary" @click="()=>{return upload(i)}" class="subBtn">上传</el-button>
            </el-form-item>
        </el-form>

        <el-dialog title="提示" :visible.sync="dialogVisible" width="20%" top="35vh">
            <span>确定要提交答案？</span>
            <div v-if="!isFinished" class="unFinishWarn"><i class="el-icon-warning"></i>还有题目未完成</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" class="btn">取 消</el-button>
                <el-button type="primary" @click="submit" class="btn">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import request from "@/utils/request";

let FormData = require("form-data");

// 深拷贝
function deepCopy(ele) {
    return JSON.parse(JSON.stringify(ele));
}

export default {
    name: "AnswerCar",
    data() {
        return {
            ChapterID: 1,
            TestID: 1,
            TestName: '',
            UserID: '',
            chapterName: '',
            isSubmit: false,
            // 单选题数组
            optQuesList: [],
            optQuestion: {
                number: 0,
                title: '',
                options: [],
                imgurl: ''
            },
            // 多选题数组
            multiOptQuestList: [],
            // 判断题数组
            TFQuestionList: [],
            // 填空题数组
            blankQuesList: [],
            blankQuestion: {
                title: '',
                number: 0
            },
            // 编程题数组
            programQuestList: [],
            // 客观题校对结果
            checkResult: {
                optQuesRes: [],
                multiOptQuesRes: [],
                TFQuesRes: [],
                blanQuesRes: []
            },
            correctAnswers: [],
            // 四种类型题目的答案
            optAns: [],
            multiAns: [[]],
            TFAns: [],
            blanAns: [],
            // 与后端交互所用的答案
            UserAnswers: [],
            dialogVisible: false,
            // 是否已经完成答题
            isFinished: false,
            score: '',
            // 代码文件数组
            codefileList: [],
        }
    },
    mounted() {
        // 获取用户信息
        this.UserID = this.$store.state.userInfo.userID;
        this.ChapterID = this.$route.query.ChapterID;
        this.TestID = this.$route.query.TestID;
        // 获取知识点名字
        this.TestName = this.$route.query.TestName;
        // 清空题目数组
        this.optQuesList = [];
        this.multiOptQuestList = [];
        this.TFQuestionList = [];
        this.blankQuesList = [];
        this.programQuestList = [];
        //  获取题目
        let url = `/user/getquestions?ChapterID=${this.ChapterID}&TestID=${this.TestID}&UserID=${this.UserID}`;
        request.get(url).then(res => {
            if (res.status === 200) {
                // 初始化答案数组
                this.optAns = [];
                this.multiAns = [];
                this.TFAns = [];
                this.blanAns = [];
                for (let e of res.data.data.questions) {
                    let array = e.Description.split('@');
                    for (let e of array)
                        e = e.replaceAll('\\n', '<br>');
                    switch (e.QuestionType) {
                        // 单选题
                        case 0:
                        case 4: {
                            this.optQuestion.title = array[0];
                            // 若带图片
                            if (e.QuestionType === 4) {
                                this.optQuestion.options = array.slice(1, -1);
                                this.optQuestion.imgurl = array.at(-1);
                            } else {
                                this.optQuestion.options = array.slice(1);
                            }
                            this.optQuestion.number = e.QuestionNumber;
                            this.optQuesList.push(deepCopy(this.optQuestion));
                            this.optAns.push('');
                            break;
                        }
                        // 多选题
                        case 1:
                        case 5: {
                            this.optQuestion.title = array[0];
                            if (e.QuestionType === 5) {
                                this.optQuestion.options = array.slice(1, -1);
                                this.optQuestion.imgurl = array.at(-1);
                            } else {
                                this.optQuestion.options = array.slice(1);
                            }
                            this.optQuestion.number = e.QuestionNumber;
                            this.multiOptQuestList.push(deepCopy(this.optQuestion));
                            this.multiAns.push([]);
                            break;
                        }
                        // 判断题
                        case 2: {
                            this.blankQuestion.title = array[0];
                            this.blankQuestion.number = e.QuestionNumber;
                            this.TFQuestionList.push(deepCopy(this.blankQuestion));
                            this.TFAns.push('');
                            break;
                        }
                        // 填空题
                        case 3: {
                            this.blankQuestion.title = array[0];
                            this.blankQuestion.number = e.QuestionNumber;
                            this.blankQuesList.push(deepCopy(this.blankQuestion));
                            this.blanAns.push('');
                            break;
                        }
                        // 编程题
                        case  9: {
                            this.blankQuestion.title = array[0];
                            this.blankQuestion.number = e.QuestionNumber;
                            this.programQuestList.push(deepCopy(this.blankQuestion));
                            this.codefileList.push([]);
                        }
                    }
                }

                // 判断是否已经回答过题目
                if (res.data.data.hasDoneTest === true) {
                    this.showAns();
                }

            }
        }).catch(error => {
            console.log(error);
            this.$message({
                type: "error",
                message: "加载失败"
            });
        });

    },
    methods: {
        // 提交按钮点击事件
        clickSubmit() {
            // 将答案移到UserAnswers中
            this.UserAnswers = [];
            let i = 0;
            for (let e of this.optAns) {
                if (e === undefined || e === '')
                    this.UserAnswers[i++] = 'null';
                else
                    this.UserAnswers[i++] = e;
            }
            for (let e of this.multiAns) {
                if (e === undefined || e === [])
                    this.UserAnswers[i++] = 'null';
                else
                    this.UserAnswers[i++] = e.sort().join('');
            }
            for (let e of this.TFAns) {
                if (e === undefined || e === '')
                    this.UserAnswers[i++] = 'null';
                else
                    this.UserAnswers[i++] = e;
            }
            for (let e of this.blanAns) {
                if (e === undefined || e === '')
                    this.UserAnswers[i++] = 'null';
                else
                    this.UserAnswers[i++] = e;
            }

            console.log(this.UserAnswers);
            this.dialogVisible = true;
            let answerdNum = 0;
            for (let e of this.UserAnswers) {
                if (e !== 'null')
                    answerdNum++;
            }
            if (answerdNum === this.UserAnswers.length)
                this.isFinished = true;
        },
        // 提交答案
        submit() {
            this.dialogVisible = false;
            // 检查是否提交过答案
            if (this.isSubmit === true) {
                this.$message({
                    type: "warning",
                    message: "已提交过答案，不能再次提交"
                });
                return;
            }
            let answers = this.UserAnswers.join('@');
            let data = new FormData();
            data.append('ChapterID', this.ChapterID);
            data.append('TestID', this.TestID);
            data.append('UserID', this.UserID);
            data.append('Answers', answers);
            request.post(`/user/createanswersheet`, data).then(res => {
                if (res.status === 200) {
                    this.$message({
                        type: "success",
                        message: "提交成功"
                    });
                    this.showAns();
                }
            }).catch(error => {
                console.log(error);
                this.$message({
                    type: "error",
                    message: "提交失败"
                });
            })
        },
        // 获取用户之前的答题信息以及正确答案
        showAns() {
            let url = `/user/getcorrectanswers?ChapterID=${this.ChapterID}&TestID=${this.TestID}&UserID=${this.UserID}`;
            request.get(url).then(res => {
                if (res.status === 200) {
                    let i1 = this.optQuesList.length;
                    let i2 = i1 + this.multiOptQuestList.length;
                    let i3 = i2 + this.TFQuestionList.length;
                    let i4 = i3 + this.blankQuesList.length;

                    // 获取正确答案，并转换成所需格式
                    let corAns = res.data.data['correct answer'].split('@');
                    this.correctAnswers = [];
                    this.correctAnswers.push(corAns.slice(0, i1));
                    this.correctAnswers.push(corAns.slice(i1, i2));
                    this.correctAnswers.push(corAns.slice(i2, i3));
                    this.correctAnswers.push(corAns.slice(i3, i4));

                    // 获取用户答题正误结果，并转换成所需格式
                    let checkResult0 = res.data.data['result'];
                    this.checkResult.optQuesRes = checkResult0.slice(0, i1);
                    this.checkResult.multiOptQuesRes = checkResult0.slice(i1, i2);
                    this.checkResult.TFQuesRes = checkResult0.slice(i2, i3);
                    this.checkResult.blanQuesRes = checkResult0.slice(i3, i4);

                    // 获取用户答案，并转换成所需格式
                    this.UserAnswers = res.data.data['user answer'].split('@');
                    this.optAns = this.UserAnswers.slice(0, i1);
                    this.multiAns = [];
                    for (let e of this.UserAnswers.slice(i1, i2)) {
                        let list = e.split('');
                        this.multiAns.push(list);
                    }
                    this.TFAns = this.UserAnswers.slice(i2, i3);
                    this.blanAns = this.UserAnswers.slice(i3, i4);

                    // 计算分数(正确率)
                    this.score = 0;
                    checkResult0.forEach((value) => {
                        if (value === true)
                            this.score++;
                    });
                    this.score = this.score + ' / ' + checkResult0.length;
                    this.isSubmit = true;
                }
            }).catch(error => {
                console.log(error);
                this.$message({
                    type: "error",
                    message: "获取答题信息失败"
                });
            })
        },
        // 上传文件相关方法
        onBeforeUpload(file) {
            const isIMAGE = file.type === 'image/jpeg' || 'image/gif' || 'image/png';
            const isLt1M = file.size / 1024 / 1024 < 1;

            if (!isIMAGE) {
                this.$message.error('上传文件只能是图片格式!');
            }
            if (!isLt1M) {
                this.$message.error('上传文件大小不能超过 1MB!');
            }
            return isIMAGE && isLt1M;
        },
        uploadError(err, file, fileList) {
            console.log(err);
            console.log(fileList);
        },
        uploadSuccess(response, file, fileList) {
            console.log(response);
            console.log(fileList);
        },
        handleChange(file, fileList, index) {
            this.codefileList[index] = fileList;
            console.log(fileList);
        },
        fileRemove(file, fileList, index) {
            console.log(fileList);
            this.codefileList[index] = fileList;
        },
        // 上传文件
        upload(index) {
            let fd = new FormData();
            // 判断文件列表是否为空
            if (this.codefileList[index].length === 0) {
                this.$message({
                    type: "error",
                    message: "未提交文件"
                });
                return;
            }

            let raw = this.codefileList[index][0].raw;
            fd.append("codes", raw);
            console.log(raw)

            let url = `/user/uploadcodes?ChapterID=${this.ChapterID}&TestID=${this.TestID}`
            request.post(url, fd).then(res => {
                if (res.status === 200) {
                    this.$message('上传成功')
                }
            }).catch(error => {
                console.log(error);
                this.$message({
                    type: "error",
                    message: "上传失败"
                });
            })
        },
        // 根据Index生成大写字母
        getAlpha(index) {
            return String.fromCharCode(65 + index);
        },
    }
}
</script>

<style scoped>
/deep/ .el-dialog__title,
/deep/ .el-dialog__body {
    font-size: 24px;
}

.question-img {
    margin-left: 20px;
    display: inline-table
}

.question {
    display: inline-flex;
}

.option {
    margin-left: 0.5em;
}

.TFOpt {
    color: rgb(74 74 74) !important;
    font-size: 1.5em;
    font-weight: normal !important;
}

.el-upload__text,
.el-upload__tip {
    font-size: 1.3em;
}

.btn {
    font-size: 1em;
}

.unFinishWarn {
    color: red;
    text-align: left;
    margin-top: 4%;

}

.score {
    font-size: 0.8em;
    font-weight: normal;
    float: right;
}

.el-icon-close {
    color: red;
    text-align: right;
    font-weight: bolder;
}

.quesNum {
    font-weight: bold;
    font-size: 1.15em;
    margin-right: 20px;
    vertical-align: baseline;
}

.headline {
    font-size: 30px;
    font-weight: bold;
}

.quesTitle {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 0;
    line-height: 1.5;
    white-space: pre-wrap !important;
}

.wrongAns {
    background-color: #fef0f0;
    color: #f56c6c;
}

.main {
    margin: 1% 24%;
    padding: 2% 5%;
    text-align: left;
    border-radius: 15px;
    background-color: white;
    font-size: 20px;
}

.subBtn {
    /*width: 15%;*/
    font-size: 20px;
}

/deep/ .el-input__inner {
    height: 42px;
    line-height: 42px;
}

.el-radio, .el-checkbox {
    /*margin-left: 20px;*/
}

.el-input {
    font-size: 20px;
}

.el-radio /deep/ .el-radio__label,
.el-checkbox /deep/ .el-checkbox__label {
    line-height: 2;
    font-size: 20px;
    color: #626262;
    text-overflow: ellipsis;
    white-space: normal;
    display: inline-flex;
    flex-direction: row;
}

.correctAnswer {
    color: #67c23a;
    line-height: 2;
    font-size: 20px;
}


.title {
    margin-left: 3%;
    float: left;
    font-size: 36px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    max-width: 10em;
    word-break: break-word;
    line-height: 1.5em;
}
</style>
