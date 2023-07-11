<template>
  <div class="page">
    <div class="navigation-tools">
      <dl>
        <dd
          v-for="(nav, navindex) in list"
          :key="navindex"
          :id="navindex"
          :class="{ nav_active: navindex == curIndex }"
        >
          <a :href="`#${nav.id}`" @click="toNav(navindex)">{{ nav.name }}</a>
        </dd>
      </dl>
    </div>
    <div class="tools-box">
      <section v-for="(tool, index) in list" :key="index">
        <span :id="tool.id" class="point"></span>
        <header>{{ tool.name }}</header>
        <a target="_blank" class="tool-item" v-for="link in tool.collection" :key="link.link" :href="link.link"
          ><img :data-src="link.icon" alt="" :src="link.icon" />
          <span class="tool-name">{{ link.name }}</span></a
        >
      </section>
    </div>

    <Notice>⛅ 本站已使用 nuxt3 重构~<br>
      💥 即日起，本站将不再更新内容!!!<br>
      💌 建议改换使用新站哦～见谅～
      <br><br>
      🎁 新站地址 ---- <a target="_blank" href="https://web-abin.github.io/abinWeb/" style="color: #3370ff;text-decoration: underline;">https://web-abin.github.io/abinWeb/</a>
    </Notice>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Notice from "@/components/Notice/index.vue";

//动态加载图片
const getAssetsFile = (name) => {
  return new URL(`../../assets/icons/${name}.png`, import.meta.url).href
}

const list = ref([
{
    id: 'often',
    name: '常用工具',
    collection: [
      {
        "icon": "https://github.githubassets.com/favicons/favicon.svg",
        "name": "Github Trending",
        "link": "https://github.com/trending"
      },
      {
        "icon": getAssetsFile('56'),
        "name": "json在线解析",
        "link": "https://www.sojson.com/"
      },
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
        icon: getAssetsFile('15'),
        name: '正则表达式测试',
        link: 'http://www.jsons.cn/reg/'
      },
      {
        icon: 'https://any86.github.io/any-rule/icon.png',
        name: '正则大全',
        link: 'https://any86.github.io/any-rule/'
      },
      {
        icon: getAssetsFile('16'),
        name: '文件格式转换',
        link: 'https://convertio.co/zh/'
      },
      {
        icon: 'https://www.aconvert.com/favicon.ico',
        name: '文件格式转换',
        link: 'https://www.aconvert.com/cn/audio/'
      },
      {
        icon: getAssetsFile('17'),
        name: '中文简繁体转换',
        link: 'https://tool.lu/zhconvert'
      },
      {
        icon: getAssetsFile('18'),
        name: '字数统计',
        link: 'https://www.eteste.com/'
      },
      {
        icon: getAssetsFile('19'),
        name: '时间戳转换',
        link: 'https://www.epochconverter.com/'
      },
      {
        icon: 'https://datav.aliyun.com/favicon.ico',
        name: '阿里云地图',
        link: 'https://datav.aliyun.com/portal/school/atlas/area_selector'
      },
      {
        icon: 'https://csstools.chinaz.com/favicon.ico',
        name: '站长工具',
        link: 'https://tool.chinaz.com/'
      },
      {
        icon: 'https://app.netlify.com/favicon.ico',
        name: 'netlify网站托管',
        link: 'https://app.netlify.com/'
      },
      {
        icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico',
        name: 'vercel网站托管',
        link: 'https://vercel.com/dashboard'
      },
      {
        "icon": "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
        "name": "微信公众平台",
        "link": "https://mp.weixin.qq.com/"
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
        icon: getAssetsFile('20'),
        name: '视频转GIF',
        link: 'https://www.tutieshi.com/'
      },
      {
        icon: getAssetsFile('21'),
        name: '在线SVG制作',
        link: 'https://51tools.info/svg/'
      },
      {
        icon: 'https://c.runoob.com/more/svgeditor/images/favicon.svg',
        name: 'SVG编辑器',
        link: 'https://c.runoob.com/more/svgeditor/'
      },
      {
        icon: getAssetsFile('1'),
        name: '趣作图',
        link: 'https://www.pickwant.com/home'
      },
      {
        icon: 'https://www.toptal.com/developers/css/sprite-generator/static/images/favicon.png',
        name: '图片背景消除',
        link: 'https://www.remove.bg/zh'
      },
      {
        icon: getAssetsFile('22'),
        name: '图片在线编辑',
        link: 'https://www.iloveimg.com/zh-cn'
      },
      {
        icon: getAssetsFile('23'),
        name: '在线PS',
        link: 'https://www.uupoop.com/#/'
      },
      {
        icon: getAssetsFile('24'),
        name: '图片加水印',
        link: 'https://www.onlinedo.cn/img-shuiyin'
      },
      {
        icon: getAssetsFile('25'),
        name: '图片去水印',
        link: 'https://www.apowersoft.cn/image-watermark-remover'
      },
      {
        icon: getAssetsFile('26'),
        name: '图片合并切割',
        link: 'http://www.zuohaotu.com/'
      },
      {
        icon: getAssetsFile('27'),
        name: '生成透明Icon',
        link: 'http://www.ico51.cn/'
      },
      {
        icon: getAssetsFile('28'),
        name: 'logo设计',
        link: 'https://www.designevo.com/cn/logo-maker/'
      },
      {
        icon: getAssetsFile('29'),
        name: '搞怪图片生成',
        link: 'https://c.tianhezulin.com/'
      },
      {
        icon: getAssetsFile('30'),
        name: '表情包',
        link: 'https://www.fabiaoqing.com/'
      },
      {
        icon: getAssetsFile('31'),
        name: '表情包制作器',
        link: 'https://www.wakatool.com/maker'
      },
      {
        icon: getAssetsFile('32'),
        name: '朋克图片生成器',
        link: 'https://photomosh.com/'
      },
      {
        icon: getAssetsFile('33'),
        name: 'Pexels图片素材',
        link: 'https://www.pexels.com/zh-cn/'
      },
      {
        icon: getAssetsFile('34'),
        name: 'Pixabay图片素材',
        link: 'https://pixabay.com/'
      },
      {
        icon: getAssetsFile('35'),
        name: 'Pxhere图片素材',
        link: 'https://pxhere.com/'
      },
      {
        icon: "https://www.3gbizhi.com/assets/mobile/images/favicon.ico",
        name: "3G壁纸",
        link: "https://www.3gbizhi.com/"
      },
      {
        icon: 'https://huatu.98youxi.com/favicon.ico',
        name: '流程图/思维导图',
        link: 'https://huatu.98youxi.com/home/myfile/'
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
        icon: 'https://static.mybrandnewlogo.com/images/favicon.ico',
        name: '色彩搭配',
        link: 'https://mybrandnewlogo.com/color-palette-generator'
      },
      {
        icon: 'https://s.techbrood.com/themes/techbrood/image/favicon.ico',
        name: 'border-radius',
        link: 'https://wow.techbrood.com/fiddle/40829'
      },
      {
        icon: 'https://shadows.brumm.af/favicon.svg',
        name: 'css阴影',
        link: 'https://shadows.brumm.af/'
      },
      {
        icon: 'https://box-shadow.art/wp-content/uploads/2021/10/logo-icon-150x150.png',
        name: 'box-shadow案例',
        link: 'https://box-shadow.art/'
      },
      {
        icon: getAssetsFile('36'),
        name: '在线clip-path',
        link: 'http://tools.jb51.net/code/css3path'
      },
      {
        icon: '	https://cssgrid-generator.netlify.app/favicon.ico',
        name: 'Grid网格布局',
        link: 'https://cssgrid-generator.netlify.app/'
      },
      {
        icon: 'https://layout.bradwoods.io/favicon.ico',
        name: '布局生成器',
        link: 'https://layout.bradwoods.io/'
      },
      {
        icon: '	https://animxyz.com/assets/static/animxyz-logo.ce0531f.39f3bde368e480505b70778acaa2ac74.png',
        name: 'animxyz',
        link: 'https://animxyz.com/'
      },
      {
        icon: 'https://www.transition.style/favicon.png',
        name: '过渡动画',
        link: 'https://www.transition.style/'
      },
      {
        icon: 'https://getwaves.io/favicon-32x32.png',
        name: 'svg波浪生成器',
        link: 'https://getwaves.io/'
      },
      {
        icon: 'https://img2.baidu.com/it/u=3541918504,2197745291&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=287',
        name: 'svg生成器',
        link: 'https://app.haikei.app/'
      }
    ]
  },
  {
    id: 'cool',
    name: 'UI灵感',
    collection: [
      {
        icon: 'https://whirl.netlify.app/favicon.ico',
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
        icon: getAssetsFile('37'),
        name: 'css动画',
        link: 'http://www.bootstrapmb.com/tag/cssdonghua'
      },
      {
        icon: getAssetsFile('2'),
        name: 'CSS Tricks',
        link: 'https://qishaoxuan.github.io/css_tricks/'
      },
      {
        icon: 'https://csscoco.com/inspiration/logo2.png',
        name: 'CSS Inspiration',
        link: 'https://csscoco.com/inspiration/#/'
      },
      {
        icon: 'https://shiroi.netlify.app/favicon.ico',
        name: 'Shiro',
        link: 'https://shiroi.netlify.app/'
      },
      {
        icon: 'https://cssdesignawards.com/images/favicons/favicon.ico',
        name: 'CssDesignAwards',
        link: 'https://cssdesignawards.com/'
      },
      {
        icon: 'https://webdesignclip.com/favicon.ico',
        name: 'WebDesignClip',
        link: 'https://webdesignclip.com/'
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
    id: 'chatGPT',
    name: 'chatGPT',
    collection: [
      {
        "icon": "https://chat.plexpt.com/favicon.svg",
        "name": "智能喵",
        "link": "https://chat.plexpt.com/"
      },
      {
        "icon": getAssetsFile('57'),
        "name": "AIer",
        "link": "https://ai.aging.run/"
      },
      {
        "icon": "https://chat.ktoai.com/favicon.png",
        "name": "糖果梦",
        "link": "https://ai.tgmeng.com/"
      },
      {
        "icon": "https://cdn.aidutu.cn/res/head/ai.png",
        "name": "AiDuTu",
        "link": "https://chat.aidutu.cn/"
      },
      {
        "icon": getAssetsFile('53'),
        "name": "AI EDU",
        "link": "https://ai.aigcfun.com/"
      },
      {
        "icon": getAssetsFile('54'),
        "name": "chatbot",
        "link": "https://chatbot.theb.ai/#/chat"
      }
    ]
  },
  {
    id: 'chrome',
    name: 'Chrome插件',
    collection: [
      {
        icon: getAssetsFile('38'),
        name: 'OneTab标签管理',
        link: 'https://chrome.google.com/webstore/category/extensions?hl=zh-CN'
      },
      {
        icon: getAssetsFile('39'),
        name: '前端助手插件',
        link: 'http://www.itmind.net/1470.html'
      },
      {
        icon: getAssetsFile('40'),
        name: 'Postman网页版',
        link: 'http://www.itmind.net/1334.html'
      },
      {
        icon: 'https://cdn.kjj8.com/images/2021/11/20211638043297-unnamed-6.png',
        name: '请求mock插件',
        link: 'https://www.jianshu.com/p/9278207cdc62'
      },
      {
        icon: 'https://addons.mozilla.org/user-media/addon_icons/1022/1022438-64.png?modified=533cac64',
        name: '跨域代理插件',
        link: 'https://www.0z.gs/webDevelopment/1736.html'
      },
      {
        icon: getAssetsFile('41'),
        name: 'GitHub加速插件',
        link: 'http://www.itmind.net/217.html'
      },
      {
        icon: getAssetsFile('42'),
        name: '视频下载插件',
        link: 'http://www.itmind.net/3092.html'
      },
      {
        icon: getAssetsFile('43'),
        name: 'Vue.js devtools',
        link: 'http://www.itmind.net/6438.html'
      },
      {
        icon: getAssetsFile('51'),
        name: '广告拦截器',
        link: 'https://extfans.com/productivity/bgnkhhnnamicmpeenaelnjfhikgbkllg/'
      },
      {
        icon: getAssetsFile('52'),
        name: '密码管理',
        link: 'https://extfans.com/productivity/hdokiejnpimakedhajhdlcegeplioahd/'
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
        link: 'https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser'
      },
      {
        icon: getAssetsFile('44'),
        name: 'Git Graph',
        link: 'https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph'
      },
      {
        icon: getAssetsFile('45'),
        name: 'GitLens',
        link: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens'
      },
      {
        icon: getAssetsFile('46'),
        name: 'Git History',
        link: 'https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory'
      },
      {
        icon: getAssetsFile('47'),
        name: 'Git Blame',
        link: 'https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame'
      },
      {
        icon: 'https://kisstkondoros.gallerycdn.vsassets.io/extensions/kisstkondoros/vscode-gutter-preview/0.30.0/1644076638771/Microsoft.VisualStudio.Services.Icons.Default',
        name: '图片预览',
        link: 'https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview'
      },
      {
        icon: 'https://cipchk.gallerycdn.vsassets.io/extensions/cipchk/cssrem/3.1.0/1677827217157/Microsoft.VisualStudio.Services.Icons.Default',
        name: 'px to rem/rpx/vw',
        link: 'https://marketplace.visualstudio.com/items?itemName=cipchk.cssrem'
      },
      {
        icon: 'https://chendm.gallerycdn.vsassets.io/extensions/chendm/translate/0.1.0/1631010008171/Microsoft.VisualStudio.Services.Icons.Default',
        name: '生成英文变量名',
        link: 'https://marketplace.visualstudio.com/items?itemName=chendm.translate'
      },
      {
        icon: 'https://formulahendry.gallerycdn.vsassets.io/extensions/formulahendry/auto-close-tag/0.5.14/1644313109985/Microsoft.VisualStudio.Services.Icons.Default',
        name: '自动闭合标签',
        link: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag'
      },
      {
        icon: getAssetsFile('48'),
        name: '代码美化',
        link: 'https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify'
      },
      {
        icon: getAssetsFile('49'),
        name: '代码书签',
        link: 'https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks'
      },
      {
        icon: getAssetsFile('50'),
        name: 'FileSize',
        link: 'https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks'
      },
      {
        icon: getAssetsFile('55'),
        name: 'Markdown预览',
        link: 'https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts'
      },
    ]
  }
])

  // {
  //   id: '更多导航',
  //   name: '更多导航',
  //   collection: [
  //     {
  //       icon: 'https://mp-b28966cb-26bc-43ae-b98b-aa286fad0729.cdn.bspapp.com/cloudstorage/31e91b77-d492-4f27-9ce1-d20ad54ad8e2.ico',
  //       name: '万能导航',
  //       link: 'https://www.5cv.top/'
  //     },
  //     {
  //       icon: 'https://static.runoob.com/images/c-runoob-logo.ico',
  //       name: '菜鸟工具',
  //       link: 'https://c.runoob.com/'
  //     },
  //     {
  //       icon: 'http://www.cxy521.com/static/img/favicon.ico',
  //       name: '程序员导航',
  //       link: 'http://www.cxy521.com/'
  //     },
  //     {
  //       icon: 'https://tool.lu/favicon.ico',
  //       name: '在线工具',
  //       link: 'https://tool.lu/'
  //     }
  //   ]
  // },

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
  height: fit-content;
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
.tools-box {
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
    .point{
      position: absolute;
      left: 0;
      top: -60px;
      opacity: 0;
    }
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
  .tools-box{
    width: unset;
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
