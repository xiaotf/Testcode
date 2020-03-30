<template>
  <div>
    {{msg}}
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">全部优惠卷</el-tab-pane>
      <el-tab-pane label="已使用" name="second">已使用优惠券</el-tab-pane>
      <el-tab-pane label="未使用" name="third">未使用优惠券</el-tab-pane>
      <el-tab-pane label="已过期" name="fourth">已过期优惠劵</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
 name:"Tab",
  data(){
    return{
      msg:'Tab',
      activeName: 'second'
    }
  }, 
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  } 
}
</script>
<style scoped>
/deep/.el-tabs--top .el-tabs__item.is-top:nth-child(2){
  padding-left: 38px;
}
/deep/.el-tabs__active-bar{
  left: 38px;
}
</style>