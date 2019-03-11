<!-- 标题组件 -->
<template>
	<div class="title-box" :class="[className]">
    <!-- 左侧icon -->
    <i class="icon"></i>
    
    <!-- 右侧标题和更多 -->
    <div class="main-box">
      <span class="title">{{title}}</span>
      <router-link class="link" :to="url">
        <span class="more">{{$t('home.more')}}</span>
        <i class="arrow"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'url', 'className']
}
</script>

<style scoped lang="scss">
  .title-box{
    padding: 0 $side_pad;
    height: 65px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .main-box{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon{
    margin-right: 20px;
  }
  .more{
    font-size: 22px;
    color: #6b6c6d;
  }
  .title{
    font-size: 28px;
    font-weight: 700;
  }
  $size: 45px;
  $back_size: 36px;
  $icon_class: intro, item-case, buy, activity, assitant;
  $i: 0;
  @each $item in $icon_class{
    .#{$item}{
      .icon{
        border-radius: 50%;
        width: $size;
        height: $size;
        background: $site_color url("../../../assets/images/home/icon_title_01.png") no-repeat center #{$i * -$back_size + 5};
        background-size: $back_size;
      }
    }
    $i: $i + 1;
  }
  .link{
    display: flex;
    align-items: center;
  }
  .arrow{
    $size: 15px;
    width: $size;
    height: 20px;
    background: url("../../../assets/images/home/arrow.svg") no-repeat center center;
    background-size: $size;
    margin-left: 5px;
  }
</style>
