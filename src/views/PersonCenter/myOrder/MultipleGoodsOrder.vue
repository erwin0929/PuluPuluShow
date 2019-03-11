<!-- 多个商品的订单详情页 -->
<!-- 待支付: 底部按钮, 顶部剩余支付时间, 商品图片列表, 支付方式(选择银行卡), 没有场馆日期游戏等明细 -->
<!-- 已支付: 底部有退款和查看二维码按钮 -->
<template>
	<section>
		<div v-for="(index) in 6" :key="index">
			<h2 class="goods-name">商品00{{index++}}</h2>
			<order-param />
		</div>
	</section>
</template>

<script>
import OrderParam from './components/OrderParam'
export default {
	components: {
    OrderParam
	}
}
</script>

<style scoped lang="scss">
	@import "~@/scss/modules/personCenter";
	.goods-name{
		border-bottom: 1px solid $split_c;
		font-size: 28px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		background-color: #fff;
	}
</style>
