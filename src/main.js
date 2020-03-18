import Vue from 'vue'
import App from './App.vue'
import router from 'router/index.js'
import store from './store/index.js'

// element-ui
import {
  Icon,
  Table,
  TableColumn,
  Form,
  FormItem,
  Input,
  Checkbox,
  MessageBox,
  Pagination,
  Dialog,
  Menu,
  Submenu,
  MenuItem,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Image,
  Avatar,
  Select,
  Option,
  Button,
  Link,
  Row,
  Col,
  Card,
} from 'element-ui'



Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(Link)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Avatar)
Vue.use(Image)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Autocomplete)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Icon)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Checkbox)
Vue.use(Pagination)
Vue.use(Dialog)

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;

// register custom base component
import Mooc from './register.js'
import 'assets/theme/index.styl'
Vue.use(Mooc)


// 代码插件
import 'assets/stylus/index.styl'

import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodeMirror)


// 显示效果插件
import VueAppend from 'vue-append'
Vue.use(VueAppend)


// 播放视频插件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
