<template>
  <div class="box">
    <a class="game-item" target="_blank" href="https://bruno-simon.com/">
      <img src="http://www.cxy521.com/static/img/index/relax/simon.png" alt="" class="game-logo">
      <div class="game-info">
        <div class="game-title">网页开车</div>
        <div class="game-desc">控制模拟的遥控车在地图上随意行驶，十分解压</div>
      </div>
    </a>
    <a class="game-item" target="_blank" href="https://fishpi.cn/">
      <img src="http://www.cxy521.com/static/img/index/relax/mp.png" alt="" class="game-logo">
      <div class="game-info">
        <div class="game-title">摸鱼派</div>
        <div class="game-desc">一个以程序员,设计师和极客为核心的社区</div>
      </div>
    </a>
    <a class="game-item" target="_blank" href="https://strobe.cool/">
      <img src="http://www.cxy521.com/static/img/index/relax/strobe.ico" alt="" class="game-logo">
      <div class="game-info">
        <div class="game-title">扭曲世界</div>
        <div class="game-desc">你周围的世界会改变形状，显得扭曲和变形。</div>
      </div>
    </a>
    <a class="game-item" target="_blank" href="https://adarkroom.doublespeakgames.com/?lang=zh_cn">
      <img src="http://www.cxy521.com/static/img/index/relax/adr.png" alt="" class="game-logo">
      <div class="game-info">
        <div class="game-title">暗室</div>
        <div class="game-desc">适用于浏览器的极简文字冒险游戏</div>
      </div>
    </a>
    <a class="game-item" target="_blank" href="https://adarkroom.doublespeakgames.com/?lang=zh_cn">
      <img src="http://www.cxy521.com/static/img/index/relax/fwebhek.ico" alt="" class="game-logo">
      <div class="game-info">
        <div class="game-title">神笔马良</div>
        <div class="game-desc">小人历险记-创作型游戏 </div>
      </div>
    </a>
    <a class="game-item" target="_blank" href="https://zoom.earth/">
      <img src="http://www.cxy521.com/static/img/index/relax/earth.ico" alt="" class="game-logo">
      <div class="game-info">
        <div class="game-title">地球卫星</div>
        <div class="game-desc">通过地图来检测区域天气、地形</div>
      </div>
    </a>
    <a class="game-item" target="_blank" href="https://bellwoods.xyz/">
      <img src="http://www.cxy521.com/static/img/index/relax/bellwoods.png" alt="" class="game-logo">
      <div class="game-info">
        <div class="game-title">在线放风筝</div>
        <div class="game-desc">移动鼠标可以让风筝飞翔，伴随着音乐</div>
      </div>
    </a>
    <a class="game-item" target="_blank" href="https://www.autopiano.cn/">
      <img src="https://www.autopiano.cn/favicon.ico" alt="" class="game-logo">
      <div class="game-info">
        <div class="game-title">线上钢琴</div>
        <div class="game-desc">在网页上谈钢琴，也可以根据曲子演奏</div>
      </div>
    </a>
    <a class="game-item" target="_blank" href="http://www.staggeringbeauty.com/">
      <img src="http://www.cxy521.com/static/img/index/relax/yaoyao.png" alt="" class="game-logo">
      <div class="game-info">
        <div class="game-title">魔性摇摇乐</div>
        <div class="game-desc">魔性解压网站，急速晃动还会闪亮你的眼</div>
      </div>
    </a>
    <a class="game-item" target="_blank" href="http://www.staggeringbeauty.com/">
      <img src="https://gate.ofo.moe/social/32x32.png" alt="" class="game-logo">
      <div class="game-info">
        <div class="game-title">任意门</div>
        <div class="game-desc">开启一次未知之旅，这里总有一个属于你的宝站！</div>
      </div>
    </a>
    <a class="game-item" target="_blank" href="https://oreo.ddiu.me/">
      <img src="https://oreo.ddiu.me/favicon.ico" alt="" class="game-logo">
      <div class="game-info">
        <div class="game-title">奥利奥生成器</div>
        <div class="game-desc">无敌沙雕好玩的奥利奥图片生成器</div>
      </div>
    </a>
  </div>

  <div id="jsi-flying-fish-container"></div>
</template>


<script setup>
import $ from 'jquery'
import { onMounted } from 'vue';

onMounted(() => {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://web-abin.gitee.io/abin-web/js/fish.js'
  document.body.appendChild(script);
})


const isLocal = location.hostname === 'localhost'
</script>

<style lang="scss" scoped>
.game-item {
  width: 224px;
  height: 95px;
  padding: 10px;
  margin: 12px 0 0 12px;
  border: 1px solid #e4ecf3;
  box-shadow: 1px 2px 3px #f2f6f8;
  border-radius: 6px;
  background: #fff;
  overflow: hidden;
  transition: all .3s;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    background: #f2f8fd;
  }

  .game-logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    margin-right: 10px;
  }

  .game-info {
    flex: 1;

    .game-title {
      font-size: 14px;
      font-weight: 700;
      color: #3273dc;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 0.1rem;
    }

    .game-desc {
      color: gray;
      font-size: 12px;
      height: 30px;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-top: 5px;
    }
  }
}</style>