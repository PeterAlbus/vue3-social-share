import { App } from 'vue'
import Share from './src/Share.vue'
import './src/assets/css/share.min.css'

// 定义 install 方法， App 作为参数
Share.install = (app: App): void => {
    app.component(Share.name, Share)
}

export default Share
