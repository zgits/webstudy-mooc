<template>
    <!--在视频外面加一个容器-->
    <div>
        <el-row style="background-color: #1c1f21">
            <el-col :span="24">
            <div class="input_video">
                <video-player class="video-player vjs-custom-skin"
                              ref="videoPlayer"
                              :playsinline="true"
                              :options="playerOptions"
                ></video-player>
            </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>

    import DetailTeacher from '../lesson-detail/lesson-detail-teacher.vue'

    export default {
        name: 'index',
        data() {
            return {
                teacher: {
                    "avatar": "https://img1.sycdn.imooc.com/user/5abe468b0001664107390741-100-100.jpg",
                    "name": "DellLee",
                    "job": "Web前端工程师",
                    "introduce": "BAT资深前端工程师，负责数据平台技术研发。曾任去哪儿网高级前端工程师，主导去哪儿网内部前端监控系统设计，负责去哪儿网门票用户端的前端设计开发。曾任国内知名培训机构高级前端讲师，负责React，Angular，Vue，Hybrid，RN的课程讲授，具备丰富前端授课经验。对优雅编程及工程化有深度思考及见解，教会你写代码，同时帮助你把代码写的更漂亮！"
                },
                // 视频播放
                playerOptions: {
                    playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "video/mp4",
                        // src : 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'//url地址
                        src: 'http://vjs.zencdn.net/v/oceans.mp4',

                    }],
                    poster: "", //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,//当前时间和持续时间的分隔符
                        durationDisplay: true,//显示持续时间
                        remainingTimeDisplay: false,//是否显示剩余时间功能
                        fullscreenToggle: true  //全屏按钮
                    }
                }
            }
        },
        components:{
            DetailTeacher,
        }
    }
</script>
<style scoped>
    .input_video {
        width: 800px;
        height: 500px;
        margin-top: 30px;
        margin-left: 30px;

    }
</style>
