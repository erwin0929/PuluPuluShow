<!-- 添加企业类型发票 -->
<template>
  <section>
    <field-input msg="名称" required pholder="请输入抬头名称 或 极速开票六位代码" />
    <field-input msg="税号" required pholder="请输入抬头名称 或 极速开票六位代码" />
    <field-input msg="企业地址" pholder="请输入企业注册地址" />
    <field-input type="number" msg="电话号码" pholder="请输入企业电话号码" />
    <field-input msg="开户银行" pholder="请输入企业开户银行" />
    <field-input type="number" msg="开户银行" pholder="请输入企业银行账号" />
  </section>
</template>

<script>
import FieldInput from '../components/FieldInput'
export default {
  name: "CompanyInvoice",
  components: {
    FieldInput
  }
}
</script>

<style scoped lang="scss">

</style>
