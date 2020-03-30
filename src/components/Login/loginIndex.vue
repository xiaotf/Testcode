<template>
  <div class="count">
    <div class="count_i" @click="go">
      <input type="text" name="" id="" placeholder="搜索" class="count_in" >
    </div>
    <!-- 轮播 -->
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in imagesbox" :key="item.id" style="height:200px">
           <img :src="item.pic" class="image" style="height:200px;width:100%">
          <!-- <h3>{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
      <!-- 选项 -->


<!--分类-->
    <div class="count_tl">
      <div class="count_tl_l">
        <ul>
          <li>
            <div class="count_tl_lu" style="line-height: 68px">
              <router-link to="/Sewsou">
                <img src="@/assets/lx.svg" alt="" style="width:38px;height:68px">
              </router-link>
            </div>
          </li>
          <li>
            <div class="count_tl_lu" style="line-height: 68px">
              <router-link to="/Yp">
                <img src="@/assets/yp.svg" alt="" style="width:38px;height:68px">
              </router-link>
            </div>
          </li>
          <li>
            <div class="count_tl_lu" style="line-height: 68px">
              <router-link to="/Paixv">
                <img src="@/assets/tj.svg" alt="" style="width:38px;height:68px">
              </router-link>
            </div>
          </li>
          <li>
            <div class="count_tl_lu" style="line-height: 68px">
              <router-link to="/PL">
                <img src="@/assets/lls.svg" alt="" style="width:38px;height:68px">
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  <!-- 图片 -->
    <div class="conn">
      <span>最新上线</span>
    </div>
    <!--<div class="count_nav">-->
      <!--<div class="count_nav_w" v-for="item in move" :key="item.id">-->
          <!--<img :src="item.shopo" alt="" style="width:100%;height:150px">-->
          <!--<p>{{item.name}}</p>-->
          <!--<p>-->
            <!--<span>价格</span>-->
            <!--<span>${{item.pic}}</span>-->
            <!--<span @click="toMallInfo(item.id,item.pic,item.shopo)" style="margin-left:40px;text-decoration:none;color:red">购买</span>-->
          <!--</p>-->
      <!--</div>-->
    <!--</div>-->

    <!---->
    <Loadding v-if="isLoadding"></Loadding>
    <div class="count_nav" v-else>
      <div class="count_nav_w" v-for="item in title" :key="item.id">
        <img :src="item.litpic" alt="" style="width:100%;height:150px">
        <p>{{item.title}}</p>
        <p>
          <span>价格</span>
          <span>${{item.price}}</span>
          <span @click="toMallInfo(item.id,item.price,item.litpic,item.title,item.aid)" style="margin-left:40px;text-decoration:none;color:red">购买</span>
        </p>
      </div>
    </div>

    <div class="conn">
      <span>最新上线</span>
    </div>
    <div class="count_nav">
      <div class="count_nav_w1" v-for="item in hotel_new" :key="item.id">
        <img :src="item.litpic" alt="" style="width:100%;height:150px">
        <p class="sw1">{{item.title}}</p>
        <!--<p>-->
          <!--<span>价格</span>-->
          <!--<span>${{item.price}}</span>-->
          <!--<span @click="toMallInfo(item.id,item.price,item.litpic,item.title)" style="margin-left:40px;text-decoration:none;color:red">购买</span>-->
        <!--</p>-->
      </div>
    </div>



  </div>


</template>

<script>
import Headerindex from '@/components/Header/index'
import Footerindex from '@/components/footer/index'
export default {
  name:'login',
  data () {
    return {
      msg: 'Welcome ',
      title:[],
      hotel_new:[],
      imagesbox:[
      {id:0,pic:"http://img.oh-china.cn/uploads/2019/1012/f694f1c28278ddfa1805d8d3cb132989.png"},      
      {id:1,pic:"http://img.oh-china.cn/uploads/2019/1024/fd2177cc8543aff9971489ec91c0653a.jpg"},
      {id:2,pic:"http://img.oh-china.cn/uploads/2019/1024/8389b17d24efe3cd46b8676b6db4cbe6.jpg"}
      ],
      img:[
        {id:0,pic:require('@/assets/lx.svg')},
        {id:1,pic:require('@/assets/yp.svg')},
        {id:2,pic:require('@/assets/tj.svg')},
        {id:3,pic:require('@/assets/lls.svg')}
        ],
      move:[
         {id:0,shopo:require('@/assets/2 .jpg'),pic:"40",name:"速度与激情"},      
         {id:1,shopo:require('@/assets/3.jpg'),pic:"20",name:"菜鸟"},
         {id:2,shopo:require('@/assets/4.jpg'),pic:"30",name:"杭州影视"},
         {id:3,shopo:require('@/assets/5.jpg'),pic:"15",name:"笨小孩"}
      ],
      isLoadding:true
    }
  },
  methods:{
      //axios
      Get(){
        this.$axios.post('http://factory.oh-china.cn/index/pubact/index_data',{akey:'8558c6a666c5ccdee54f'})
          .then(
            res =>(
              console.log(res),
                this.title = res.data.hotel_guonei,
                this.hotel_new=res.data.hotel_new,
                this.isLoadding=false
            )
          ).catch(function (error) {
          console.log(110)
        })
    },
     // 传参
    toMallInfo: function(mallCode,pic,img,title,aid){
         this.$router.push({
           path: 'list/list',
           name: 'List',
          query: {
            mallCode: mallCode,
            pic:pic,
            img:img,
            title:title,
            aid:aid,
           }
         })
      },
      go(){
        this.$router.push({
          path:'view/YY',
          name: 'YY',
        })
      }
  },

  mounted(){
    this.Get()
  },




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
.count{
  width: 100%;
  margin-bottom: 50px;
}
.count_i{
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.count_in{
  width: 100%;
  height: 30px;
  background-color: #ccc;
  margin: 0 auto;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  /*padding-left: 10px;*/
  text-align: center;
}
.img{
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
}
.count_lx{
width:100%;height:240px;
background-color:#ccc;
overflow:hidder;
padding-top: 10px;
}
.count_lx_l{
  width:49%;height:240px;background-color:#fff;float:left
}
.count_lx_r{
width:49%;height:240px;background-color:#fff;float:left;margin-left:7px
}
.count_lg{
  margin-left: 30%;
  font-size: 14px;
  color:red;
}
.count_tl{
  width: 100%;
  margin-bottom: 18px;
}
.count_tl_l{
  width: 100%;
  overflow: hidden;
}
.count_tl_l ul li{
  list-style: none;
  float: left;
}
.count_tl_lu{
  width: 68px;
  height: 68px;
  background-color: #f0f0ff;
  float: left;
  border-radius: 50px;
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
}
/* .count_tl_lul{

} */
.h{
  height: 200px;
}
  .el-carousel__item h3 {
    /* color: #475669; */
    font-size: 18px;
    opacity: 0.75;
    /* line-height: 200px;
    margin: 0; */
  }
  
  .el-carousel__item:nth-child(2n) {
    /* background-color: #99a9bf; */
  }
  
  .el-carousel__item:nth-child(2n+1) {
    /* background-color: #d3dce6; */
  }
   /deep/ .el-carousel__container{
    height: 200px !important;
  }
  
  .count_nav{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .count_nav_w{
    width:49%;
    height:260px;
    background-color:#fff;
    margin-bottom: 10px;
    border:1px solid #a8a8a8;
  }
  .sw{
    width: 100%;
    display: inline;
    overflow: hidden;
  }
  .conn{
    font-style: 16px;
    font-weight: bold;
    color: #333333;
    padding-bottom: 10px;
  }

.count_nav_w1{
  width:49%;
  height:220px;
  background-color:#fff;
  margin-bottom: 10px;
  border:1px solid #a8a8a8;
}
.sw1{
  width: 100%;
  display: inline;
  overflow: hidden;
}
</style>
