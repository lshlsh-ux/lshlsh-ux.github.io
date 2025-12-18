// 引入Vitepress默认主题
import DefaultTheme from 'vitepress/theme'
// 引入自定义组件
import MyCard from '../components/MyCard.vue'
import GiscusComment from '../components/GiscusComment.vue'
// 引入自定义样式文件（新增这行）
import './custom.css'

// 导出自定义主题配置
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyCard', MyCard)
    app.component('GiscusComment', GiscusComment)
  }
}