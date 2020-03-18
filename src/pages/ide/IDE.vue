<template>

    <el-row :gutter="20" style="margin-left: 20px">
        <el-col :span="12" style="margin-top: 30px">

            <el-row style="margin-bottom: 10px">


                <el-select size="medium" v-model="lang" placeholder="请选择" @change="setLang()">
                    <el-option
                            v-for="item in langs"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                    </el-option>
                </el-select>

                <el-button size="medium" type="success" style="margin-left: 5px" @click="runCodeData()">
                    运行
                </el-button>

                <el-button size="medium" type="success">
                    保存
                </el-button>
            </el-row>


            <codemirror
                    v-model="curCode"
                    ref="mycode"
                    :options="cmOptions"
                    class="code"
            >
            </codemirror>
        </el-col>
        <el-col :span="12" style="margin-top: 30px;">
            <el-button size="medium" disabled style="margin-bottom: 10px">结果</el-button>
            <el-card class="result">
            <div v-append="this.result"></div>
            </el-card>
        </el-col>
    </el-row>
</template>



<script>


    import {runCode} from 'api/ide.js'
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
    require("codemirror/mode/javascript/javascript"); //js
    require("codemirror/mode/clike/clike"); //java,c++,kotlin
    require("codemirror/mode/xml/xml"); //html
    require("codemirror/mode/css/css") //css
    require("codemirror/mode/python/python") //python
    require("codemirror/mode/php/php") //php
    require("codemirror/mode/perl/perl") //perl
    require("codemirror/mode/ruby/ruby") //ruby
    require("codemirror/mode/swift/swift") //swift
    require("codemirror/mode/go/go") //go


    import {getLang} from "api/ide";
    import {ERR_OK} from 'api/config.js'

    export default {
        components: {
            codemirror,
        },
        data() {
            return {
                modes: [
                    'text/html',
                    'text/x-java',
                    'text/x-c++src',
                    'text/x-python',
                    'text/x-php',
                    'text/x-ruby',
                    'text/x-kotlin',
                    'text/x-go',
                    'text/x-perl',
                    'text/x-swift',
                ],
                langs: [],
                lang: 0,
                result: '',
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
                },
                codeForm:{
                    codeNumber:0,
                    codeContent:''
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
                if (this.lang == 1) {
                    this.curCode = 'public class Hello {\n' +
                        '  public static void main(String[] args){\n' +
                        '\n' +
                        '  }\n' +
                        '}'
                } else {
                    this.curCode = ''
                }

                this.cmOptions.mode = this.modes[this.lang]
            },
            runCodeData() {
                if (this.lang > 0) {

                    this.codeForm.codeNumber=this.lang
                    this.codeForm.codeContent=this.curCode

                    runCode(this.codeForm).then(res => {
                        let {code, data} = res
                        if (code === ERR_OK) {
                            this.result = data
                        }
                    })
                } else {
                    this.result = this.curCode;
                }
            },
        }
    }

</script>

<style scope>

    .code {

    }

    .button-run {
        color: #ffffff;
        background-color: #5cb85c;
        margin-left: 10px
    }

    .result {
        height: 600px;
        background-color: white;
        color: #1c1f21;
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
