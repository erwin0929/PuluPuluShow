<!-- 组件: 选择游戏分类, 选择游戏列表, 承载2个组件 -->
<template>
  <section class="kind-box">
    <h2 class="title" v-text="title" />
    <!-- 列表,根据path来判断,分类和列表显示不同的内容 -->
    <div>
      <template v-if="list.length">
        <router-link class="kind-list" v-for="(item, index) in list" :key="index" :to="{}">
          <span>{{item.name}}</span>
          <!-- <template v-if="path === 'List'">
            <span class="intro">{{item.intro}}</span>
          </template> -->
        </router-link>
      </template>
      <no-data v-else title="暂无游戏列表" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'ChooseGame',
  props: {
    list: {
      required: true,
      type: Array
    },
    title: {
      required: false,
      type: String,
      default: '列表'
    }
  },
  data () {
    return {
      // 跳转的链接
      url: ''
    }
  },
  created () {
    // 跳转的链接,先做个样子吧,后期直接删除即可, data里的url也记得删除
    this.url = this.path === 'Kind' ? 'GameList' : 'AnyDetail'
  }
}
</script>

<style scoped lang="scss">
.kind-box {
  color: #313131;
  font-size: 25px;
  padding-bottom: 15px;
}
.title {
  border-bottom: 1px solid $split_line; /*no*/
  padding: 0 $side_pad;
  display: flex;
  height: 75px;
  align-items: center;
}
$pl: #{$side_pad + 20};
.kind-list {
  border-bottom: 1px solid $split_line; /*no*/
  height: 105px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: $pl;
  position: relative;
  &:last-child {
    border-bottom: none;
  }
  .intro {
    font-size: 23px;
    width: 560px;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 10px;
    text-overflow: ellipsis;
    color: #999;
  }
  &::after {
    $size: 20px;
    border: 1px solid #033333; /*no*/
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    top: 50%;
    right: $pl;
    position: absolute;
    width: $size;
    height: $size;
    transform: translateY(-50%) rotate(45deg);
  }
}
</style>
