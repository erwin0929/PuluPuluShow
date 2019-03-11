<!-- 返回顶部按钮 -->
<template>
	<aside class="go-top">
		<!--<img src="@/assets/images/common/go-top.svg" alt="">-->
	</aside>
</template>

<style scoped lang="scss">
	.go-top{
		$size: 100px;
		width: $size;
		height: $size;
		background: rgba($site_color, 0.7) url("~@/assets/images/common/go-top.svg") no-repeat center;
		background-size: 60px;
		position: fixed;
		bottom: 150px;
		right: 30px;
		z-index: 9;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
