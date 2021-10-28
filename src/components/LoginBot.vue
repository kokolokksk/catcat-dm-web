<script setup> 
import { ref,reactive } from 'vue'
// 保留颜色渐变动画
const bgColor = "#f58051" 
let form =reactive({}) 
let formR = ref(null)
formR.name = "username"
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
    <div id="lcard">
        <el-card class="box-card">
            <template #header>
            <div class="card-header">
                <span>CatCat Login</span>
                <el-button class="button" type="text">Login</el-button>
            </div>
            </template>
            
            <el-form ref="formR"  :model="form" label-width="120px">
             <el-form-item label="username">
                <el-input v-model="form.name" placeholder="Please input username"></el-input>
              </el-form-item>
              <el-form-item label="password">
                <el-input v-model="form.pwd" placeholder="Please input password" show-password></el-input>
              </el-form-item>
            </el-form>
            
        </el-card>
    </div>
    <div class="cat-loader">
      <div class="cat">
        <div class="cat__body"></div>
        <div class="cat__body"></div>
        <div class="cat__tail"></div>
        <div class="cat__head"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
*{
  font-family: 'Consola';
}
/**
* cat loader css
*/
.cat {
  position: relative;
  width: 100%;
  max-width: 20em;
  overflow: hidden;
}
.cat::before {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.cat:hover > * {
  -webkit-animation-play-state: paused;
          animation-play-state: paused;
}
.cat:active > * {
  -webkit-animation-play-state: running;
          animation-play-state: running;
}

.cat__body, .cat__tail, .cat__head {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
          animation: rotating 2.79s cubic-bezier(0.65, 0.54, 0.12, 0.93) infinite;
}
.cat__body::before, .cat__tail::before, .cat__head::before {
  content: "";
  position: absolute;
  width: 50%;
  height: 50%;
  background-size: 200%;
  background-repeat: no-repeat;
  background-image: url("/src/assets/cat-loader-removebg-preview.png");
}

.cat__head::before {
  top: 0;
  right: 0;
  background-position: 100% 0%;
  transform-origin: 0% 100%;
  transform: rotate(90deg);
}

.cat__tail {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
.cat__tail::before {
  left: 0;
  bottom: 0;
  background-position: 0% 100%;
  transform-origin: 100% 0%;
  transform: rotate(-30deg);
}

.cat__body {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}
.cat__body:nth-of-type(2) {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}
.cat__body::before {
  right: 0;
  bottom: 0;
  background-position: 100% 100%;
  transform-origin: 0% 0%;
}

@-webkit-keyframes rotating {
  from {
    transform: rotate(720deg);
  }
  to {
    transform: none;
  }
}

@keyframes rotating {
  from {
    transform: rotate(720deg);
  }
  to {
    transform: none;
  }
}
.cat-loader {
  right: 30vw;
  width: 80vw;
  position: fixed;
  display: flex;
  flex: 1;
  z-index: 16;
  flex-direction: column;
  justify-content: flex-start;
  justify-content: center;
  align-items: center; 
}










/**
* login card css
*/
#root::-webkit-scrollbar{
    display: none;
}  
#root{
     display: flex;
    align-content: center;
    justify-content: center;
  box-sizing: border-box; 
}
#lcard{
   height: 80vh; 
   align-items: center; 
   display: flex; 
   justify-content: center;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card { 
  border-radius: 10px;
  z-index: 20;
  width: 480px;
  height: 250px;
}
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