<script setup>
 import {onBeforeMount, onMounted} from 'vue'
 import { useRoute, useRouter } from 'vue-router'
 import { reactive,ref } from 'vue'
 let socekt = null
 let websocket = null
 let websocket2 = null
 let session = null
 let auth = true
 let msg = null
 let msgList = reactive([])
 let selected = ref(null)
 let form =reactive({}) 
 let formR = ref(null)
 let bot =ref(null)
 console.info('this page is ConsolePage')


// {
//   "syncId": 123,                  // 消息同步的字段
//   "command": "sendFriendMessage", // 命令字
//   "subCommand": null,             // 子命令字, 可空
//   "content": {}                   // 命令的数据对象, 与通用接口定义相同
// }



// {
//   "sessionKey":"YourSession",
//   "target": ,
//   "messageChain":[
//     { "type":"Plain", "text":"hello\n" },
//     { "type":"Plain", "text":"world" },
//     { "type":"Image", "url":"https://i0.hdslb.com/bfs/album/67fc4e6b417d9c68ef98ba71d5e79505bbad97a1.png" }
//   ]
// }

 let options =  reactive([{
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },])
  let value = ref('')
 onMounted(async function(){
  
 })
 
 onBeforeMount(()=>{
    if(!auth){
     const router = useRouter()
     router.push('/loginBot')
   }
 })
 const connectWs = function(){
   let address = 'ws://47.241.160.29:8080'
   alert(form.authkey)
   websocket = new WebSocket(address+'/message?verifyKey='+form.authkey+'&qq='+form.bot)
   // websocket2 = new WebSocket(address+'/message?verifyKey='+form.authkey+'&qq='+form.bot)
   websocket.onmessage = (e)=>{
    console.info(e)
    msg = eval('('+e.data+')')
    if(msg.code !== 400){
      session = msg.data.session === 'undefined'?session:msg.data.session 
      if(msg.data.type !== 'undefined'){
        msgList.push(msg.data) 
        if(msg.data.messageChain[1].text === '11'){
          sendmsg()
        }
      }
      console.info(msgList)
      }
    }
    
 }
 const disconnectWs = function(){
   if(websocket !== null){
     websocket.close()
     websocket = null
   }
 }
 const sendmsg = function(){
   if(websocket !== null){
      let sendMsgData = 
                  {
            "syncId": 111,                   
            "command": "sendGroupMessage",  
            "subCommand": null,             
            "content":  {
                        "sessionKey":session,
                        "target":513299206,
                        "messageChain":[
                          { "type":"Plain", "text":"我是傻驴···嘿嘿" },
                        ]
                      }
          }
    websocket.send(JSON.stringify(sendMsgData))   
   }else{
     console.error('websocket is null')
   }
 }
</script>
<template>
  <div>
    <!-- connect-->
    <div>
      <el-form ref="formR" :model="form" label-width="120px">
        <el-row style="display:inline-block">
        <el-form-item label="authKey">
          <el-input v-model="form.authkey"></el-input>
        </el-form-item>
        <el-form-item label="bot">
          <el-input v-model="form.bot"></el-input>
        </el-form-item>
        <el-button @click="connectWs">连接</el-button>
        <el-button @click="disconnectWs">断开</el-button>
        </el-row>
      </el-form>
    </div>
    <!-- danmu epsomo-->                 
    <div class="msg-container" >
      <div v-for="(item) in msgList">
        <div class="fans" >
          <div > {{item}}</div>
        </div>
      </div>
    </div>
    <!-- send -->
    <div>
      <div>
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <el-button @click="sendmsg">发送</el-button>
    </div>
  </div>
</template>
<style scope>

</style>