<!-- 添加个人类型发票 -->
<template>
  <section>
    <field-input msg="名称" v-model="name" required pholder="请输入抬头名称" />
  </section>
</template>

<script>
import FieldInput from '../components/FieldInput'
export default {
  name: "personInvoice",
  data () {
    return {
      name: ''
    }
  },
  components: {
    FieldInput
  }
}
</script>

<style scoped lang="scss">

</style>
