<!-- 收货地址管理页 ,注意使用下拉刷新等........ -->
<template>
  <section class="adr-manage-page">
    <div class="p-box">
      <scroller v-if="dataList.length" ref="scoller">
        <div class="add-list" v-for="(item, index) in dataList" :key="index">
          <div class="a-info">
            <span>收货人: {{item.receiver}}</span>
            <span v-text="item.telephone"></span>
          </div>

          <div class="action-box">
            <span class="addr-txt">收货地址: {{item.address}}</span>
            <inline-btn msg="删除" @custom="deleteAddr(item)" />
          </div>
        </div>
      </scroller>
      <no-data v-else />
    </div>

    <!-- 添加地址按钮 -->
    <router-link :to="{ name: 'AddNewAddr' }">
      <btn-comp class="close-btn" msg="添加" radian="square" close-bottom />
    </router-link>
  </section>
</template>

<script>
import mixin from '@mixin/modules/personCenter'
import common from '@mixin/common'
export default {
  name: 'AddrManage',
  data () {
    return {
      dataList: []
    }
  },
  methods: {
    // 删除地址
    deleteAddr ({ id }) {
      console.log(id)
    },
    async getData () {
      const { dataList } = await this.getAddrList(this.params)
      this.dataList = dataList
      this.closeToast()
    }
  },
  computed: {
    params () {
      return {
        userID: this.userInfo.id,
        page: 1,
        pagesize: 10
      }
    }
  },
  mixins: [mixin, common]
}
</script>

<style scoped lang="scss">
  @import "~@/scss/modules/personCenter";
  .add-list{
    font-size: 24px;
    margin-bottom: $spacing;
    padding: 0 $side_pad 20px;
    background-color: #fff;
  }
  .p-box{
    position: absolute;
    top: $nav_h + $spacing;
    left: 0;
    right: 0;
    bottom: $closeBtnH;
  }
  .close-btn{
    height: $closeBtnH;
  }
  .a-info{
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .action-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .addr-txt{
    width: 435px;
  }
</style>
