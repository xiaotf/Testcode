<template>
  <div>
    <p>{{msg}}</p>
    <div>
      <input type="text" placeholder="请输入内容" ref="in" v-on:keyup="inre" class="input">
    </div>
    <Loadding v-if="isLoadding"></Loadding>
    <div class="nav" v-else>
      <div class="nav_l" v-for="item in title" :key="item.id">
        <div>
          <img :src=item.images.large style="width:170px;height:250px" alt="">
        </div>
        <div class="nav_ll">
          <p>电影名称：{{item.title}}</p>
          <p>上映时间：{{item.mainland_pubdate}}</p>
          <p>主演：{{item.directors[0].name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mane: 'Yp',
    data(){
      return{
        msg:'搜索电影',
        in:"in",
        title:null,
        isLoadding:true,
      }
    },
      methods: {
        inre:function(){
          console.log(this.$refs.in.value)
        },
        Get(){
          this.$axios.get('https://douban.uieee.com/v2/movie/in_theaters?start=1&count=20city=北京')
          .then(
            res=>(
              this.title=res.data.subjects,
               this.isLoadding=false
              // console.log(res),
              // console.log(title)
            )
          )
          .catch(function(error){
            console.log(110)
          })
        }    
      },
      mounted(){
        this.Get()
      }
  }
</script>
<style scoped>
  .input{
    width: 96%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: auto;
    border:1px solid #aeaeae;
    padding-left: 10px;
    font-size: 18px;
    border-radius: 5px
  }
  .nav{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 40px;
  margin-top: 12px
}
.nav_l{
  width: 48%;
  border: 1px solid #aa8888;
  margin-bottom: 10px
}
.nav_ll{
  font-size: 14px;
  margin-left: 5px;
}
</style>
