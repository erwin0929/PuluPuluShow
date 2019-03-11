<!-- 设置时间页 -->
<template>
  <section class="set-time-page">
    <div>
      <div class="set-time" @click="startShow = true">
        <span class="time-t">起始时间</span>
        <span class="date">
          <span class="date-t">{{ formatStartTime }}</span>
        </span>
      </div>
      <div class="set-time" @click="endShow = true">
        <span class="time-t">终止时间</span>
        <span class="date">
          <span class="date-t">{{ formatEndTime }}</span>
        </span>
      </div>
    </div>

    <date-picker :currentDate.sync="startTime" type="start" :show.sync="startShow" />
    <date-picker
      :currentDate.sync="endTime"
      type="end"
      :show.sync="endShow"
      @custom="$router.push({ name: 'MyScore' })"
    />

  </section>
</template>

<script>
import mixin from '@mixin/modules/personCenter'
import DatePicker from '@components/DatePicker'
export default {
  name: 'SetTime',
  data () {
    return {
      startShow: false,
      endShow: false
    }
  },
  created () {
    this.closeToast()
  },
  components: {
    DatePicker
  },
  mixins: [mixin]
}
</script>

<style scoped lang="scss">
  @import "~@/assets/scss/common";
  @import "~@/scss/modules/personCenter";
  .set-time-page{
    font-size: 28px;
  }
  .set-time{
    border-bottom: 1px solid $split_c;/*no*/
    padding: 0 $side_pad;
    height: 85px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .time-t{
    color: #000;
  }
  .date-t{
    margin-right: 15px;
  }
  .date{
    color: #999;
    display: flex;
    align-items: center;
    @include arrow_r();
  }
</style>
