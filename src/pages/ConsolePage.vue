<script setup>
 import {onBeforeMount, onMounted} from 'vue'
 import { useRoute, useRouter } from 'vue-router'
 import WebSocket, { WebSocketServer } from 'ws'
 let socekt = null
 let websocket = null;
 let auth = true
 console.info('this page is ConsolePage')

 onMounted(async function(){

   websocket = new WebSocket('ws://loveloliii.monster:8060?')
   websocket.onopen(()=>{
     console.info('websocket is opened')
   })
  //  socekt =  io('ws://loveloliii.monster:8060',{
  //    transports: ["websocket", "polling"],
  //    extraHeaders:{
  //    verifyKey: '1234567890',
  //    qq:2329692460
  //  }})
  //  socekt.on('connect', () => {console.info('connected ws server success!')})
  //  socekt.on('message',msg=>{console.info(msg)})

 })
 
 onBeforeMount(()=>{
    if(!auth){
     const router = useRouter()
     router.push('/loginBot')
     // window.location.href = '/#/loginBot'
   }
   if(socekt !== null){
     socekt.close()
      socekt = null
   }
   
 })
</script>
<template>
  <div>
    <p>123</p>
  </div>
</template>
<style scope>

</style>