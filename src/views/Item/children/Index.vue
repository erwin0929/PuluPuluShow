<!-- 项目主页 -->
<template>
  <div class="parent-box">
    <!-- 项目列表 -->
    <item-list />
  </div>
</template>

<script>
import ItemList from '@views/Item/components/ItemList'
export default {
  name: 'ItemHome',
  components: {
    ItemList
  }
}
</script>

<style scoped lang="scss">
  .parent-box{
    position: relative;
    .sub-box{
      position: absolute;
      left: 50%;
      top: 20px;
      transform: translate3d(-50%, 0, 0);
    }
  }
  .search-box{
    border-radius: 50px;
    font-size: 21px;
    width: 550px;
    height: 55px;
    padding: 0 20px 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.5);
  }
  .icon{
    width: 35px;
  }
</style>
