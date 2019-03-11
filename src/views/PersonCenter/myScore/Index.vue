<!-- 我的积分页 -->
<template>
  <section>
    <div class="s-box">
      <div class="score-box">
        <div class="surplus-score">目前剩余积分</div>
        <mark v-text="score" />
      </div>
    </div>

    <div class="s-history">
      <div class="to-screen">
        <span class="t-title">积分获取记录</span>
        <div class="screen-box" @click="show = true">
					{{getScreenTxt}}
        </div>
      </div>

      <div class="choose-day">
        <time class="date">{{ params.starttime | formate }}-{{ params.endtime | formate }}</time>
        <div class="set-time">
          <router-link :to="{name: 'SetTime'}">
            <img src="@img/personCenter/set_time.png" alt="">
          </router-link>
        </div>
      </div>

      <!-- 列表 -->
      <div class="list-box">
        <template v-if="dataList">
          <div class="his-box" v-for="(item, index) in dataList" :key="index">
            <!-- 积分 -->
            <span class="integ" v-text="item.integral" />
            <!-- 日期 -->
            <time v-text="item.time" />
          </div>
        </template>
        <no-data v-else />
      </div>
    </div>

    <van-popup v-model="show" position="bottom">
      <van-picker
        show-toolbar
        :columns="screen"
        @cancel="show = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </section>
</template>

<script>
import mixin from '@mixin/modules/personCenter'
const screen = [
  {
    key: 'null',
    text: '全部'
  },
  {
    key: 'earn',
    text: '收入'
  },
  {
    key: 'expand',
    text: '支出'
  }
]
export default {
  name: 'MyScore',
  filters: {
    formate: value => value.replace(/-/g, '.')
  },
  data () {
    return {
      // 远端数据
      dataList: [],
      // 积分
      score: 0,
      // 当前选中筛选菜单的索引值
      index: 0,
      show: false,
      screen
    }
  },
  methods: {
    async getData () {
      this.$toast.loading('正在加载...')
      // 这里有2个并发请求,将结果分别取到之后,写入data下
      const [{ dataList }, { virtual_Currency: score }] = await Promise.all([
        this.getScore(this.params),
        this.getUserInfo({ telephone: this.userInfo.telephone })
      ])
      this.dataList = dataList
      this.score = score
      this.closeToast()
    },
    // 确认回调,当选中了不同的key时才执行
    onConfirm ({ key }, index) {
      if (this.params.type !== key) {
        this.params.type = key
        this.index = index
        this.show = false
      }
    }
  },
  computed: {
    params () {
      return {
        userid: this.userInfo.id,
        page: 1,
        pagesize: 10,
        type: screen[this.index].key,
        starttime: this.formatStartTime,
        endtime: this.formatEndTime
      }
    },
    // 获取筛选菜单的字幕
    getScreenTxt () {
      return screen[this.index].text
    }
  },
  watch: {
    params: {
      async handler () {
        await this.getData()
      },
      deep: true,
      immediate: true
    }
  },
  mixins: [mixin]
}
</script>

<style scoped lang="scss">
  @import "~@/scss/modules/personCenter";
  .score-box{
    height: 185px;
    display: flex;
    margin-bottom: $spacing;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: $site_color;
    .surplus-score{
      font-size: 24px;
    }
  }
  .integ{
    &::before{
      content: '+';
    }
  }
  .list-box{
    font-size: 28px;
  }
  .no-data{
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .choose-day{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .his-box{
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .date{
    color: #a0a0a0;
    font-size: 24px;
  }
  .screen-box{
    border: 1px solid #ccc;/*no*/
    font-size: 22px;
    width: 135px;
		height: 50px;
    display: flex;
		justify-content: space-between;
		align-items: center;
    padding: 0 13px;
    position: relative;
    &::after{
      $size: 10px;
      content: '';
      border: 1px solid #000;/*no*/
      border-top-width: 0;
      border-left-width: 0;
      width: $size;
      height: $size;
      transform: translate3d(-50%, -50%, 0) rotate(45deg);
      transform-origin: left center;
    }
    .drop-box{
      border: 1px solid red;/*no*/
      position: absolute;
      top: 100%;
      left: 0;
    }
  }
  .t-title{
    font-size: 26px;
    margin-right: 15px;
  }
  .set-time{
    width: 35px;
  }
  mark{
    font-size: 74px;
  }
  .to-screen{
    height: 85px;
    display: flex;
    align-items: center;
  }
  .s-history{
    padding: 0 $side_pad;
    background-color: #fff;
  }
</style>
