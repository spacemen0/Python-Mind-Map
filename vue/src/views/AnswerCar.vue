<template>
    <div>
        <div class="title">
            python第{{ ChapterID }}章{{ chapterName }}
        </div>
        <el-form class="main">
            <P class="headline">客观题<span class="score" v-if="isSubmit">你的得分：{{ score }}</span></P>
            <el-form-item v-for="(t,i) in optQuesList" :key="i" size="medium">
                <P class="quesTitle" :class="{ 'wrongAns': checkResult[i] === false }">
                    <span class="quesNum">{{ i + 1 }}</span>{{ t.title }} <i v-if="checkResult[i] === false" class="el-icon-close"></i>
                </P>
                <el-radio-group v-model="UserAnswers[i]">
                    <el-radio label="A">A.{{ t.selectA }}</el-radio>
                    <br>
                    <el-radio label="B">B.{{ t.selectB }}</el-radio>
                    <br>
                    <el-radio label="C" v-if="t.selectC !== '' ">C.{{ t.selectC }}</el-radio>
                    <br v-if="t.selectC !== '' ">
                    <el-radio label="D" v-if="t.selectD !== '' ">D.{{ t.selectD }}</el-radio>
                </el-radio-group>
                <div v-if="isSubmit" class="correctAnswer">正确答案：{{ correctAnswers[i] }}</div>
            </el-form-item>

            <el-form-item v-for="(t,i) in optQuesList" :key="i" size="medium">
                <P class="quesTitle" :class="{ 'wrongAns': checkResult[i] === false }">
                    <span class="quesNum">{{ i + 1 }}</span>{{ t.title }} <i v-if="checkResult[i] === false" class="el-icon-close"></i>
                </P>
                <el-checkbox-group v-model="multiOptQuestList[i]" size="medium">
                    <el-checkbox label="A">A.{{ t.selectA }}</el-checkbox>
                    <br>
                    <el-checkbox label="B">B.{{ t.selectB }}</el-checkbox>
                    <br>
                    <el-checkbox label="C" v-if="t.selectC !== '' ">C.{{ t.selectC }}</el-checkbox>
                    <br v-if="t.selectC !== '' ">
                    <el-checkbox label="D" v-if="t.selectD !== '' ">D.{{ t.selectD }}</el-checkbox>
                </el-checkbox-group>
                <div v-if="isSubmit" class="correctAnswer">正确答案：{{ correctAnswers[i] }}</div>
            </el-form-item>

            <el-form-item v-for="(t,i) in blankQuesList" :key="i">
                <P class="quesTitle" :class="{ 'wrongAns': checkResult[i] === false }">
                    <span class="quesNum">{{ i + 1 }}</span>{{ t.title }} <i v-if="checkResult[i] === false" class="el-icon-close"></i>
                </P>
                <el-input size="medium" v-model="UserAnswers[optQuesList.length + i]" clearable style="width: 50%"></el-input>
                <div v-if="isSubmit" class="correctAnswer">正确答案：{{ correctAnswers[i] }}</div>
            </el-form-item>

            <el-button type="primary" class="subBtn" @click="clickSubmit">提交答案</el-button>

            <el-divider/>
            <P class="headline">编程题<span style="font-size: 0.8em; font-weight: normal">（将代码文件上传即可）</span></P>
            <el-form-item v-for="(t,i) in programQuestList" :key="i">
                <P class="quesTitle"><span class="quesNum">{{ i + 1 }}</span>{{ t }}</P>
                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
        </el-form>

        <el-dialog title="提示" :visible.sync="dialogVisible" width="20%" top="35vh">
            <span>确定要提交答案？</span>
            <div v-if="!isFinished" class="unFinishWarn"><i class="el-icon-warning"></i>还有题目未完成</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" class="btn">取 消</el-button>
                <el-button type="primary" @click="submit"  class="btn">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import request from "@/utils/request";

export default {
    name: "AnswerCar",
    data() {
        let temp = [];
        for (let i = 0; i < 9; i++)
            temp.push([]);

        return {
            ChapterID: 1,
            TestID: 1,
            chapterName: '',
            isSubmit: true,
            optQuesList: [
                {
                    number: 1,
                    title: '某建设工程施工招标，甲公司中标后将其转包给不具有相应资质等级的乙公司，乙施工过程不符合规定的质量标准，给建设单位造成损失。关于向建设单位承担赔偿责任的说法，正确的是（ ）。',
                    selectA: '甲、乙承担连带赔偿责任',
                    selectB: '建设单位与甲有合同关系，应由乙承担赔偿责任',
                    selectC: '乙为实际施工人，应由乙承担赔偿责任',
                    selectD: '',
                },
                {
                    number: 2,
                    title: '下列属于建设工程施工合同承包人主要义务的是（）。',
                    selectA: '不得转包和违法分包工程',
                    selectB: '及时检查隐蔽工程',
                    selectC: '建设工程质量不符合约定的有偿修理',
                    selectD: '提供必要施工条件',
                },
                {
                    number: 3,
                    title: '建设工程未经竣工验收，发包人擅自使用的，竣工日期（）。',
                    selectA: '以合同约定的竣工日期为准',
                    selectB: '相应顺延',
                    selectC: '以承包人提交竣工报告之日为准',
                    selectD: '以转移占有建设工程之日为竣工日期',
                },
                {
                    number: 4,
                    title: '某开发商开发的住宅价值7000万元，其中已售出价值5000万元住宅，开发商将此笔资金全部用于购买土地。导致开发商欠施工单位的2000万元工程款迟迟不能支付，另外开发商还欠银行抵押贷款1000万元，欠材料供应商500万元，现承包人申请人民法院拍卖该工程，下列说法正确的是（）。',
                    selectA: '人民法院可将7000万元的房产拍卖，然后分别偿还开发商各方欠款',
                    selectB: '人民法院可将7000万元的房产拍卖，然后先还施工单位，再还银行和材料供应商',
                    selectC: '人民法院可将2000万元的房产拍卖，然后按欠款比例分别偿还开发商各方欠款',
                    selectD: '人民法院可将2000万元的房产拍卖，首先偿还施工单位欠款',
                },
                {
                    number: 5,
                    title: '某村委会为获得回扣，以高价与施工单位签订了村内道路施工合同，根据《民法典》，该合同为（）合同。',
                    selectA: '无效',
                    selectB: '可变更可撤销',
                    selectC: '有效',
                    selectD: '效力待定',
                }
            ],
            optQuestion: {
                number: 0,
                title: '',
                selectA: '',
                selectB: '',
                selectC: '',
                selectD: '',
            },
            CheckQuesList: [],
            blankQuesList: [
                {
                    title: '企业事业单位和其他生产经营者，为改善环境，依照有关规定转产、搬迁、关闭的，人民政府应当子以支持。',
                    number: 0
                },
                {
                    title: '人民代表大会制度是我国的根本制度。',
                    number: 1
                },
                {
                    title: '一切法律、行政法规和地方性法规都不得同宪法相抵触。',
                    number: 2
                },
                {
                    title: '我国最高国家权力机关的常设机关是全国人民代表大会常务委员会。',
                    number: 3
                },
            ],
            blankQuestion: {
                title: '',
                number: 0
            },
            programQuestList: ['The integrated development tool built into Python is'],
            checkResult: [false],
            correctAnswers: ['AB'],
            UserAnswers: ['A', 'B'],
            multiOptQuestList: temp,
            dialogVisible: false,
            isFinished: false,
            score: 0
        }
    },
    created() {
        request.get(`/:6679/user/getquestions?ChapterID=${this.ChapterID}TestID=${this.TestID}`).then(res => {
            if (res.code === 200) {
                this.UserAnswers = [];
                for (let e of res.data) {
                    this.UserAnswers.push('');
                    if (e.ChoiceQuestion === true) {
                        let array = e.Description.split('@');
                        this.optQuestion.selectA = array[1];
                        this.optQuestion.selectB = array[2];
                        this.optQuestion.selectC = array[3];
                        this.optQuestion.selectD = array[4];
                        this.optQuestion.title = array[5];
                        this.optQuestion.number = e.QuestionNumber;
                        this.optQuesList.push(this.optQuestion);
                    } else {
                        this.blankQuestion.title = e.Description;
                        this.blankQuestion.number = e.QuestionNumber;
                        this.blankQuesList.push(this.blankQuestion);
                    }
                }
            } else {
                this.$message({
                    type: "error",
                    message: "加载失败"
                })
            }
        });
    },
    methods: {
        clickSubmit() {
            console.log(this.UserAnswers);
            this.dialogVisible = true;
            let answerdNum = 0;
            for (let e of this.UserAnswers) {
                if (e !== '')
                    answerdNum++;
            }
            if (answerdNum === this.UserAnswers.length)
                this.isFinished = true;
        },
        submit() {
            this.dialogVisible = false;
            //  发送提交请求
            this.UserAnswers.forEach((value, index, array) => {
                if (value === '')
                    array[index] = 'null';
            });

            request.post('/:6679/user/createanswersheet',)

        },
        showAns() {
            this.updateUserSelect(this.ruleForm.resource)
            this.$router.push('/result')
        },
        getCorrectAnswers() {
            request.get(`/:6679/user/getcorrectanswers?ChapterID=${this.ChapterID}&TestID=${this.TestID}&UserID=${this.UserID}`).then(res => {
                if (res.code === 200) {

                }
            });
        }
    }
}
</script>

<style scoped>
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
    line-height: 2
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
    width: 15%;
    font-size: 20px;
}

/deep/ .el-input__inner {
    height: 42px;
    line-height: 42px;
}

.el-radio, .el-checkbox {
    margin-left: 20px;
}

.el-input {
    font-size: 20px;
}

.el-radio /deep/ .el-radio__label,
.el-checkbox /deep/ .el-checkbox__label {
    line-height: 2;
    font-size: 20px;
    color: #626262;
}

.correctAnswer {
    color: #67c23a;
    line-height: 2;
    font-size: 20px;
}


.title {
    margin-left: 5%;
    float: left;
    font-size: 40px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
