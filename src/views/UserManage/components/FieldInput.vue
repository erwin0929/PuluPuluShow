<!-- 输入框组件 -->
<template>
	<div class="input-box">
    <mt-field class="input" type="text" placeholder="用户名"></mt-field>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: 'text'
    },
    place: {
      default: '请输入相关文案'
    },
    value: {
      default: 0
    }
  },
  methods: {
    updateVal (val) {
      this.$emit('input', val)
    }
  },
  created () {
  }
}
</script>

