<!-- 选中框 -->
<template>
  <label class="mint-checklist-label">
    <input type="checkbox" class="mint-checkbox-input" value="1" v-model="checkList">
    <span class="mint-checkbox-core"></span>
  </label>
</template>

<script>
export default {
  data () {
    return {
      checkList: []
    }
  }
}
</script>

<style scoped lang="scss">
  .mint-checkbox-input{
    &:checked{
      & + .mint-checkbox-core{
        border-color: $site_color;
        background: $site_color;
      }
    }
  }
  .mint-checkbox-core{
    $size: 45px;
    width: $size;
    height: $size;
    &::after{
      width: $size / 4;
      height: $size / 2;
      left: $size / 3;
      top: $size / 10;
      transform: rotate(45deg) scale(0);
    }
  }
</style>
