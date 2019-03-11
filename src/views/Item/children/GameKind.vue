<!-- 二级分类,选择游戏种类 -->
<template>
  <section>
    <!-- 大类名称 -->
    <div class="s-split">
      <shop-name :name="name" />
    </div>

    <!-- 门店介绍 -->
    <div class="s-split">
      <title-box title="门店介绍" />
      <text-area :paraGraph="introduce" />
    </div>

    <!-- 游戏分类 -->
    <choose-game :list="gameTypeResponse" title="游戏分类" />
  </section>
</template>

<script>
import TitleBox from '@/views/Ticket/components/TitleBox'
import TextArea from '@/views/Ticket/components/TextArea'
import ChooseGame from '../components/ChooseGame'
import mixin from '@/mixin/item'
export default {
  name: 'GameKind',
  props: ['projectid'],
  data () {
    return {
      params: {
        projectid: this.projectid
      },
      name: '',
      introduce: '',
      img: '',
      gameTypeResponse: []
    }
  },
  components: {
    TitleBox,
    TextArea,
    ChooseGame
  },
  methods: {
    async getData () {
      const res = await this.getDetail(this.params)
      Object.assign(this, res)
      this.closeToast()
    }
  },
  mixins: [mixin]
}
</script>

<style scoped lang="scss">
  .abc{
    border: 20px solid red;
  }
</style>
