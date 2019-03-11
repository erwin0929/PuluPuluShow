<!-- 添加发票 -->
<template>
  <section>
    <div class="invoice-box">
      <!-- 标题 -->
      <h2 class="i-title">发票类型</h2>

      <!-- 发票类型切换 -->
      <div class="btn-box">
        <inline-btn
          v-for="(item, index) in switchTab"
          class="switch-btn"
          :type="currentView === item.key ? 'default' : 'plain'"
          :key="index"
          :msg="item.msg"
          @custom="swtichTab(item.key)" />
      </div>

      <!-- 组件切换 -->
      <component :is="currentView" />
    </div>

    <!-- 按钮区 -->
    <btn-comp msg="确认" cutting closeBottom />
  </section>
</template>

<script>
import Person from './components/PersonInvoice'
import Company from './components/CompanyInvoice'
export default {
  name: 'AddInvoice',
  data () {
    return {
      currentView: 'Person',
      switchTab: [
        {
          msg: '个人',
          key: 'Person'
        },
        {
          msg: '企业',
          key: 'Company'
        }
      ]
    }
  },
  methods: {
    // tab切换
    swtichTab (data) {
      this.currentView = data
    }
  },
  created () {
    this.closeToast()
  },
  components: {
    Person,
    Company
  }
}
</script>

<style scoped lang="scss">
  .invoice-box{
    font-size: 28px;
    background-color: #fff;
  }
  .i-title{
    height: 85px;
    padding: 0 $side_pad;
    display: flex;
    align-items: center;
  }
  .btn-box{
    padding: 0 $side_pad 20px;
    .switch-btn {
      &:first-child{
        margin-right: 20px;
      }
    }
  }
</style>
