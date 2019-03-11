<!-- 当前活动列表 -->
<template>
  <act-list />
</template>

<script>
import ActList from '@/views/Activity/components/ActList'
export default {
  name: 'CurAct',
  components: {
    ActList
  },
  methods: {
    // 点击回调
    handle (e) {
      this.$router.push({
        name: 'PastAct'
      })
    }
  }
}
</script>
