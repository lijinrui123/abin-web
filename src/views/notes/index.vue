<template>
  <div class="page"  @click="showPanel = false">

    <div class="box">
      <div class="item-box" v-for="item in list" :key="item.id" @click.stop="onLookPanel(item)">
        <span class="item">{{ item.name }}</span>
      </div>
    </div>

    <div class="popup" v-if="showPanel" @click.stop>
      <h3>{{  activeDocs.name }}</h3>
      <p>官方文档</p>
      <a :href="link1.link" target="_blank" v-for="link1 in activeDocs.official" :key="link1.link">{{  link1.name }}</a>
      <p v-if="activeDocs.others.length">相关文档</p>
      <a :href="link2.link" target="_blank" v-for="link2 in activeDocs.others" :key="link2.link">{{  link2.name }}</a>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";

const list = ref([
{
    id: 'jquery',
    name: 'jquery',
    official: [{
      link: 'https://www.w3school.com.cn/jquery/index.asp',
      name: 'jQuery w3school教程'
    }],
    others: [{
      link: 'http://hemin.cn/jq/',
      name: 'jQuery 1.12.1 API速查表'
    }]
},{
    id: 'canvas',
    name: 'canvas',
    official: [{
      link: 'https://www.w3school.com.cn/tags/html_ref_canvas.asp',
      name: 'HTML Canvas 参考手册(w3school)'
    }],
    others: [{
      link: 'https://www.runoob.com/w3cnote/html5-canvas-intro.html',
      name: '学习 HTML5 Canvas 这一篇文章就够了'
    }]
},{
    id: 'vite',
    name: 'vite',
    official: [{
      link: 'https://cn.vitejs.dev/config/',
      name: 'vite官方中文文档'
    }],
    others: []
},{
    id: 'anime.js',
    name: 'anime.js',
    official: [{
      link: 'http://blog.fer-link.com/demo/20220915111146/index2.html',
      name: 'anime.js 中文文档'
    },{
      link: 'https://github.com/juliangarnier/anime',
      name: 'github'
    }],
    others: []
},{
    id: 'unocss',
    name: 'unocss',
    official: [{
      link: 'https://unocss.dev/integrations/vite',
      name: 'https://unocss.dev/integrations/vite'
    }],
    others: [{
      link: 'https://juejin.cn/post/7129153610855743525',
      name: '新一代原子化引擎 unocss'
    },{
      link: 'https://juejin.cn/post/7161967494905724942#heading-17',
      name: '原子化CSS引擎UnoCSS'
    }]
},{
    id: '腾讯云trtc',
    name: '腾讯云trtc',
    official: [{
      link: 'https://cloud.tencent.com/document/product/647/17249',
      name: '腾讯云trtc web端API文档'
    }],
    others: []
},])



const mode = ref(0)
const onChangeMode = () => {
  mode.value = mode.value == 0?1:0
}

const activeDocs = ref({})
const showPanel = ref(false)
const onLookPanel = (item) => {
  showPanel.value = false
  nextTick(() =>{
    showPanel.value = true
  })
  activeDocs.value = item
}
</script>

<style lang="scss" scoped>
.page {
  margin: 0 auto;
  position: relative;
  max-width: 1250px;
  font-size: 20px;
}
.box {
  width: 1080px;
  min-height: 80vh;
  padding: 16px;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 20px;
  background-color: $--color-box;
}

.item-box{
  width: 120px;
}
.item {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 18px;
  color: #333333;
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}

.item:focus,
.item:hover {
  color: #1e80ff;
}

.item:focus:after,
.item:hover:after {
  width: 100%;
  left: 0%;
}
.item:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: black;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}


.popup{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 500px;
  max-width: 80vw;
  height: fit-content;
  padding: 12px;
  min-height: 200px;
  border-radius: 8px;
  background-color: rgba(106, 123, 252, 0.13);
  border: 2px solid rgb(125, 140, 255);
  animation: popup .4s ease-out  forwards;
  transform-origin: center center;
  h3{
    text-align: center;
    margin-bottom: 8px;
  }
  p{
    font-size: 18px;
    font-weight: bold;
  }
  p:nth-of-type(2){
    margin-top: 20px;
  }
  a{
    display: block;
    font-size: 15px;
    margin: 6px 0;
  }
}
@keyframes popup {
  from{
    transform: translate(-50%,-50%) scaleX(0);
  }
  75%{
    transform: translate(-50%,-50%) scaleX(1);
  }
}

@media (max-width: 480px) {
  .box{
    margin-top: 12px;
    padding: 12px 0;
  }
}
</style>