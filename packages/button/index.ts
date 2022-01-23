import { App } from 'vue'
import Button from './src/button.vue'

// 定义 install 方法， App 作为参数
Button.install = (app: App): void => {
    app.component(Button.name, Button)
}

export default Button
