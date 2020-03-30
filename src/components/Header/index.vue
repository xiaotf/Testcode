<template>
  <div class="header">
    <i class="el-icon-back" @click="back" v-if ="type"></i>
    <span>{{ msg }}</span>
    
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '喵喵电影',
      type:false,
    }
  },
  // 监听
  watch:{
    $route(to,from){
      if(to.path == '/'){
        this.type = false
      }else{
        this.type=true
      }
    }
  },
  // 调用
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
[class*=" el-icon-"], [class^=el-icon-]{
position: relative;
right: 31%;
transform: translateX(-48%);
font-size: 2rem;
}
*{
  margin: 0;
  padding: 0;
}
.header{
  width: 100%;
  height: 50px;
  background-color: #fff;
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}
.header span{
  font-size: 18px;
  color: #000;
  font-weight: 600;
}
</style>