<script setup> 
// 保留颜色渐变动画
 const bgColor = "#f58051"
</script>
<template>
  <div id="root">
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop" :style="{backgroundImage: 'linear-gradient(to top, '+bgColor+' 20%, #27273c 80%)'}">
        <div class="wave waveTop" style="background-image: url('/src/assets/wave-top.png')"></div>
      </div>
      <div class="waveWrapperInner bgMiddle" :style="{backgroundImage: 'linear-gradient(to top, '+bgColor+' 20%, #27273c 80%)'}"  >
        <div class="wave waveMiddle" style="background-image: url('/src/assets/wave-mid.png')"></div>
      </div>
      <div class="waveWrapperInner bgBottom" :style="{backgroundImage: 'linear-gradient(to top, '+bgColor+' 20%, #27273c 80%)'}">
        <div class="wave waveBottom"   style="background-image: url('/src/assets/wave-bot.png')"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
 @keyframes move_wave {
    0% {
        transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
        transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
        transform: translateX(-50%) translateZ(0) scaleY(1)
    }
}
.waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
}
.waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: -1px;
    background-image: linear-gradient(to top, #f58051 20%, #27273c 80%);
}
.bgTop {
    z-index: 15;
    opacity: 0.5;
}
.bgMiddle {
    z-index: 10;
    opacity: 0.75;
}
.bgBottom {
    z-index: 5;
}
.wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
}
.waveTop {
    background-size: 50% 100px;
}
.waveAnimation .waveTop {
  animation: move-wave 3s;
   -webkit-animation: move-wave 3s;
   -webkit-animation-delay: 1s;
   animation-delay: 1s;
}
.waveMiddle {
    background-size: 50% 120px;
}
.waveAnimation .waveMiddle {
    animation: move_wave 10s linear infinite;
}
.waveBottom {
    background-size: 50% 100px;
}
.waveAnimation .waveBottom {
    animation: move_wave 15s linear infinite;
}
</style>