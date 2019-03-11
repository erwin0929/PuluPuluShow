<!-- 游戏票列表 -->
<!-- 这只是一条item,如要多条请在组件外使用循环 -->
<template>
  <div class="ticket-box">
    <div class="ticket-list" :class="[border]">
      <!-- 如果设置slot属性时,则不显示图片 -->
      <slot name="hideImg">
        <div class="img">
          <img :src="item.imgSrc">
        </div>
      </slot>
      <div class="more-info">
        <div>
          <h3 class="game-name">{{item.title}}</h3>
          <span class="describ">{{item.intro}}</span>
        </div>
        <!-- 右侧按钮 -->
        <div>
          <inline-btn :msg="$t('components.detailInfo')" @custom="$router.push({name: url, params: {module}})" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketList',
  props: {
    // 根据传入的值来添加样式,top则显示border-top
    // 在scss中有定义.ticket-list.top的样式
    border: {
      default: 'top'
    },
    // 传入的每一条数据,注意,是一条!
    item: {
      type: null,
      required: false
    },
    // 标题字段
    title: {
      required: false,
      default: 'title'
    },
    // 简介字段
    intro: {
      required: false,
      default: 'intro'
    },
    // 跳转的链接,使用命名路由的跳转方式,name: ''
    url: {
      required: true
    },
    // 模块名称
    module: {
      required: false,
      default: ''
    },
    // 图片路径
    imgSrc: {
      required: false,
      default: false
    }
  },
  computed: {
    getUrl () {
      let to = {}
      to.name = this.item.url
      to.params = { [this.item.params] : this.item.id}
      return to
    }
  }
}
</script>

<style scoped lang="scss">
  .ticket-box{
    padding: 0 $side_pad;
  }
  .ticket-list{
    //border-top: 1px solid $split_line;
    display: flex;
    padding: 25px 0;
    flex-direction: row;
    align-items: center;
    .img{
      width: 100px;
      margin-right: 20px;
    }
    &.top{
      border-top: 1px solid $split_line; /*no*/
    }
    &.bottom{
      border-bottom: 1px solid $split_line; /*no*/
    }
  }
  .more-info{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .game-name{
    font-size: 26px;
    margin-bottom: 10px;
  }
  .describ{
    font-size: 21px;
    color: #adaeaf;
  }
</style>
