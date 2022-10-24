<template>
    <div>
        <div class="editContainer">
            <div class="mindMapContainer" id="mindMapContainer"></div>
            <mindmap height="50" width="50%"></mindmap>
        </div>
        <el-drawer id="drawer" title="" :visible.sync="drawer" direction="rtl"
                   :modal="false" :modal-append-to-body="false" size="20%">
            <div slot="title" class="drawer-title">{{ title }}</div>
            <div class="resourceBlock">
                <!--pdf资源-->
                <span slot="title" class="subtitle">Lecture</span>
                <router-link rel="external nofollow" target="_blank" v-for="(t,i) in pdfLink" :to="t">
                    <canvas id="the-canvas" style="display: none"></canvas>
                    <el-image :src="imgUrl" alt="pdf" width="100%" height="100%" fit="scale-down" class="pdf-img"/>
                </router-link>
                <el-divider/>
                <!--视频资源-->
                <span slot="title" class="subtitle">MOOC Resource</span>
                <div class="content">对应的视频序号：{{ videoID }}</div>
                <el-divider/>
                <!--习题-->
                <span slot="title" class="subtitle">Exercise</span>

                <router-link :to="answerLink" rel="external nofollow" target="_blank" class="content">Exercise Link</router-link>
                <el-divider/>
            </div>
        </el-drawer>

    </div>
</template>

<script>
import MindMap from 'simple-mind-map';
import {getData} from '@/api';
import request from "@/utils/request";
import {walk} from 'simple-mind-map/src/utils';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

const pdfjsLib = require("pdfjs-dist");
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default {
    name: 'HelloWorld',
    // 从0开始
    props: ['index'],
    data() {
        return {
            mindmapdata: null,
            answerLink: '',
            imgUrl: null,
            pdfLink: ["string.pdf"],
            drawer: false,
            direction: 'rtl',
            title: '',
            mindMap: null,
            videoID: ''
        }
    },
    mounted() {
        this.getData();
        this.init();
        let timer = setInterval(() => {
            if (this.mindMap.renderer.root !== null) {
                clearTimeout(timer);
                walk(this.mindMap.renderer.root, null,
                    (root) => {
                        if (root.ableToClick === true) {
                            root.setStyle('borderDasharray', 'none', false);
                            root.setStyle('borderColor', '#fff', false);
                        }
                    }, (root) => {
                    },
                    true, 0, 0);
                setTimeout(() => {
                    this.mindMap.execCommand('UNEXPAND_ALL');
                }, 200);
            }
        }, 100);
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

            this.mindMap.on('node_click', (data) => {
                if (data.ableToClick === true) {
                    this.title = data.nodeData.data.text;
                    this.answerLink = `/answer?ChapterID=${this.$props.index + 1}&TestID=${data.nodeData.data.testID}&TestName=${this.title}`;
                    this.getResources(this.$props.index + 1, data.nodeData.data.testID);

                    // console.log("node_click", data);
                    this.drawer = true;
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
                        this.videoID = value.Description;
                    });
                    this.pdfLink.forEach(value => this.showPdf(value));
                }
            }).catch(error => {
                console.log(error);
                this.$message({
                    type: "error",
                    message: "获取资源失败"
                });
            });
        },
        showPdf(pdfPath) {
            let _this = this;
            let imgArr = [];
            let loadingTask = pdfjsLib.getDocument(pdfPath);
            loadingTask.promise.then(function (pdf) {
                console.log('PDF loaded');
                // let pageNum = pdf.numPages
                let pageNum = 1;
                for (let i = 1; i <= pageNum; i++) {
                    pdf.getPage(i).then(function (page) {
                        console.log('Page loaded');

                        let scale = 1;
                        let viewport = page.getViewport({scale});

                        let canvas = document.createElement("canvas");
                        let context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        let renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        let renderTask = page.render(renderContext);
                        renderTask.promise.then(function () {
                            console.log('Page rendered');
                            let imgUrl = canvas.toDataURL('image/jpeg'); //转换为base64
                            if (imgUrl) {
                                imgArr[i - 1] = imgUrl;
                            }
                            //pdf全部画完结束后操作
                            if (imgArr.length === pageNum && !isEmpty(imgArr)) {
                                let canvas2 = document.getElementById('the-canvas');
                                let context2 = canvas2.getContext('2d');
                                canvas2.height = viewport.height * pageNum;
                                canvas2.width = viewport.width;
                                let count = 0;
                                for (let j = 0; j < imgArr.length; j++) {
                                    let IMG = new Image();
                                    IMG.src = imgArr[j];
                                    IMG.width = viewport.width;
                                    IMG.height = viewport.height;
                                    IMG.onload = function () {
                                        context2.drawImage(IMG, 0, viewport.height * j);
                                        count++;//确保所有img渲染结束后操作
                                        if (count === pageNum) {
                                            let canvas = document.getElementById('the-canvas');
                                            //赋值给img
                                            _this.imgUrl = canvas.toDataURL('image/jpeg');
                                        }
                                    }
                                }
                            }
                        });
                    });
                }
            }, function (reason) {
                console.error(reason);
            });

            function isEmpty(arr) {
                for (let i = 0; i < arr.length; i++) {
                    if (!arr[i])
                        return true;
                }
                return false;
            }
        }
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
.pdf-img {
    box-shadow: rgb(153 153 153) 0 0 3px 3px;
    border-radius: 6px;
    margin-top: 10px;
}

.drawer-title {
    font-size: xx-large;
    color: rgb(204, 204, 204);
    margin-bottom: 0;
    background: linear-gradient(244deg, #a9bad9, #a583cb 31%, #daa8d1 74%, #d4d7da);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.subtitle {
    font-size: 1.6em;
    margin-top: 1.2em;
    display: inline-block;
}

.resourceBlock {
    padding: 0 8%;
    color: #c1c1c1;
}

.content {
    margin-top: 0.4em;
    color: #fff;
    padding-left: 0;
    font-size: 1.3em;
    display: block;
}

.resourceBlock > a {
    text-decoration: none;
    color: #8180ff !important;
}

.resourceBlock > a:hover {
    text-decoration: underline;
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
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
}

</style>
