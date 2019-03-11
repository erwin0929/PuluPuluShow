<!-- 按钮组件 -->
<template>
	<button :close-bottom="closeBottom" :radian="radian" :anti="anti" :cutting="cutting" @click="$emit('custom')">
		<!-- icon -->
		<template v-if="$slots.default">
			<div class="icon">
				<slot />
			</div>
		</template>
		<!-- 文案 -->
		{{msg}}
	</button>
</template>

<script>
export default {
	props: {
	  // 按钮文本
		// 可选值: 任意String类型
		// 默认值: 无(必填)
	  msg: {
	    required: true,
			type: String
		},
		// 按钮使用圆角还是方形
		// 可选值: square,radius
		// 默认值: radius
    radian: {
			required: false,
			type: String,
			default: 'radius'
		},
		// 按钮是否使用反色
		// 可选值: true, false
		// 默认值: false
		anti: {
	    required: false,
			type: Boolean,
			default: false
		},
		// 是否缩减宽度
		// 可选值: true, false,
		// 默认值: true
		cutting: {
	    required: false,
			type: Boolean,
			default: false
		},
		// 是否贴近底部,尽量在不出现滚动条才使用该属性
		closeBottom: {
	    required: false,
			type: Boolean,
			default: false
		}
	}
}
</script>

<style scoped lang="scss">
	button{
		color: #000;
		width: 100%;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: $site_color;
		&:active{
			background-color: #cbcccd;
		}
		/* 圆角按钮 */
		&[radian="radius"]{
			border-radius: $raduis; /*no*/
			font-size: 26px;
			height: $inp_h;
			margin-top: 100px;
			/* 是否贴近底部 */
			&[close-bottom="true"]{
				left: 50%;
				bottom: 45px;
				transform: translate3d(-50%, 0, 0);
			}
		}
		/* 方形按钮 */
		&[radian="square"]{
			font-size: 30px;
			border-radius: 0;
			height: 90px;
			margin-top: 0;
			/* 是否贴近底部 */
			&[close-bottom="true"]{
				left: 0;
				bottom: 0; /*no*/
			}
		}
		/* 反色 */
		&[anti]{
			color: $site_color;
			background: #000;
		}
		/* 缩减宽度的按钮 */
		&[cutting="true"]{
			width: 650px;
			height: 65px;
			margin: 0 auto;
		}
		/* 是否贴近底部 */
		&[close-bottom="true"]{
			position: absolute;
		}
	}
	.icon{
		width: 60px;
		margin-right: 20px;
	}
</style>
