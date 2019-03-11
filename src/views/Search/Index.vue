<!-- 搜索页 -->
<template>
	<section class="search-page">
		<!-- 顶部搜索栏 -->
		<div class="s-box">
			<div class="like-inp-box">
				<img class="s-img" src="@/assets/images/search/search.png" alt="">
				<input class="s-inp" type="text" :placeholder="$t('search.placeholder')">
			</div>
			<button>{{$t('search.search')}}</button>
		</div>
		<!-- 热门游戏 -->
		<div>
			<div class="hot-t">
				<img src="@/assets/images/search/tag.png" alt="">
				<span>{{$t('search.hotGame')}}</span>
			</div>
			<!-- 标签列表 -->
			<div class="tag-box">
				<router-link  v-for="(item, index) in searchList" :key="index" class="t-list" :to="{}">{{item.game}}</router-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Search',
	data () {
	  return {
	    searchList: [
				{
				  game: '古宅惊魂'
				},
				{
				  game: '时间裂痕2: 魔力觉醒'
				},
				{
				  game: '夜幕危机'
				},
				{
				  game: '代号潘多拉'
				},
				{
				  game: '皇家赌场'
				},
				{
				  game: 'DC档案: 营救计划'
				}
			]
		}
	}
}
</script>

<style scoped lang="scss">
	.search-page{
		padding: 30px $side_pad;
		$fz: 24px;
		.like-inp-box{
			border-radius: 50px; /*no*/
			height: 70px;
			padding: 0 20px;
			background: #f4f5f6;
			flex: 1;
			display: flex;
			align-items: center;
		}
		.s-box{
			font-size: $fz;
			display: flex;
			flex-direction: row;
		}
		.s-img{
			width: 40px;
		}
		.s-inp{
			padding: 15px 0 15px 20px;
			height: 100%;
			flex: 1;
			background: transparent;
		}
		button{
			font-size: $fz;
			width: 120px;
			background: transparent;
		}
		.tag-box{
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
		.hot-t{
			font-size: $fz;
			height: 55px;
			margin: 30px 0 15px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			img{
				width: 30px;
				margin-right: 5px;
			}
		}
		.t-list{
			$cor: #acadae;
			border-radius: 50px; /*no*/
			font-size: $fz;
			border: 1px solid $cor; /*no*/
			color: $cor;
			height: 45px;
			margin: 0 20px 25px 0;
			padding: 0 25px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>