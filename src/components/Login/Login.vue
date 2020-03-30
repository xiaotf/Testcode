<template>
    <div>
      <!-- {{msg}} -->
      <div class="nav">
        <div class="header_nav">
          <img src="@/assets/rw1.svg" style="width:90px;height:90px" alt="">
        </div>
        <div class="count m">
            <div>账号</div>
            <div>
              <input v-model="input" type="text" placeholder="请输入账号">
            </div>
        </div>
        <div class="count">
            <div>密码</div>
            <div>
              <input v-model="inputms" type="text" placeholder="请输入密码">
            </div>
        </div>
        <div class="btn mt" @click="btn">登录</div>
        <div class="reg">快速注册</div>
      </div>
    </div>
</template>
<script>
export default {
  name:'Login',
  data () {
    return {
      msg: 'Login',
      input:'',
      inputms:''
    }
  },
  methods:{
    btn(){
      if(this.input=="" || this.input==null || this.input == undefined){
        alert('请输入账号');
        return;
      }
      if(this.inputms=="" || this.inputms==null || this.inputms == undefined){
        alert('请输入密码');
        return;
      }else{
         this.$router.push({ path: '/',})
      }
    }
  }
}
</script>
<style scoped>
.nav{
  /* width: 100%; */
  /* height: 500px; */
  background-image: url('../../assets/time1.jpg');
  background-repeat: no-repeat;
  padding-bottom: 100%;
  
}
.count{
  width: 92%;
  margin: auto;
  display:flex;
  justify-content: space-between;
}
.count>div:nth-child(1){
  font-size: 22px;
  line-height: 41px;
  /* color: #aa88aa; */
}
.count>div:nth-child(2)>input{
  width: 248px;
  height: 32px;
  padding-left: 10px;
  font-size: 14px;
  border: 1px solid #aa88aa
}
.btn{
  width: 30%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin: auto;
  cursor: pointer;
  background-color: aqua;
  border-radius: 10px
}
.header_nav{
  width: 90px;
  height: 90px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 30px
}
.m{
  margin-bottom: 20px
}
.mt{
  margin-top: 30px
}
.reg{
  font-size: 14px;
  color: red;
  margin: auto;
  text-align: center;
  margin-top: 10px
}
</style>