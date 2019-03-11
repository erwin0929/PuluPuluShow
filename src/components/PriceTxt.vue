<!-- 价格 -->
<template>
	<mark class="price" :class="{inherit: isInherit}">{{price}}</mark>
</template>

<script>
export default {
  props: {
    // 价格
		// 可选值: 任意Number类型
		// 默认值: 无(必填)
    price: {
      required: true,
			type: Number
    },
		// 颜色是否继承,用来继承父级box的字体颜色,多用于列表下有单个不同状态的,比如售罄,失效等
		// 可选值: true,false,
		// 默认值: false
		isInherit: {
      required: false,
			type: Boolean,
			default: false
		}
  }
}
</script>

<style scoped lang="scss">
  .price{
    font-size: 24px;
    color: #df463e;
		&.inherit{
			color: inherit;
		}
    &::before{
      content: '¥ ';
    }
  }
</style>
