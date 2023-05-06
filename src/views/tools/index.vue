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
      <section v-for="(tool, index) in list">
        <header :id="tool.id">{{ tool.name }}</header>
        <a target="_blank" class="tool-item" v-for="link in tool.collection" :key="link.link" :href="link.link"
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
import icon2 from "@/assets/icons/icon2.png";

const list = ref([
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
      },
      {
        icon: 'https://static.clewm.net/static/images/favicon.ico',
        name: '草料二维码',
        link: 'https://cli.im/'
      },
      {
        icon: 'https://www.hlcode.cn/favicon.ico',
        name: '互联二维码',
        link: 'https://www.hlcode.cn/'
      },
      {
        icon: 'http://www.jsons.cn/favicon.ico',
        name: '正则表达式测试',
        link: 'http://www.jsons.cn/reg/'
      },
      {
        icon: 'https://any86.github.io/any-rule/icon.png',
        name: '正则大全',
        link: 'https://any86.github.io/any-rule/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/tool/convertio.ico',
        name: '文件格式转换',
        link: 'https://convertio.co/zh/'
      },
      {
        icon: 'https://www.aconvert.com/favicon.ico',
        name: '文件格式转换',
        link: 'https://www.aconvert.com/cn/audio/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/tool/zf.png',
        name: '中文简繁体转换',
        link: 'https://tool.lu/zhconvert'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/resources/wd.ico',
        name: '字数统计',
        link: 'https://www.eteste.com/'
      },
      {
        icon: 'http://www.cxy521.com/static/img/index/tool/epochConverter.jpg',
        name: '时间戳转换',
        link: 'https://www.epochconverter.com/'
      },
      {
        icon: 'https://datav.aliyun.com/favicon.ico',
        name: '阿里云地图',
        link: 'https://datav.aliyun.com/portal/school/atlas/area_selector'
      },
    ]
  },
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
        icon: 'https://c.runoob.com/more/svgeditor/images/favicon.svg',
        name: 'SVG编辑器',
        link: 'https://c.runoob.com/more/svgeditor/'
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
    id: 'css',
    name: 'css工具',
    collection: [
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAY1BMVEX///8AAADr+fr////1/PwAqrsAprgKrr5hy9XU8fQUssH0+/xQxdEitsUwusg/v8zE7PAds8P////p+Pqw5eqp4+mN2eH3/P2h4OeQ2+I2vMra8/a86e2b3uRrzthKw89Ewc0z3iepAAAABXRSTlPwAO/g70YqzXQAAADSSURBVDjLhdNLbsMwDARQuqlGjqiv/3HaJPc/ZWUHBYwWpGdH8GGkDak5CTUXog8hn0QXaohbKyQMHVVwgxEC12+g/QVHCOzT9QicL+4da12Myf4F6/h4+pqXnzLPfP8HbHmXr7kf2hjc8YljJl7K/gMBLLPftwLAyLGOIsCjq3sZIHbboDTkEUYB8BxUYO8TjALQsjMKqNMNGkDioINhhFEAAq86+P6C0UDgpIJaYIKVAdKc/BJkEPucXk+5AVMuBtofit22MhBzPb+s09s8ve4fJkoXyynCJe4AAAAASUVORK5CYII=',
        name: '贝塞尔曲线',
        link: 'https://cubic-bezier.com/#.17,.67,.83,.67'
      },
      {
        icon: 'https://www.bezier-curve.com/favicon.ico',
        name: '贝塞尔曲线',
        link: 'https://www.bezier-curve.com/'
      },
      {
        icon: '	https://cssgradient.io/images/favicon-23859487.png',
        name: 'css渐变色',
        link: 'https://cssgradient.io/'
      },
      {
        icon: 'https://shadows.brumm.af/favicon.svg',
        name: 'css阴影',
        link: 'https://shadows.brumm.af/'
      },
      {
        icon: 'http://tools.jb51.net/favicon.ico',
        name: '在线clip-path',
        link: 'http://tools.jb51.net/code/css3path'
      },
      {
        icon: '	https://cssgrid-generator.netlify.app/favicon.ico',
        name: 'Grid网格布局',
        link: 'https://cssgrid-generator.netlify.app/'
      },
      {
        icon: '	https://animxyz.com/assets/static/animxyz-logo.ce0531f.39f3bde368e480505b70778acaa2ac74.png',
        name: 'animxyz',
        link: 'https://animxyz.com/'
      },
      {
        icon: 'https://getwaves.io/favicon-32x32.png',
        name: 'svg波浪生成器',
        link: 'https://getwaves.io/'
      },
    ]
  },
  {
    id: 'cool',
    name: '炫酷动效',
    collection: [
      {
        icon: '	https://whirl.netlify.app/favicon.ico',
        name: 'whirl加载动效',
        link: 'https://whirl.netlify.app/'
      },
      {
        icon: 'https://uiverse.io/favicon-32x32.png',
        name: 'uiverse按钮',
        link: 'https://uiverse.io/buttons'
      },
      {
        icon: 'https://www.handsome-css.com/favicon/favicon.ico',
        name: 'AwA-UI小组件',
        link: 'https://www.handsome-css.com/buttons'
      },
      {
        icon: 'http://www.bootstrapmb.com/content/images/fav.png',
        name: 'css动画',
        link: 'http://www.bootstrapmb.com/tag/cssdonghua'
      },
      {
        icon: icon2,
        name: 'CSS Tricks',
        link: 'https://qishaoxuan.github.io/css_tricks/'
      },

      
    ]
  },
  {
    id: '图标',
    name: '图标',
    collection: [
      {
        icon: 'https://img.alicdn.com/imgextra/i2/O1CN01ZyAlrn1MwaMhqz36G_!!6000000001499-73-tps-64-64.ico',
        name: 'iconfont',
        link: 'https://www.iconfont.cn/'
      },
      {
        icon: 'https://unpkg.byted-static.com/byted/arco-config/1.0.9/assets/icon-box.ico',
        name: 'iconBox',
        link: 'https://arco.design/iconbox/libs'
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        name: 'iconPark',
        link: 'https://iconpark.oceanengine.com/official'
      },
      {
        icon: 'https://iconsvg.xyz/favicon-32.png',
        name: '自定义icon',
        link: 'https://iconsvg.xyz/'
      },
      {
        icon: '	https://www.fonts.net.cn/favicon.ico',
        name: '字体天下',
        link: 'https://www.fonts.net.cn/'
      },
      {
        icon: '	https://www.googlefonts.cn/Public/google/zh-cn/gstatic/google_fonts_lodp.ico',
        name: '字体下载',
        link: 'https://www.emojiall.com/zh-hans'
      },
      {
        icon: '	https://www.emojiall.com/favicon.ico',
        name: 'emojiall',
        link: 'https://www.emojiall.com/zh-hans'
      },
      {
        icon: 'https://www.webfx.com/wp-content/uploads/2023/05/icon-ux.svg',
        name: 'md-emoji',
        link: 'https://www.webfx.com/tools/emoji-cheat-sheet/'
      }
    ]
  },
  {
    id: 'chrome',
    name: 'Chrome插件',
    collection: [
      {
        icon: 'http://www.cxy521.com/static/img/index/chrome/onetab.jpg',
        name: 'OneTab标签管理',
        link: 'https://chrome.google.com/webstore/category/extensions?hl=zh-CN'
      }
    ]
  },
  {
    id: 'vscode',
    name: 'vscode插件',
    collection: [
      {
        icon: 'https://techer.gallerycdn.vsassets.io/extensions/techer/open-in-browser/2.0.0/1534049617896/Microsoft.VisualStudio.Services.Icons.Default',
        name: 'open in browser',
        link: 'https://code.visualstudio.com/'
      }
    ]
  },
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
  max-width: 1300px;
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
    align-content: flex-start;
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

@media (max-width: 480px) {
  .navigation-tools {
    display: none;
    // top: 0;
    // dl{
    //   display: flex;
    // }
  }
  .box{
    // margin-top: 100px;
    section{
      padding: 58px 16px 16px 16px;
      header{
        padding: 0 16px;
      }
      .tool-item{
        width: 140px;
      }
    }
  }
}
</style>