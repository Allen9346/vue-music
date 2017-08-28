<template>
  <div class="no-result">
    <div class="no-result-icon"></div>
    <p class="no-result-text">{{title}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
@import "~common/less/variable";
@import "~common/less/mixin";
.bg-image(@url){
  background-image: url("@{url}@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
    background-image: url("@{url}@3x.png");
  }
}

.no-result{
  text-align: center;
  .no-result-icon{
    width: 86px;
    height: 90px;
    margin: 0 auto;
    .bg-image('no-result');
    background-size: 86px 90px;
  }
  .no-result-text{
    margin-top: 30px;
    font-size: @font-size-medium;
    color: @color-text-d;
  }
}
</style>
