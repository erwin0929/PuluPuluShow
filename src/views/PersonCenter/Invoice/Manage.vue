<!-- 发票管理页 -->
<template>
  <section>
    <!-- 发票列表 -->
    <div class="invoice-box">
      <scroller v-if="dataList.length" ref="scoller">
        <div class="invoice-list" v-for="(item, index) in dataList" :key="index">
          <!-- 姓名 -->
          <span>收票人: {{item.receiver}}</span>
          <div class="action">
            <!-- 发票类型 -->
            <span>{{item.type | getTypeMsg}}</span>
            <!-- 按钮 -->
            <inline-btn msg="删除" @custom="deleteItem(item)" />
          </div>
        </div>
      </scroller>
      <no-data v-else />
    </div>

    <!-- 添加按钮 -->
    <router-link :to="{name: 'AddInvoice'}">
      <btn-comp class="close-btn" msg="添加" radian="square" closeBottom />
    </router-link>
  </section>
</template>

<script>
import mixin from '@mixin/modules/personCenter'
import common from '@mixin/common'
export default {
  name: 'InvoiceManage',
  filters: {
    getTypeMsg (value) {
      const msg = {
        0: '个人',
        1: '企业'
      }
      return msg[value]
    }
  },
  data () {
    return {
      // 列表数据
      dataList: []
    }
  },
  methods: {
    async deleteItem ({ id }) {
      console.log(id)
    },
    async getData () {
      const { dataList } = await this.invoiceList(this.params)
      Object.assign(this, { dataList })
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
  .invoice-box{
    color: #666;
    font-size: 24px;
    position: absolute;
    top: $nav_h + $spacing;
    left: 0;
    right: 0;
    bottom: $closeBtnH;
  }
  .close-btn{
    height: $closeBtnH;
  }
  .invoice-list{
    padding: 25px $side_pad;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    margin-bottom: $spacing;
  }
  .action{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
