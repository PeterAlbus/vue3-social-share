# vue3-social-share

作者：PeterAlbus

@Author PeterAlbus

联系邮箱：wuhongdb@163.com

## 协议及开源库使用

MIT License

网页二维码的生成使用'qrcodejs2'([qrcodejs2 - npm (npmjs.com)](https://www.npmjs.com/package/qrcodejs2))
在0.1.4后修改为了'qrcode.vue'，对vite也拥有了支持

0.1.7进行了优化，使得传入的参数会自动进行url编码

分享栏的图标参考share.js——[overtrue/share.js (github.com)](https://github.com/overtrue/share.js)

## 简介

**使用该组件需要Vue版本 > 3.2, Vue2用户可使用vue-social-share**

使用本组件可以快速获得一个分享栏用于分享当前页面

![image-20220123125719460](https://file.peteralbus.com/assets/blog/imgs/blogimg/image-20220123125719460.png)

没什么技术含量，使用TypeScript编写。

如果有高度定制需求可以自己写，原理就是打开这些软件提供的分享链接。

支持：QQ、微博、微信、QQ空间、豆瓣、领英、点点、Facebook、推特、谷歌+

## 快速开始

#### 安装

```bash
npm i vue3-social-share -S
```

#### 引入

全局引入，在main.js中

```js
import PeterAlbusVue from 'vue3-social-share';
import 'vue3-social-share/lib/index.css'
```

或按组件单个引用(实际上本库仅有一个组件)，在`.vue`文件中

```vue
<script>
import {Share} from 'vue3-social-share';
import 'vue3-social-share/lib/index.css'
    
export default{
    name:'viewName',
    component:{
        Share
    }
}
</script>
```

#### 使用

```vue
<templete>
    <Share></Share>
</templete>
```

或带上参数

```vue
<templete>
    <Share
		:url="baseUrl+blog.blogId"
		:title="blog.blogTitle"
		source="modifySource"
		:description="blog.blogDescription"
		:image="blog.blogImg"
		:twitter="true"
		:google="true"
	></Share>
</templete>
```

## Props 参数列表

| prop        | 作用                       | 默认值           | 类型    |
| ----------- | -------------------------- | ---------------- | ------- |
| url         | 分享出去的网页链接         | `location.href`  | String  |
| source      | 来源                       | 空               | String  |
| origin      | 网站地址                   | `location.orgin` | String  |
| title       | 分享标题                   | `document.title` | String  |
| description | 分享描述                   | 空               | String  |
| image       | 图片url                    | 空               | String  |
| QQ          | 是否显示QQ的分享图标       | true             | Boolean |
| weibo       | 是否显示新浪微博的分享图标 | true             | Boolean |
| weChat      | 是否显示微信的分享图标     | true             | Boolean |
| douban      | 是否显示豆瓣的分享图标     | false            | Boolean |
| QZone       | 是否显示QQ空间的分享图标   | true             | Boolean |
| linkedin    | 是否显示领英的分享图标     | false            | Boolean |
| diandian    | 是否显示点点的分享图标     | false            | Boolean |
| facebook    | 是否显示脸书的分享图标     | false            | Boolean |
| twitter     | 是否显示推特的分享图标     | false            | Boolean |
| google      | 是否显示Google+的分享图标  | false            | Boolean |

