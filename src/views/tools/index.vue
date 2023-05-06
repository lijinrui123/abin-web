<template>
  <div class="page">
    <div class="navigation-tools">
      <dl>
        <dd
          v-for="(nav, navindex) in list"
          :id="navindex"
          :class="{ nav_active: navindex == curIndex }"
        >
          <a :href="`#${nav.id}`" @click="toNav(navindex)">{{ nav.name }}</a>
        </dd>
      </dl>
    </div>
    <div class="box">
      <section v-for="(tool, index) in list" :id="tool.id">
        <header>{{ tool.name }}</header>
        <a target="_blank" :href="tool.link" class="tool-item" v-for="link in tool.collection" :key="link.link"
          ><img :data-src="link.icon" alt="" :src="link.icon" />
          <span class="tool-name">{{ link.name }}</span></a
        >
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import icon1 from "@/assets/icons/icon1.png";

const list = ref([
  {
    id: 'img',
    name: '图片处理',
    collection: [
      {
        icon: 'https://tinypng.com/images/favicon.ico',
        name: '图片压缩',
        link: 'https://tinypng.com/'
      },
      {
        icon: 'https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png',
        name: '生成精灵图',
        link: 'https://www.toptal.com/developers/css/sprite-generator'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/tutieshi.ico',
        name: '视频转GIF',
        link: 'https://www.tutieshi.com/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/51tools.ico',
        name: '在线SVG制作',
        link: 'https://51tools.info/svg/'
      },
      {
        icon: icon1,
        name: '趣作图',
        link: 'https://www.pickwant.com/home'
      },
      {
        icon: 'https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png',
        name: '图片背景消除',
        link: 'https://www.remove.bg/zh'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/iloveimg.png',
        name: '图片在线编辑',
        link: 'https://www.iloveimg.com/zh-cn'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/gaoding.ico',
        name: '在线PS',
        link: 'https://www.uupoop.com/#/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/onlinedo.ico',
        name: '图片加水印',
        link: 'https://www.onlinedo.cn/img-shuiyin'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/apowersoft.ico',
        name: '图片去水印',
        link: 'https://www.apowersoft.cn/image-watermark-remover'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/zuohaotu.ico',
        name: '图片合并切割',
        link: 'http://www.zuohaotu.com/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/ico51.ico',
        name: '生成透明Icon',
        link: 'http://www.ico51.cn/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/designevo.ico',
        name: 'logo设计',
        link: 'https://www.designevo.com/cn/logo-maker/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/zhuang.png',
        name: '搞怪图片生成',
        link: 'https://c.tianhezulin.com/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/fabiaoqing.png',
        name: '表情包',
        link: 'https://www.fabiaoqing.com/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/biaoqingbao.ico',
        name: '表情包制作器',
        link: 'https://www.wakatool.com/maker'
      },
      {
        icon: '	http://www.cxy521.com/static/img/index/image/photomosh.ico',
        name: '朋克图片生成器',
        link: 'https://photomosh.com/'
      },
      {
        icon: '	http://www.cxy521.com/static/img/index/image/photomosh.ico',
        name: '朋克图片生成器',
        link: 'https://photomosh.com/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/pexels.ico',
        name: 'Pexels图片素材',
        link: 'https://www.pexels.com/zh-cn/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/pixabay.png',
        name: 'Pixabay图片素材',
        link: 'https://pixabay.com/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/image/pxhere.png',
        name: 'Pxhere图片素材',
        link: 'https://pxhere.com/'
      },
    ]
  },
  {
    id: 'often',
    name: '常用工具',
    collection: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        name: '兼容性查询',
        link: 'https://caniuse.com/'
      },
      {
        icon: 'https://www.bootcdn.cn/assets/ico/favicon.ico?1644166305141',
        name: 'BootCDN',
        link: 'https://www.bootcdn.cn/'
      }
    ]
  }
])

const curIndex = ref(0)
const toNav = (index) => {
  curIndex.value = index
}
</script>

<style lang="scss" scoped>
.page {
  margin: 0 auto;
  position: relative;
  max-width: 1260px;
}
.navigation-tools {
  position: fixed;
  width: fit-content;
  height: 300px;
  max-height: calc(100% - 110px);
  padding: 8px 0;
  box-sizing: border-box;
  transition: all 0.2s linear;
  overflow: auto;
  dd {
    margin: 0;
    padding: 6px 0;
    letter-spacing: 0.5px;
    a {
      font-size: 14px;
      color: #5e5d5b;
      display: inline-block;
      padding: 2px 4px;
      transition: 0.1s;
      text-decoration: none;
      &:hover {
        background: #ff5a00;
        border-radius: 3px;
      }
    }
  }
  .nav_active {
    a {
      color: #ff5a00;
      background: transparent !important;
    }
  }
}
.box {
  width: 1080px;
  min-height: 800px;
  margin: 0 auto;
  section {
    position: relative;
    width: 100%;
    min-height: 166px;
    padding: 42px 48px 10px 48px;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    background-color: $--color-box;
    header {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      line-height: 42px;
      font-size: 15px;
      padding-left: 46px;
      font-weight: 600;
      flex-shrink: 0;
      border-bottom: 0.5px solid $--color-border;
    }
    .tool-item {
      width: 164px;
      height: 42px;
      flex-shrink: 0;
      line-height: 42px;
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
        margin-right: 5px;
        vertical-align: middle;
      }
      .tool-name {
        font-size: 14px;
        color: $--color-text;
        vertical-align: middle;
      }
    }
  }
}
</style>