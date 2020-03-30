<template>
  <div>
    <!-- <p>{{msg}}</p> -->
    <div class="nav">
      <div>
        <input type="text" v-model="input" class="nav1" placeholder="请输入地址/名称" @click="flag=!flag">
      </div>
      <button @click="btn" class="nav2">确定</button>
    </div>
    <div v-if="flag" class="lat">
      <dl>
        <dd @click="showValue($event)">合肥</dd>
        <dd @click="showValue($event)">上海</dd>
        <dd @click="showValue($event)">武汉</dd>
        <dd @click="showValue($event)">南京</dd>
        <dd @click="showValue($event)">重庆</dd>
        <dd @click="showValue($event)">北京</dd>
        <dd @click="showValue($event)">深圳</dd>
        <dd @click="showValue($event)">杭州</dd>
      </dl>
    </div>
    
    <div class="nav3_top">
      <p>热门城市</p>
      <div class="nav3">
        <div @click="showValue($event)">北京</div>
        <div @click="showValue($event)">上海</div>
        <div @click="showValue($event)">深圳</div>
        <div @click="showValue($event)">广东</div>
        <div @click="showValue($event)">武汉</div>
        <div @click="showValue($event)">南京</div>
        <div @click="showValue($event)">合肥</div>
        <div @click="showValue($event)">四川</div>
        <div @click="showValue($event)">湖南</div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  name:"YY",
  data(){
    return{
      msg:'YY',
      input: '',
      flag:false
    }
  },
  methods:{
    btn(){
      // var input = this.input;
      console.log(this.input);
    },
    showValue(event){
      var e = event.currentTarget;
      // var ee =event.target;
      this.flag=false;//关闭下拉框
      this.input = e.innerHTML;//将获取的值放到input内
      // console.log(ee)
    }
  }
}
</script>
<style scoped>
@import '../../assets/css/YY.css';
.lat{
  width: 100%;
  height: auto;
  background-color:#f0f0f0;
  position: absolute;
  border-bottom: 1px solid red;
}
</style>
