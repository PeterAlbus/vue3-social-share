const path = require('path')

module.exports = {
    // 修改 pages 入口
    pages: {
        index: {
            entry: "examples/main.ts", //入口
            template: "public/index.html", //模板
            filename: "index.html" //输出文件
        }
    },
    // 扩展 webpack 配置
    chainWebpack: (config) => {
        // 新增一个 ~ 指向 packages 目录, 方便示例代码中使用
        config.resolve.alias
            .set('~', path.resolve('packages'))
    }
}
