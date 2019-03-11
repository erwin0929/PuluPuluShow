<!-- 订单详情页 -->
<!-- 单商品:则显示参数。多商品:显示图片列表(链接) -->
<!-- 待支付: 底部按钮, 顶部剩余支付时间,支付方式(选择银行卡) -->
<!-- 已支付: 底部有退款和查看二维码按钮 -->
<template>
	<section>

		<section class="scroll-box" ref="scrollBox">
			<div>
				<template v-if="status === '待支付'">
					<div class="c-down-box">
						<count-down msg="剩余支付时间" />
					</div>
				</template>

				<!-- 订单编号和状态 -->
				<order-number :content="$route.params.status" />

				<!-- 参数 -->
				<template v-if="type === 'single'">
					<order-param />
				</template>
				<template v-else>
					<!-- 图片列表 -->
					<router-link :to="{name: 'MultipleGoodsOrder'}">
						<div class="multi-box">
								<div class="multi-img-box">
									<img v-for="(index) in 3" :key="index" src="@img/personCenter/order-item02.jpg" alt="">
								</div>

							<div class="total">
								共2件
							</div>
						</div>
					</router-link>
				</template>

				<!-- 发票,合计等最终结算结果 -->
				<order-settlement />

				<!-- 支付方式 -->
				<template v-if="status === '待支付'">
					<pay-way />
				</template>
			</div>
		</section>

		<!-- 底部按钮区,已支付状态和待支付才有 -->
		<div class="btn-box">
			<template v-if="status === '已支付'">
				<btn-comp class="btn-item" msg="退款" radian="square" anti @custom="$router.push({name: 'RefundApply'})" />
				<btn-comp class="btn-item" msg="查看二维码" radian="square" @custom="$router.push({name: 'QRCode'})" />
			</template>
			<template v-if="status === '待支付'">
				<btn-comp class="btn-item" msg="支付" radian="square" />
			</template>
		</div>
	</section>
</template>

<script>
import OrderNumber from './components/OrderNumber'
import OrderParam from './components/OrderParam'
import OrderSettlement from './components/OrderSettlement'
import CountDown from './components/CountDown'
import PayWay from '@components/common/PayWay'
import BScroll from 'better-scroll'
export default {
	data () {
		return {
			scrollBox: '',
			status: '',
			type: ''
		}
	},
	created () {
		let {status, type} = this.$route.params
		this.status = status
		this.type = type

		this.$nextTick(() => {
      if (!this.scrollBox) {
        this.scrollBox = new BScroll(this.$refs.scrollBox, {
          scrollY: true,
          click: true,
          bounce: false,
          pullDownRefresh: true
				})
      } else {
        this.scrollBox.refresh()
      }
    })
	},
	components: {
    OrderNumber,
    OrderParam,
    OrderSettlement,
    CountDown,
    PayWay
	}
}
</script>

<style scoped lang="scss">
	@import "~@/assets/scss/common";
	@import "~@/scss/modules/personCenter";
	$btn_h: 100px;
	.btn-box{
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 0;
		.btn-item{
			height: 100%;
			flex: 1;
		}
	}
	.scroll-box{
		width: 100%;
		position: absolute;
    top: $nav_h;
    bottom: $btn_h;
    overflow: hidden;
	}
	.total{
		width: 100px;
		font-size: 27px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@include arrow_r($size: 15px);
	}
	.multi-box{
		height: 180px;
		padding: 0 $side_pad;
		margin-bottom: $spacing;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		.multi-img-box{
			display: flex;
			align-items: center;
		}
		img{
			width: 140px;
			margin-right: 20px;
		}
	}
	.pay-way-box{
		margin-bottom: $spacing;
	}
	.c-down-box{
		background-color: #fff;
		margin-bottom: $spacing;
	}
</style>
