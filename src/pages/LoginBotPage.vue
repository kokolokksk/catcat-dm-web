<script setup> 
import { ref,reactive } from 'vue'
import request from '../utils/request'
// 保留颜色渐变动画
const bgColor = "#f58051" 
let form =reactive({}) 
let formR = ref(null)
formR.name = "username"
const login = function(){
  /* request('/ss/ss',form).then(e=>{
    
  }).catch(err=>{
    alert(err)
  }) */
}
</script>
<template>
  <div id="root">
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop" :style="{backgroundImage: 'linear-gradient(to top, '+bgColor+' 20%, #27273c 80%)'}">
        <div class="wave waveTop" style="background-image: url('../assets/wave-top.png')"></div>
      </div>
      <div class="waveWrapperInner bgMiddle" :style="{backgroundImage: 'linear-gradient(to top, '+bgColor+' 20%, #27273c 80%)'}"  >
        <div class="wave waveMiddle" style="background-image: url('../assets/wave-mid.png')"></div>
      </div>
      <div class="waveWrapperInner bgBottom" :style="{backgroundImage: 'linear-gradient(to top, '+bgColor+' 20%, #27273c 80%)'}">
        <div class="wave waveBottom"   style="background-image: url('../assets/wave-bot.png')"></div>
      </div>
    </div>
    <div id="lcard">
        <el-card class="box-card">
            <template #header>
            <div class="card-header">
                <span><b>CatCat</b> 弹幕姬</span>
                <el-button class="button" type="text" @click="login">进入</el-button>
            </div>
            </template>
            
            <el-form ref="formR"  :model="form" label-width="120px">
             <!-- <el-form-item label="username">
                <el-input v-model="form.name" placeholder="Please input username"></el-input>
              </el-form-item>
              <el-form-item label="password">
                <el-input v-model="form.pwd" placeholder="Please input password" show-password></el-input>
              </el-form-item> -->
              <el-form-item label="clientId">
                <el-input v-model="form.pwd" placeholder="Please input clientId" show-password></el-input>
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
    <div class="github">
      <a class="Header-link " href="https://github.com/kokolokksk/catweb" data-hotkey="g d" aria-label="Homepage " data-hydro-click="{&quot;event_type&quot;:&quot;analytics.event&quot;,&quot;payload&quot;:{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;,&quot;originating_url&quot;:&quot;https://github.com/http-party/http-server&quot;,&quot;user_id&quot;:12725100}}" data-hydro-click-hmac="3d957780a0d4ebff9e47046e11980b573efd8b671888a7c29079426e2f42b81a" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;}">
        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
    </div>
  </div>
</template>
<style scoped>
*{
  font-family: 'Consola';
}
.github{
    margin: 5px;
    display: flex;
    z-index: 17;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center; 
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