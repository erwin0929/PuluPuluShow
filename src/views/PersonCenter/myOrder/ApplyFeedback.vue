<!-- 提交反馈,成功或失败 -->
<template>
  <section>
    <!-- 反馈图片 -->
    <feedback-icon class="feed-back" status="success" />
    <h2 class="txt">退款提交成功</h2>
    <div class="call">有疑问可拨打客服电话：021-****-****</div>
  </section>
</template>

<script>
import FeedbackIcon from '@/components/common/FeedbackIcon'
export default {
  components: {
    FeedbackIcon
  }
}
</script>

<style scoped lang="scss">
  .feed-back{
    margin-top: 245px;
  }
  .txt{
    font-size: 36px;
    font-weight: 700;
    text-align: center;
  }
  .call{
    font-size: 25px;
    color: #666;
    line-height: 130px;
    text-align: center;
  }
</style>
