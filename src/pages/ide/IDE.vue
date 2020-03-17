<template>

    <div>
    <div>
        <el-select v-model="lang" placeholder="请选择" @change="setLang()">
            <el-option
                    v-for="item in langs"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
            </el-option>
        </el-select>

        <codemirror
                ref="mycode"
                :value="curCode"
                :options="cmOptions"
                class="code">
        </codemirror>
    </div>
     <div>

     </div>
    </div>
</template>

<script>


    import {codemirror} from 'vue-codemirror'

    import "codemirror/addon/edit/closebrackets.js" //闭合括号
    import "codemirror/addon/edit/closetag.js" //闭合括号

    //折叠
    import "codemirror/addon/fold/foldgutter.css"
    import "codemirror/addon/fold/foldcode.js"
    import "codemirror/addon/fold/foldgutter.js"
    import "codemirror/addon/fold/brace-fold.js"
    import "codemirror/addon/fold/xml-fold.js"

    //自动补全
    import "codemirror/addon/hint/show-hint.css"
    import "codemirror/addon/hint/show-hint.js"
    import "codemirror/addon/hint/anyword-hint.js"
    import "codemirror/addon/hint/javascript-hint.js"


    import "codemirror/theme/darcula.css";  // 主题样式，


    //代码高亮
    require("codemirror/mode/javascript/javascript");
    require("codemirror/mode/clike/clike");
    require("codemirror/mode/xml/xml");
    require("codemirror/mode/css/css")
    require("codemirror/mode/python/python")

    import {getLang} from "api/ide";
    import {ERR_OK} from 'api/config.js'

    export default {
        components: {
            codemirror
        },
        data() {
            return {
                modes: [
                    'text/html',
                    'text/x-java',
                    'text/x-c++src',
                    'text/x-python'
                ],
                langs: [],
                lang: 0,
                curCode: '',
                cmOptions: {
                    value: '',
                    mode: 'text/html',
                    theme: "darcula",

                    //行号
                    lineNumbers: true,


                    // 代码折叠
                    lineWrapping: true,
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],

                    //括号匹配
                    matchBrackets: true,

                    //自动补全
                    autoCloseBrackets: true,

                    autoCloseTags: true,
                }
            }
        },
        mounted() {
            this.getLangData()
        },
        methods: {
            getLangData() {
                getLang().then(res => {
                    let {code, data} = res
                    if (code === ERR_OK) {
                        this.langs = data
                    }
                })
            },
            setLang() {
                this.cmOptions.mode=this.modes[this.lang]
            }
        }
    }

</script>

<style scope>

    .code {
        width: 700px;

        margin-left: 20px;
    }

    .result {
        width: 600px;
        height: 400px;
        background-color: #1c1f21;
    }

    .CodeMirror {
        border: 1px solid #eee;
        height: auto;
        font-size: 14px;
    }

    .CodeMirror-scroll {
        height: 600px;
        overflow-y: hidden;
        overflow-x: auto;
    }
</style>
