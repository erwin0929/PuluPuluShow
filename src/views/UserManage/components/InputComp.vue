<!-- 输入框组件 -->
<template>
	<div class="inp-b">
		<!-- icon -->
		<template v-if="hasIcon">
			<span class="icon" :class="[hasIcon]"></span>
		</template>

		<!-- 输入框 -->
		<input class="inp" :type="type" :placeholder="placeholder" @input="$emit('input', $event.target.value)" :value="value">

		<!-- 验证码 -->
		<template v-if="capt">
			<span @click="$emit('custom')" class="send-capt">发送验证码</span>
		</template>
	</div>
</template>

<script>
export default {
	props: {
	  value: {
	    required: true
		},
		// 输入的提示文本
		// 可选值: 任意String类型
		// 是否必填: 否
		// 默认值: 请输入
    placeholder: {
      required: false,
			default: '请输入'
		},
		// 输入框类型
		// 可选值: text,password,numer
		// 是否必填: 否
		// 默认值: text
	  type: {
      required: false,
			default: 'text'
		},
		// 是否带有icon
		// 可选值: username,pwd(String类型),false(Boolean)
		// 是否必填: 否
		// 默认值: false
		hasIcon: {
      required: false,
			type: [Boolean, String],
			default: false
		},
		// 是否含有验证码
		capt: {
	    required: false,
			type: Boolean,
			default: false
		}
	}
}
</script>

<style scoped lang="scss">
	$fz: 24px;
	.inp-b{
		font-size: $fz;
		border-radius: $raduis; /*no*/
		height: $inp_h;
		/*padding-left: 25px;*/
		display: flex;
		align-items: center;
		margin-bottom: 50px;
		background: #e8e9ea;
		overflow: hidden;
	}
	.inp{
		font-size: $fz;
		height: 100%;
		padding: 15px 20px;
		background: transparent;
		flex: 1;
	}
	.icon{
		$size: 35px;
		width: $size;
		height: $size;
		margin-left: 20px;
		$icon_list: username, pwd;
		@each $item in $icon_list{
			&.#{$item}{
				background: url("../../../assets/images/userManage/#{$item}.png") no-repeat center;
				background-size: $size - 5;
			}
		}
	}
	.send-capt{
		font-weight: 700;
		height: 100%;
		padding: 0 30px;
		background: $site_color;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
