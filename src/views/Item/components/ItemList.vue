<!-- 项目列表,选择大类 -->
<template>
	<section>
		<!-- 大类列表 -->
		<div class="item-show-list" v-for="(item, index) in dataList" :key="index">
			<router-link :to="{ name: 'GameKind', params: { projectid: item.id } }">
				<!-- 图片展示 -->
				<img v-lazy="item.img">
				<!-- 悬浮标题 -->
				<span class="is-title" v-text="item.name" />
			</router-link>
		</div>
	</section>
</template>

<script>
import mixin from '@/mixin/item'
export default {
  name: 'ItemList',
  data () {
    return {
      dataList: [],
      params: {
        page: 1,
        pagesize: 10
      }
    }
  },
  methods: {
    async getData () {
      const { dataList } = await this.getItemList(this.params)
			this.dataList = dataList
      this.closeToast()
    }
  },
  mixins: [mixin]
}
</script>

<style scoped lang="scss">
	.item-show-list{
		position: relative;
	}
	.is-title{
		color: #fff;
		font-size: 45px;
		font-weight: 700;
		position: absolute;
		bottom: 35px;
		left: 70px;
	}
</style>
