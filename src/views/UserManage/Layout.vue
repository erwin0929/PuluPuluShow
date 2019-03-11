<!-- 账号管理页的框架 -->
<template>
  <main class="user-manage-page">
    <!-- 路由入口 -->
    <slider-transition>
      <router-view />
    </slider-transition>
  </main>
</template>

<style scoped lang="scss">
  @import "./scss/common";
  .user-manage-page{
    padding: 85px 70px 0;
    background: #feffff;
  }
  .logo-box{
    width: 290px;
    margin: 0 auto 70px;
  }
</style>
