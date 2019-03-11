<!-- 二维码页 -->
<template>
  <section class="qr-page">
    <span>二维码使用说明</span>
    <span class="unknown">asdasd4fsa5d4f6as4df4sa64dfs5a4df654sad5f4</span>
    <div class="qr">
      <!-- 二维码图片,由js生成 -->
      <div ref="qrcode"></div>
    </div>
    <div class="order-number">
      <span>订单号码：</span>
      <span>6565656575764543</span>
    </div>
  </section>
</template>

<script>
import mixin from '@mixin/modules/personCenter'
import commonMixin from '@mixin/common'
import QRCode from 'qrcodejs2'
export default {
  name: 'QRCode',
  methods: {
    async getData () {
      const { data: text } = await this.getQrCode({ userid: this.userInfo.id })
      // 生成二维码
      let qrcode = new QRCode(this.$refs.qrcode, {
        text,
        width: 70,
        height: 70,
        colorDark: '#000',
        colorLight: '#fff',
        correctLevel: QRCode.CorrectLevel.H
      })
      this.closeToast()
    }
  },
  mixins: [commonMixin, mixin]
}
</script>

<style scoped lang="scss">
  .qr-page{
    font-size: 27px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 265px;
  }
  .qrcode{
    font-size: 24px;
    color: #333;
  }
  .unknown{
    width: 390px;
    word-break:break-all;
    text-align: center;
  }
  .qr{
    width: 265px;
    margin-top: 50px;
  }
  .order-number{
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
