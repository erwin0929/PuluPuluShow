<!-- 公共底部Footer -->
<template>
  <footer class="footer-box">
    <!-- 社交账号 -->
    <address class="friend-info">
      <div class="left">
        <div>
          <span>{{$t('footer.blog')}}: </span>
          <router-link :to="{}">Pulupulu官方微博</router-link>
        </div>
        <div>
          <span>{{$t('footer.wechat')}}: </span>
          <router-link :to="{}">Pulupulu</router-link>
        </div>
      </div>

      <div class="right">
        <div>
          <span>{{$t('footer.DouYin')}}: </span>
          <router-link :to="{}">Pulupulu</router-link>
        </div>
        <div>
          <span>{{$t('footer.telephone')}}: </span>
          <router-link :to="{}">4008517139</router-link>
        </div>
      </div>
    </address>
    <!-- 版权信息 -->
    <div class="copy-right">
      <span>Copyright © 2013~2016</span>
      <span>上海濮瑞文化创意有限公司 沪 ICP 备 1 3004074 号-1</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterCom'
}
</script>

<style scoped lang="scss">
  .footer-box{
    font-size: 26px;
    padding: 50px 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .copy-right{
      height: 65px;
      color: #7b7c7d;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    .friend-info{
      width: 610px;
      margin-bottom: 40px;
      display: flex;
      justify-content: center;
    }
    $pad: 30px;
    $h: auto;
    .left{
      border-right: 1px solid #e1e2e3; /*no*/
      height: $h;
      flex: 1;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    .right{
      height: $h;
      flex: 1;
      padding-left: $pad;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
</style>
