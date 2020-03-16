import axios from 'utils/axios.js'

//获取所支持的语言
export function getLang() {
    return axios('/mock/ide/lang.json')
}
