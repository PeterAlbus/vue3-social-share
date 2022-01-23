<template>
  <div class="social-share">
    <a class="social-share-icon icon-weibo" v-if="weibo" style='cursor: pointer' v-on:click="shareWeibo"></a>
    <a class="social-share-icon icon-qq" v-if="QQ" style='cursor: pointer' @click="shareQQ"></a>
    <a class="social-share-icon icon-wechat" v-if="weChat" style='cursor: pointer' v-on:mouseover="shareWeChat">
            <div class="wechat-qrcode">
              <h4>二维码</h4>
              <div class="qrcode" ref="qrcode"></div>
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
import QRCode from 'qrcodejs2'
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
  name: "Share",
  setup(props){
    const shareWeibo = () => {
      window.open("http://service.weibo.com/share/share.php?url="+props.url+"&title="+props.title+"&pic="+props.image+"&appkey=")
    }

    const shareQQ = () => {
      window.open("http://connect.qq.com/widget/shareqq/index.html?url="+props.url+"&title="+props.title+"&source="+props.source+"&desc="+props.description+"&pics="+props.image)
    }

    const shareWeChat = () => {
      QrCode()
    }

    const shareDouban = () => {
      window.open("http://shuo.douban.com/!service/share?href="+props.url+"&name="+props.title+"&text="+props.description+"&image="+props.image+"&starid=0&aid=0&style=11")
    }

    const shareQZone = () => {
      window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+props.url+"&title="+props.title+"&desc"+props.description+"&summary="+props.description+"&site="+props.source+"&pics="+props.image)
    }

    const shareLinkedin = () => {
      window.open("http://www.linkedin.com/shareArticle?mini=true&amp;ro=true&amp;title="+props.title+"&url="+props.url+"&summary="+props.description+"&source="+props.source+"&armin=armin")
    }

    const shareDianDian = () => {
      window.open("http://www.diandian.com/share?lo="+props.url+"&ti="+props.title+"&type=link")
    }

    const shareFacebook = () => {
      window.open("https://www.facebook.com/sharer/sharer.php?u="+props.url)
    }

    const shareTwitter = () => {
      window.open("https://twitter.com/intent/tweet?text="+props.description+"&url="+props.url+"&via="+props.origin)
    }

    const shareGoogle = () => {
      window.open("https://plus.google.com/share?url="+props.url)
    }

    const qrcode=ref()
    let weChatQR: any = null
    const QrCode =() =>{
      if(weChatQR)
      {
        weChatQR.clear()
        weChatQR.makeCode(props.url)
      }
      else
      {
        weChatQR = new QRCode(document.getElementsByClassName('qrcode')[0],{
          width: 100, // 设置宽度，单位像素
          height: 100, // 设置高度，单位像素
          text: props.url // 设置二维码内容或跳转地址
        })
      }
    }
    return {
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
