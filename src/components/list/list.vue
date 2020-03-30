<template>

  <div style="width:100%;padding-bottom:120px">
    
    <div>
        <img :src="img" alt="" style="width:100%;height:250px">
    </div>
      <div class="dis_f">
        <span>{{title}}</span>

      </div>
     <div class="dis">
        <div class="dis_s">
          <span>￥</span>
          <span>{{picc*value}}</span>
        </div>
        <div>
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
    </div>
    <div>
      <p style="font-size: 22px;
color: #333333;
font-weight: bold;">酒店详情</p>
      <div>
        <div v-html="res.data.content"></div>
        
      </div>
      <div>
        <p style="font-size: 22px;color: #333333;font-weight: bold;">酒店地址</p>
        <div style="height:30px;padding-bottom:10px">
          <div v-html="res.data.address"></div>
          <!-- <div v-html="res.data.aroundspots"></div> -->
        </div>
        <p style="font-size: 22px;color: #333333;font-weight: bold;">附近景点</p>
        <div style="height:30px;padding-bottom:40px">
          <!-- <div v-html="res.data.address"></div> -->
          <div v-html="res.data.aroundspots"></div>
        </div>
        <div class="ft">
          <div style="color:red;font-size:20px;">
            <span>￥</span>
            <span>{{picc*value}}</span>
          </div>

          <!-- <router-link to="/list/Pream/Pream">sdada</router-link> -->
              <!-- <p >二级路由</p> -->
          <div class="ft_t" @click="sc(ka)">
            <span>立即购买</span>
          </div>
        </div>
      </div>
      
    </div>
    <!-- <router-view></router-view> -->
  </div>
 
</template>
<script>
export default {
  name:'list',
  data () {
    return {
      msg: 'lixt ',
      id:'',
      img:'',
      num: 1,
      pic:'',
      value:'1',
      picc:'',
      title:'',
      aid:'',
      ka:'',
      res:{
        data:{
          red:[],
          res:[],
        }
        
      },
     
    }
  },
  methods: {
    sc:function (ka) {
      console.log(ka)
      this.$router.push(
        {
          path:'/Pream',
          // name:'Pream',
          query:{
            ka:this.ka
          }
        }

        )
    },
      handleChange(value) {
      this.value = value;
    // this.pic = this.picc * this.value
        this.ka = this.picc*value;
        // console.log(this.ka)
        // if(this.num===1){
        //   this.ka = this.picc
        //   return;
        // }else {
        //   this.ka = this.picc*value;
        // }
      },
      Get(){
        let id = this.$route.query.mallCode;
        let img = this.$route.query.img;
        let pic = this.$route.query.pic;
        let title = this.$route.query.title;
        var aid = this.$route.query.aid;
        this.picc = pic;
        this.id = id;
        this.img = img;
        this.title = title;
      this.aid = aid;
      // console.log(this.aid);
      this.$axios.get('http://factory.oh-china.cn/index/hotel/detailInfo',{params:{aid:this.aid,akey:'8558c6a666c5ccdee54f'}})
      // this.$axios.get('http://factory.oh-china.cn/index/hotel/detailInfo?aid='+this.aid,{akey:'8558c6a666c5ccdee54f'})
      .then(
        res=>(
          // this.red=res.data,
          this.res=res.data,
          console.log(res)
          // console.log(red)
        )
      ).catch(function (error) {
        console.log(110)
      })
    },

    },
    
    mounted(){
      this.Get()

    }
  
}

</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dis{
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
}
 /deep/ .el-input-number{
   width: 128px;
}
.dis_f{
font-size: 22px;
color: #333333;
font-weight: bold;
margin-top: 18px;
padding-bottom: 18px;
border-bottom: 1px solid #f0f0f0;
}
.dis_s{
  font-size: 22px;
  color: red;
}
.ft{
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #ffffff;
  z-index: 9999;
  display: flex;
   justify-content: space-between;
   line-height: 50px;
}
.ft_t{
  width: 166px;
  height: 50px;
  background-color: red;
  color: #ffffff;
  font-size: 20px;
  text-align: center
}
</style>
