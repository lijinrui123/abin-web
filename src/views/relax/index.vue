<template>
  <div class="box">
    <a class="game-item" target="_blank" href="https://bruno-simon.com/">
      <img src="http://www.cxy521.com/static/img/index/relax/simon.png" alt="" class="game-logo">
      <div class="game-info">
        <div class="game-title">网页开车</div>
        <div class="game-desc">控制模拟的遥控车在地图上随意行驶，十分解压</div>
      </div>
    </a>
  </div>
</template>

<script setup>
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