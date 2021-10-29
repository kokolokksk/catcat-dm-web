<script setup>
 import {onBeforeMount, onMounted} from 'vue'
 import {io} from 'socket.io-client'
 let socekt = null
 onMounted(async function(){
   socekt =  io('ws:127.0.0.1:8060',{extraHeaders:{
     verifyKey: '',
     qq:2329692460
   }})
   socekt.on('connect', () => {console.info('connected ws server success!')})
   socekt.on('message',msg=>{console.info(msg)})

 })
 onBeforeMount(()=>{
   socekt.close()
   socekt = null
 })
</script>
<template>
  
</template>
<style scope>

</style>