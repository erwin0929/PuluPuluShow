<!-- 箭头组件 -->
<template>
  <i class="allow-r"></i>
</template>

<script>
export default {
  name: "Arrow"
}
</script>

<style scoped lang="scss">
  .allow-r{
    $pSize: 50px;
    width: $pSize;
    height: $pSize;
    position: relative;
    &::after{
      $size: 20px;
      border: solid 1px #033333; /*no*/
      border-bottom-width: 0;
      border-left-width: 0;
      content: " ";
      top: 50%;
      right: 4px; /*no*/
      position: absolute;
      width: $size;
      height: $size;
      transform: translateY(-50%) rotate(45deg);
    }
  }
</style>
