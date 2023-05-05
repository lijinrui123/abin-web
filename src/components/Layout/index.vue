<template>
  <header class="header flex">
    <router-link class="navigation-link" to="tools">工具</router-link>
    <router-link class="navigation-link" to="notes">配置项</router-link>
    <router-link class="navigation-link" to="games">游戏</router-link>
    <router-link class="navigation-link" to="relax">摸鱼</router-link>
    <router-link class="navigation-link" to="demos">样例</router-link>
  </header>
  <main class="content">
    <router-view />
  </main>
</template>

<script setup>

</script>

<style scoped lang="scss">
.header{
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: $--header-height;
  padding: 0 $--padding-side;
  justify-content: center;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  background-color: $--color-header;
  .navigation-link{
    position: relative;
    display: flex;
    padding: 12px 18px;
    flex-direction: row;
    align-items: center;
    flex: 0 0 auto;
    transition: color 200ms ease;
    color: #546681;
    font-size: 16px;
    text-decoration: none;
    &:hover{
      color: #333333;
    }
    &:hover::before{
      content: "";
      position: absolute;
      top: auto;
      right: 0;
      bottom: 0;
      left: 1rem;
      height: 2px;
      background-color: #1e80ff;
      width: calc(100% - 2rem);
    }
  }
  .router-link-active{
    color: $--color-menu-active;
    font-weight: bold;
  }
}

.content{
  width: 100%;
  height: 100vh;
  padding-top: calc($--header-height + 20px);
  padding-bottom: 40px;
  padding-left: $--padding-side;
  padding-right: $--padding-side;
  background: $--color-body;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: #ff5a00;
  }
  &::-webkit-scrollbar-thumb{
    width: 5px;
    background: yellow;
  }
}
</style>