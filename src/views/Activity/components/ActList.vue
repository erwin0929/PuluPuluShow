<!-- 活动列表组件,需图片懒加载 -->
<template>
	<section>
		<div>
			<router-link :to="{name: 'ActDetail'}" tag="div" v-for="item in dataList" :key="item.id">
				<img v-lazy="item.pic_Url">
			</router-link>
		</div>
		<div class="no-more">
			<span>没有更多活动信息</span>
		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ActList',
  data () {
    return {
      namespace: 'activity',
    }
  },
  methods: {
    async getDataList () {
      await this.$store.dispatch(`${this.namespace}/getData`, this.params)
      this.closeToast()
    }
  },
  computed: {
    ...mapState({
      params: state => state.activity.params,
      dataList: state => state.activity.dataList
    })
  },
  created () {
    this.getDataList()
  }
}
</script>

<style scoped lang="scss">
	.no-more{
		color: #c7c8c8;
		font-size: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 80px 0 0;
		&::before,
		&::after{
			content: '';
			width: 100px;
			height: 1px; /*no*/
			background: #e1e2e3;
		}
		span{
			margin: 0 15px;
		}
	}
</style>
