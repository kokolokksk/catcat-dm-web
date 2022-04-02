<template>
  
</template>

<script setup>
import { ref,reactive,onMounted } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import request from '../utils/request'
const route = useRoute()
onMounted(async ()=>{
  await request('/cat/dm/listDanMu?clientId=' + route.query.clientId).then(e=>{
    console.info(e)
  }).catch(err=>{
    alert(err)
  })
})
</script>

<style>

</style>