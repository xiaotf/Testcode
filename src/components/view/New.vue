<template>
  <div class="count">
    <p>最新新闻</p>
    <div  >
    <div class="count_x" v-for="(item,index) in arre" :key="item.id" v-on:click="addClass(index)">
      <p>{{item.title}}</p>
      <p :class="{ classred:index==current}" style="height:20px;">{{item.list}}</p>
    </div>
    </div>

    <!-- <div>
      <div @click="show3 = !show3" style="backgrounf-color:#f3f3f3">什么是新闻</div>
      <div style="margin-top: 20px; height: 200px;">
        <el-collapse-transition>
          <div v-show="show3">
            <div class="transition-box">新闻，是指报纸、电台、电视台、互联网等媒体经常使用的记录与传播信息的一种文体，是反映时代的一种文体。新闻概
              新闻，是指报纸、电台、电视台、互联网等媒体经常使用的记录与传播信息的一种文体，是反映时代的一种文体。新闻概
              新闻，是指报纸、电台、电视台、互联网等媒体经常使用的记录与传播信息的一种文体，是反映时代的一种文体。新闻概
              新闻，是指报纸、电台、电视台、互联网等媒体经常使用的记录与传播信息的一种文体，是反映时代的一种文体。新闻概
            </div>
          </div>
        </el-collapse-transition>
      </div>
      
    </div> -->



  </div>


</template>
<script>
import Headerindex from '@/components/Header/index'
import Footerindex from '@/components/footer/index'
export default {
  name: 'news',
  data(){
    
    return{
      current:0,
      show3: false,
      arre:[
        {
          id:0,
          title:'什么是新闻',
          list:"新闻，是指报纸、电台、电视台、互联网等媒体经常使用的记录与传播信息的一种文体，是反映时代的一种文体。新闻概念有广义与狭义之分。 广义上：除了发表于报刊、广播、互联网、电视上的评论与专文外的常用文本都属于新闻， 包括消息、通讯、特写、速写（有的将速写纳入特写之列）等等；"
        },
        {
          id:1,
          title:'新闻的作用',
          list:"新闻，是指报纸、电台、电视台、互联网等媒体经常使用的记录与传播信息的一种文体，是反映时代的一种文体。新闻概念有广义与狭义之分。 广义上：除了发表于报刊、广播、互联网、电视上的评论与专文外的常用文本都属于新闻， 包括消息、通讯、特写、速写（有的将速写纳入特写之列）等等；"
        },
      ],
      isactive: false
    }
   
  },
   methods:{
      addClass:function(index){					
        this.current=index;
      },
      
    }
}
</script>
<style scoped>
.count{
  width :100%;
margin-bottom: 50px;
}
.count_x{
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #cccccc;
  transform: 3s;
}
.count_x p{
  font-size: 14px;
  color: #333333;
  transition: 3s;
}
.changs{
  color: rgb(241, 227, 227)!important ;
}
.classred{
	 		height:100px !important;
       
	 	}
.transition-box {
  margin-bottom: 10px;
  width: 359px;
  /* height: 100px; */
  border-radius: 4px;
  background-color: #409EFF;
  /* text-align: center; */
  color: #fff;
  /* padding: 40px 20px; */
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
