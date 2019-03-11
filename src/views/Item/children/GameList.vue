<!-- 选择游戏(游戏列表,第三分类) -->
<template>
  <section>
    <!-- 游戏分类名称 -->
    <div class="s-split">
      <shop-name name="剧场游戏" />
    </div>

    <!-- 文字简介 -->
    <div class="s-split">
      <title-box title="文字简介" />
      <text-area :paraGraph="paraGraph" />
    </div>

    <choose-game  v-bind:state="0" />
  </section>
</template>

<script>
import ChooseGame from '../components/ChooseGame'
import TitleBox from '@/views/Ticket/components/TitleBox'
import TextArea from '@/views/Ticket/components/TextArea'
import mixin from '@/mixin/item'
export default {
  name: 'GameList',
  data () {
    return {}
  },
  components: {
    ChooseGame,
    TitleBox,
    TextArea
  },
  methods: {
    async getData () {
      await this.$store.dispatch(`${this.namespace}/getGameByType`, { StoreId: 7, Type: id, page: 1, pagesize: 10 })
      this.closeToast()
    }
  },
  mixins: [mixin]
}
</script>

<style scoped lang="scss">
</style>
