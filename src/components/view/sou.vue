<template>
  <div class="lat">
    <div class="lat_x">
      <div class="lat_xl">
        <p>
          <span>账号名称：</span>
          <span>{{name}}</span>
        </p>
        <p>
          <span>账号id：</span>
          <span>{{idd}}</span>
        </p>
        <p>
          <span>账号等级：</span>
          <span>{{dj}}</span>
        </p>
        <p>
          <span>账号地址：</span>
          <span>{{dz}}</span>
        </p>
      </div>
      <div class="lat_xr">
        <div class="lat_xr_t">
          <img :src="img" alt="" style="width:100%;height:92px" >
        </div>
      </div>
    </div>
    <!-- 分段 -->
    <router-link to="Guan" class="set">
    <div class="lat_l">
      <span class="lat_s">
        关于我们
        </span>
      <span class="lat_sl">></span>
    </div>
    </router-link>
    <router-link to="Tab" class="set">
      <div class="lat_l">
        <span class="lat_s">积分兑换</span>
        <span class="lat_sl">></span>
      </div>
    </router-link>
    <div class="lat_l" @click="top">
      <span class="lat_s">在线升级</span>
      <span class="lat_sl">></span>
    </div>
    <router-link to="Dd" class="set">
      <div class="lat_l">
        <span class="lat_s">订单查询</span>
        <span class="lat_sl">></span>
      </div>
    </router-link>
    <router-link to="Reg" class="set">
    <div class="lat_l">
      <span class="lat_s">快速注册</span>
      <span class="lat_sl">></span>
    </div>
    </router-link>
    <router-link to="Login" class="set">
      <div class="lat_l">
        <span class="lat_s">切换账号</span>
        <span class="lat_sl">></span>
      </div>
    </router-link>
  </div>
</template>
<script>
import Headerindex from '@/components/Header/index'
import Footerindex from '@/components/footer/index'
export default {
  name:'sou',
  data(){
    return{
        name:'就这样进入',
        idd:'sexs_sda125',
        dj:'白银',
        dz:'亚洲地区中国',
        img:'http://img.oh-china.cn/uploads/2019/1012/f694f1c28278ddfa1805d8d3cb132989.png'
    }
  },
  methods:{
    top(){
      alert('暂无新版本可使用')
    }
  }
}
</script>
<style scoped>
.lat{
  width: 100%;
  margin-bottom: 50px;
}
.lat_l{
  width: 100%;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
  margin-top: 20px;
}
.lat_s{
  padding-left: 18px;
  font-size: 14px;
}
.lat_sl{
  padding-left: 66%;
}
.lat_x{
  width: 100%;overflow: hidden;
}
.lat_xl{
  width: 49%;
  /* background-color: red; */
  float: left;
}
.lat_xl p{
  font-size: 14px;
  margin-top: 18px;
  padding-left: 18px;
}
.lat_xr{
  width: 49%;
  /* background-color: red; */
  float: left;
  /* height: 50px; */
  margin-left: 7px;
}
.lat_xr_t{
  width: 50%;
  height: 90px;
  background-color: red;
  margin: 0 auto;
  margin-top: 36px;
  border-radius: 47px;
  overflow: hidden;
}
.set{
  text-decoration:none;
  color:#333333;
}
</style>
