<template>
  <div class="social-share">
    <a class="social-share-icon icon-weibo" v-if="weibo" style='cursor: pointer' v-on:click="shareWeibo"></a>
    <a class="social-share-icon icon-qq" v-if="QQ" style='cursor: pointer' @click="shareQQ"></a>
    <a class="social-share-icon icon-wechat" v-if="weChat" style='cursor: pointer' v-on:mouseover="shareWeChat">
            <div class="wechat-qrcode">
              <h4>二维码</h4>
              <qrcode-vue :value="url" :size="120" level="H" style="margin: 5px"/>
              <div class="help">扫描二维码，点击右上角分享</div>
            </div>
    </a>
    <a class="social-share-icon icon-douban" v-if="douban" style='cursor: pointer' @click="shareDouban"></a>
    <a class="social-share-icon icon-qzone" v-if="QZone" style='cursor: pointer' @click="shareQZone"></a>
    <a class="social-share-icon icon-linkedin" v-if="linkedin" style='cursor: pointer' @click="shareLinkedin"></a>
    <a class="social-share-icon icon-diandian" v-if="diandian" style='cursor: pointer' @click="shareDianDian"></a>
    <a class="social-share-icon icon-facebook" v-if="facebook" style='cursor: pointer' @click="shareFacebook"></a>
    <a class="social-share-icon icon-twitter" v-if="twitter" style='cursor: pointer' @click="shareTwitter"></a>
    <a class="social-share-icon icon-google" v-if="google" style='cursor: pointer' @click="shareGoogle"></a>
  </div>
</template>



<script lang="ts">
import { defineComponent,ref } from 'vue'
import QrcodeVue from 'qrcode.vue'
export default defineComponent({
  props:{
    QQ: {type:Boolean, default:true},
    weibo: {type:Boolean, default:true},
    weChat: {type:Boolean, default:true},
    douban: {type:Boolean, default:false},
    QZone: {type:Boolean, default:true},
    linkedin: {type:Boolean, default:false},
    diandian: {type:Boolean, default:false},
    facebook: {type:Boolean, default:false},
    twitter: {type:Boolean, default:false},
    google: {type:Boolean, default:false},
    url: {type:String, default:window.location.href},
    source: {type:String, default:''},
    origin: {type:String, default:window.location.origin},
    title: {type:String, default:document.title},
    description: {type:String, default:''},
    image: {type:String,default:''}
  },
  components: {
    QrcodeVue
  },
  name: "Share",
  setup(props){
    const shareWeibo = () => {
      window.open("http://service.weibo.com/share/share.php?url="+encodeURIComponent(props.url)+"&title="+encodeURIComponent(props.title)+"&pic="+encodeURIComponent(props.image)+"&appkey=")
    }

    const shareQQ = () => {
      window.open("http://connect.qq.com/widget/shareqq/index.html?url="+encodeURIComponent(props.url)+"&title="+encodeURIComponent(props.title)+"&source="+encodeURIComponent(props.source)+"&desc="+encodeURIComponent(props.description)+"&pics="+encodeURIComponent(props.image))
    }

    const shareWeChat = () => {
      QrCode()
    }

    const shareDouban = () => {
      window.open("http://shuo.douban.com/!service/share?href="+encodeURIComponent(props.url)+"&name="+encodeURIComponent(props.title)+"&text="+encodeURIComponent(props.description)+"&image="+encodeURIComponent(props.image)+"&starid=0&aid=0&style=11")
    }

    const shareQZone = () => {
      window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+encodeURIComponent(props.url)+"&title="+encodeURIComponent(props.title)+"&desc"+encodeURIComponent(props.description)+"&summary="+encodeURIComponent(props.description)+"&site="+encodeURIComponent(props.source)+"&pics="+encodeURIComponent(props.image))
    }

    const shareLinkedin = () => {
      window.open("http://www.linkedin.com/shareArticle?mini=true&amp;ro=true&amp;title="+encodeURIComponent(props.title)+"&url="+encodeURIComponent(props.url)+"&summary="+encodeURIComponent(props.description)+"&source="+encodeURIComponent(props.source)+"&armin=armin")
    }

    const shareDianDian = () => {
      window.open("http://www.diandian.com/share?lo="+encodeURIComponent(props.url)+"&ti="+encodeURIComponent(props.title)+"&type=link")
    }

    const shareFacebook = () => {
      window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(props.url))
    }

    const shareTwitter = () => {
      window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(props.description)+"&url="+encodeURIComponent(props.url)+"&via="+encodeURIComponent(props.origin))
    }

    const shareGoogle = () => {
      window.open("https://plus.google.com/share?url="+encodeURIComponent(props.url))
    }

    const qrcode=ref()
    const url=ref('')
    let weChatQR: any = null
    const QrCode =() =>{
      url.value=props.url
    }
    return {
      url,
      shareWeibo,
      shareQQ,
      shareWeChat,
      shareDouban,
      shareQZone,
      shareLinkedin,
      shareDianDian,
      shareFacebook,
      shareTwitter,
      shareGoogle
    }
  }
})
</script>

<style scoped>
</style>
