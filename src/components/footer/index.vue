<template>
  <div class="footer">
    <div class="footer_nav">
      <div>
        <router-link to="/">
        <img src="@/assets/fl.svg" alt="" style="width: 25px;height: 25px;padding-bottom: 10px">
          <div style="position: absolute;margin-top: -44px;list-style: none;color: #000">首页</div>
        </router-link>
      </div>
      <div>
        <router-link to="New">
          <img src="@/assets/ls.svg" alt="" style="width: 25px;height: 25px;padding-bottom: 10px">
          <div style="position: absolute;margin-top: -44px;list-style: none;color: #000">讨论</div>
        </router-link>
      </div>
      <div>
        <router-link to="Sou">
        <img src="@/assets/my.svg" alt="" style="width: 25px;height: 25px;padding-bottom: 10px">
          <div style="position: absolute;margin-top: -44px;list-style: none;color: #000">我的</div>
        <!--<span>我的</span>-->
        </router-link>
      </div>
      <!--<div>4</div>-->
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'dibu'
    }
  },
  methods:{
    a:function(){
      this.$router.push({path:'/Header/index'})
    },
     b:function(){
      this.$router.push({path:'/Login/loginIndex'})
    },
     c:function(){
      this.$router.push({path:'/Login/a'})
    }
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.footer{
  width: 359px;
  height: 50px;
  background-color: #f0f0f0;
  text-align: center;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  overflow: hidden;
  /*padding-top: 10px;*/
}
.footer_nav{
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.footer_nav>div{
  margin-top: 8px
}
</style>
