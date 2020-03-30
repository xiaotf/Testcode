<template>
  <div class="nav">
    <div class="p">填写订单</div>
    <div class="set">
      <div>
        <span>姓名:</span>
      </div>
      <div>
        <input type="text" class="set_input" placeholder="请输入姓名" v-model="name">
      </div>
    </div>
    <div v-if="flag">
      <span class="ls">请输入姓名</span>
    </div>
    <div class="set">
      <div>
        <span>电话：</span>
      </div>
      <div>
        <input type="text" class="set_input" placeholder="请输入电话" v-model="phone">
      </div>
    </div>
    <div v-if="flag1">
      <span class="ls">请输入电话</span>
    </div>
    <div class="set">
      <div>
        <span>邮箱：</span>
      </div>
      <div>
        <input type="text" class="set_input" placeholder="请输入邮箱" v-model="email">
      </div>
    </div>
    <div v-if="flag2">
      <span class="ls">请输入邮箱</span>
    </div>
    <div class="set_btn" @click="btn">
      <span>付款<span>{{piclib}}</span>元</span>

    </div>
    <span @click="centerDialogVisible = true">选择支付方式</span>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="80%" center>
      <div>
        <div @click="zhifu">
          <img src="@/assets/wx.svg" alt="" style="width: 40px;height: 40px">
          <span class="sp">微信支付</span>
        </div>
        <div @click="zhifu">
          <img src="@/assets/zfb.svg" alt="" style="width: 40px;height: 40px">
          <span class="sp">支付宝支付</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>
<script>
export default {
  name:'Pream',
  data(){
    return{
       msg:'csac',
       name:"",
      phone:"",
      email:"",
      flag:false,
      flag1:false,
      flag2:false,
      piclib:'',
      // btn:false,
      centerDialogVisible: false
    }
   
  },
  methods:{
      btn(){
        if(this.name=="" || this.name==null || this.name == undefined){
          this.flag=true;
          return;
        }
        if(this.phone=="" || this.phone==null || this.phone== undefined){
          this.flag1=true;
          return;
        }else {
          var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
          if(!reg.test(this.phone)){
            this.flag1=true;
            return;
          }
        }
        if(this.email=="" || this.email==null || this.email== undefined){
          this.flag2=true;
          return;
        }else {
          var regEmail=/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
          if(!regEmail.test(this.email)){
            // console.log(110)
            this.flag2=true;
            return;
          }
        }



      },
    zhifu(){
        this.centerDialogVisible= false
    },
    set(){
      this.piclib = this.$route.query.ka;
      console.log(piclib)
    },


  },
  mounted(){
    this.set()
  }

}
</script>
<style scoped>
@import '../../assets/css/pream.css';
  .ls{
    font-size: 18px;
    color: red;
    padding-left: 20px;
  }
  .sp{
    position: absolute;
    padding-top: 10px;
    padding-left: 14px;
  }
</style>
