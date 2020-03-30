<template>
    <div>
      <p>{{msg}}</p>
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
    mane: 'Sewsou',
    data(){
      return{
        msg:'最新上映电影',
        title:null,
        isLoadding:true,
      }
    },
    methods:{
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
.nav{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 40px
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
