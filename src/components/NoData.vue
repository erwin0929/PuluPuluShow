<template>
  <div class="no-data" v-text="title" />
</template>

<script>
export default {
  name: 'NoData',
  props: {
    title: {
      required: false,
      type: String,
      default: '暂无数据'
    }
  }
}
</script>

<style scoped lang="scss">
  .no-data{
    color: #000;
    font-size: 29px;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
