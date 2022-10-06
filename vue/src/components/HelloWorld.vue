<template>
    <div>
        <div class="editContainer">
            <div class="mindMapContainer" id="mindMapContainer"></div>
            <mindmap height="50" width="50%"></mindmap>
        </div>
        <el-drawer
            id="drawer"
            title=""
            :visible.sync="drawer"
            direction="rtl"
            :modal="false"
            :modal-append-to-body="false"
            size="20%">
            <span slot="title" style="font-size: 30px; color:  #cccccc">{{ title }}</span>
            <div class="resourceBlock">
                <router-link rel="external nofollow" target="_blank" v-for="(t,i) in pdfLink" :to="t">{{ pdfLink }}
                                                                                                      <!--<canvas id="the-canvas" style="display: none"></canvas>-->
                                                                                                      <!--<img :src="imgUrl" alt="pdf" width="100%" height="auto">-->
                </router-link>
                <router-link :to="answerLink" rel="external nofollow" target="_blank">习题</router-link>
            </div>
        </el-drawer>

    </div>
</template>
<script>
import MindMap from 'simple-mind-map'
import {getData} from '@/api'
import request from "@/utils/request";
// import {PDFWorker as PDFJS} from "pdfjs-dist";

const pdfjsLib = require("pdfjs-dist/build/pdf");
const pdfjsWorker = require("pdfjs-dist/build/pdf.worker.entry")

export default {
    name: 'HelloWorld',
    // 从0开始
    props: ['index'],
    data() {
        return {
            mindmapdata: null,
            answerLink: '',
            imgUrl: '1',
            pdfLink: "",
            drawer: false,
            direction: 'rtl',
            title: ''
        }
    },
    mounted() {
        this.getData();
        this.init();

    },
    methods: {
        getData() {
            let storeData = getData();
            this.mindMapData = storeData.python_trees[this.$props.index];
        },
        init() {
            let {root, layout, theme, view} = this.mindMapData;
            this.mindMap = new MindMap({
                el: document.getElementById('mindMapContainer'),
                data: root,
                layout: layout,
                theme: 'diyColor',
                themeConfig: theme.config,
                viewData: view,
                readonly: true
            });
            let themeConfig = this.mindMap.getCustomThemeConfig();
            themeConfig.backgroundColor = '#2f2f32';
            // this.mindMap.on('mousedown', (...args) => {
            //     console.log("鼠标按下")
            //     this.mindMap.setTheme('diyColor')
            //     console.log("this.mindMap.themeConfig",this.mindMap.themeConfig)
            //
            //   })
            // this.mindMap.on('node_mousedown', (data) => {
            //   console.log("nodemousedown  data",data)
            //   //console.log("nodemousedown datae",e)
            // });
            // this.mindMap.render()
            // this.mindMap.view.translateX(-600);

            this.mindMap.on('node_click', (data) => {
                if (data.ableToClick === true) {
                    this.drawer = true;
                    this.title = data.nodeData.data.text;
                    console.log(data.nodeData.data.testID);
                    this.answerLink = `/answer?ChapterID=${this.$props.index}&TestID=${data.nodeData.data.testID}&TestName=${this.title}`;
                    // 获取资源列表
                    this.getResources(this.$props.index, data.nodeData.data.testID);
                    // this.showPdf(this.pdfLink);
                    console.log("node_click", data);
                }
            });
        },
        getResources(chapterID, nodeID) {
            request.get('/user/getresourcelist', {
                params: {
                    ChapterID: chapterID,
                    NodeID: nodeID
                }
            }).then(res => {
                if (res.status === 200) {
                    this.pdfLink = [];
                    res.data.data.resources.forEach((value) => {
                        this.pdfLink.push(value.FileName);
                    })
                }
            }).catch(error => {
                console.log(error);
                this.$message({
                    type: "error",
                    message: "获取资源失败"
                });
            })
        }
        // showPdf(pdfPath) {
        //   let _this = this;
        //   let imgArr = [];
        //   pdfjsLib.workerSrc = require('pdfjs-dist/build/pdf.worker');
        //   // pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
        //   let loadingTask = pdfjsLib.getDocument(pdfPath);
        //   // PDFJS.workerSrc = 'pdf.worker.js';// pdfjsLib为undefined可以换成这行
        //   // let loadingTask = PDFJS.getDocument(pdfPath);// pdfjsLib为undefined可以换成这行
        //   loadingTask.promise.then(function (pdf) {
        //     console.log('PDF loaded');
        //     let pageNum = pdf.numPages;
        //     // console.log(pageNum);
        //     for (let i = 1; i <= pageNum; i++) {
        //       pdf.getPage(i).then(function (page) {
        //         console.log('Page loaded');
        //
        //         let scale = 1;
        //         let viewport = page.getViewport(scale);
        //
        //         // let canvas = document.getElementById('the-canvas');
        //         let canvas = document.createElement("canvas");
        //         let context = canvas.getContext('2d');
        //         canvas.height = viewport.height;
        //         canvas.width = viewport.width;
        //
        //         let renderContext = {
        //           canvasContext: context,
        //           viewport: viewport
        //         };
        //         let renderTask = page.render(renderContext);
        //         renderTask.promise.then(function () {
        //           console.log('Page rendered');
        //           let imgUrl = canvas.toDataURL('image/jpeg'); //转换为base64
        //           if (imgUrl) {
        //             imgArr[i - 1] = imgUrl;
        //           }
        //           //pdf全部画完结束后操作
        //           if (imgArr.length === pageNum && !isEmpty(imgArr)) {
        //             // let canvas2 = document.createElement("canvas");
        //             let canvas2 = document.getElementById('the-canvas');
        //             let context2 = canvas2.getContext('2d');
        //             canvas2.height = viewport.height * pageNum;
        //             canvas2.width = viewport.width;
        //             let count = 0;
        //             for (let j = 0; j < imgArr.length; j++) {
        //               let IMG = new Image();
        //               IMG.src = imgArr[j];
        //               IMG.width = viewport.width;
        //               IMG.height = viewport.height;
        //               IMG.onload = function () {
        //                 context2.drawImage(IMG, 0, viewport.height * j);
        //                 count++;//确保所有img渲染结束后操作
        //                 if (count === pageNum) {
        //                   let canvas = document.getElementById('the-canvas');
        //                   //赋值给img
        //                   _this.imgUrl = canvas.toDataURL('image/jpeg');
        //                   console.log('_this.imgUrl', _this.imgUrl);
        //                 }
        //               }
        //             }
        //           }
        //         });
        //       });
        //     }
        //   }, function (reason) {
        //     console.error(reason);
        //   });
        //
        //   function isEmpty(arr) {
        //     for (let i = 0; i < arr.length; i++) {
        //       if (!arr[i])
        //         return true;
        //     }
        //     return false;
        //   }
        // }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
<style lang="less" scoped>
.resourceBlock {
    padding-left: 50px;
    color: #42b983;
    font-size: 30px;
}

.resourceBlock > a {
    text-decoration: none;
    margin-top: 30px;
    display: block;
}

/deep/ .el-drawer.rtl {
    border-radius: 20px;
    background-color: #39393c;
    width: 20%;
}

#drawer {
    top: 70px;
    bottom: 7px;
}

.courseName {
    position: relative;
    top: 5%;
    left: 5%;
    font-size: 40px;
}

.editContainer {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #2c3e50;

    .mindMapContainer {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
    }
}

</style>
