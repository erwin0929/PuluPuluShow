<!-- 倒计时组件 -->
<template>
	<div class="count-down">
		<span class="msg">{{msg}}</span>
		<time>15:56:45</time>
	</div>
</template>

<script>
export default {
  props: {
    msg: {
      required: false,
			type: [String, Number],
			default: '倒计时'
		}
	}
}
</script>

<style scoped lang="scss">
	.count-down{
		$h: 60px;
		font-size: 25px;
		height: $h;
		color: #f56161;
		display: flex;
		justify-content: center;
		align-items: center;
		white-space: nowrap;
	}
	.msg{
		margin-right: 15px;
	}
</style>
