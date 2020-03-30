<template>
  <div>
    <p class="k">快速注册</p>
    <form action="">
      <div class="nav">
         <span>姓名</span>
         <!-- <input v-model="phoneValue" @input="handleInput(1)" type="number"  @blur="animate()" placeholder="请输入手机号" max="11" > -->
         <input type="text" spellcheck="请输入姓名" class="input" v-model="name">   
      </div>
      <div class="nav" >
        <input type="radio" name="sex" value="M">男
        <input type="radio" name="sex" value="F">女
      </div>
      <div class="nav" prop="phone">
         <span>电话</span><input type="text" spellcheck="请输入姓名" class="input" v-model="phone">   
      </div>
      <div class="nav">
         <span>邮箱</span><input type="text" spellcheck="请输入姓名" class="input" v-model="tel">   
      </div>
      <div class="nav">
         <span>密码</span><input type="text" spellcheck="请输入姓名" class="input">   
      </div>
      <div class="nav" @click="tops">
        <div class="bth">提交</div>
      </div>
    </form>
    
  </div>
</template>
<script>
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
  name:'reg',
  data(){
    return{
        // phoneValue:"",
        phone:"",
        name:"",
        tel:"",
        // names:"",
       
    }
   
  },
  methods:{
    tops(){
      var phone = this.phone;
      var name = this.name;
      var tel = this.tel;
      if(name ==""){
        alert("请输入姓名")
        return;
      }
      if(phone == ""){
        alert("请填写联系方式")
        return;
      }else{
         if(!/^(1[0-9][0-9][0-9])\d{7}$/.test(this.phone)){
           alert("请填写正确手机号码")
           return;
         }
      }
      if(tel==""){
        alert("请填写完整邮箱信息")
        return;
      }
    }
  }
}
</script>
<style scoped>
.k{
  font-size: 20px;
  color: #333333;
  text-align: center;
}
.nav{
  margin: auto;
  margin-left: 18px;
  padding-top: 18px;
}
.nav>span{
  font-size: 16px;
  margin-right: 22px;
}
.input{
  width: 200px;
  height:28px;
  padding-left: 10px;
  border: 1px solid #333333;
}
.bth{
  width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 20px;
  background-color: aqua;
  border-radius: 10px;
  margin: auto
}
</style>