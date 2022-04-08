<template>
  <div style="display:flex;left: 30%;
    position: relative;">
    <!-- <el-table :data="dmList.data" style="width: 800px">
        
        <el-table-column  label="Name" style="width:100%"  >
          <template #default="scope">
            <div style="display: flex; align-items: center;justify-content: center;">
              <el-icon><timer /></el-icon>
              <span style="margin-left: 10px">{{scope.row.nickname}}:{{ scope.row.danmu }} {{dateFormat(new Date(scope.row.time*1000))}}</span>
            </div>
          </template>
        </el-table-column>
      
      </el-table> -->
      <div>
        <div v-for="item in dmList.data" :key="item.uuid" style="padding: 5px;text-align: left;">
          {{item.nickname}}<i>({{dateFormat(new Date(item.time*1000))}})</i> : {{item.danmu}}
        </div>
      </div>
  </div>
  <div class="demo-pagination-block" style="display:flex;left: 30%;
    position: relative;">
        <el-pagination
          v-model:currentPage="fenye.page"
          v-model:page-size="fenye.size"
          layout="prev, pager, next, jumper"
          background='#f3f3f3'
          :total="dmList.pager.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
</template>

<script setup>
import { ref,reactive,onMounted,computed } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import request from '../utils/request'
const route = useRoute()
const router = useRouter()
const dmList = reactive({
  pager:{},
  data:[]
})
const fenye = ref({
  page:1,
  size:10
})
const loaddata = async () => {
  const { data:{ pager,data } } = await request('/cat/dm/mapDanMu',{
    clientId: route.query.clientId,
    page:fenye.value.page-1,
    size:fenye.value.size
  },'post')
  dmList.pager = pager
  dmList.data = data
}
  const handleSizeChange = e => {
    fenye.value.size = e
    fenye.value.page = 1
    loaddata()
  }
  const handleCurrentChange = e => {
    fenye.value.page = e
    loaddata()
  }
 const dateFormat = (date=new Date(),fmt="YYYY-mm-dd HH:MM:SS") => {
      let ret;
      const opt = {
          "Y+": date.getFullYear().toString(),        // 年
          "m+": (date.getMonth() + 1).toString(),     // 月
          "d+": date.getDate().toString(),            // 日
          "H+": date.getHours().toString(),           // 时
          "M+": date.getMinutes().toString(),         // 分
          "S+": date.getSeconds().toString()          // 秒
          // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
          ret = new RegExp("(" + k + ")").exec(fmt);
          if (ret) {
              fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
          };
      };
      return fmt;
  }
onMounted(async ()=>{
  if (!route.query.clientId){
    router.push('/')
  }
  await loaddata()
})



</script>

<style>

</style>