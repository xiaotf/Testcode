<template>
  <div>
    {{msg}}
      <div class="test">
        <div v-for="(module,index) in modules" :key="index">
          <el-input v-model="module.text"></el-input>
        </div>
        <el-button type="primary" @click="add">新增</el-button>
      </div>

<!-- 添加删除 -->
      <div v-for="(list,index) in lists" :key="">
          <ul>
            <li>
                <span>名字</span>
                <input type="text" v-model="list.name" style="width:100px">
            </li>
            <li>
                <span>电话</span>
                <input type="text" v-model="list.tel" style="width:100px">
            </li>
            <li>
                <button v-on:click="del(index)">删除联系人</button>
            </li>
          </ul>
      </div>
      <div>
        <button v-on:click="add1">添加联系人</button>
      </div>
      <template>
        <div>
          <div>
            <input type="text" @click="flag=!flag" v-model="all">
            <div v-if="flag">
              <dd>
                <dl @click="showValue($event)">123</dl>
                <dl @click="showValue($event)">456</dl>
                <dl @click="showValue($event)">789</dl>
              </dd>
            </div>
          </div>
        </div>
      </template>

    </div>

</template>

<script>
let that;
export default {
  name: "test",
  filters: {},
  computed: {},
  data() {
    return {
      msg:"Dd 点击按钮添加input框",
      list:["填空1","填空2","填空3"],  // 模拟传过来的数组
      modules:[{
        text:'test'
      }],
      flag: false,
      all:"",
      tables : [],//2
      lists:[{
          name:"wang",
          tel:"qwe"
      }]
    };
  },
  methods: {
    showValue(event){
      var e = event.currentTarget;
      this.flag=false;
      // alert(e.innerHTML);
      // console.log(e.innerHTML)
      this.all = e.innerHTML
    },
    add() {
      this.modules.push({text:'test'});  // 每点一下，push一次
    },
// 2.只有methodes下
    add1:function(){
        let cope = {
            name:"",
            tel:""
        }
        this.lists.push(cope);
        console.log(this.lists)
    },
    del:function(index){
        this.lists.splice(index,1);
        console.log(this.lists)
    }
  },
  beforeCreate: function() {
    that = this;
  },
  mounted() {
    // 页面加载时把数据遍历后 - push到modules数组里面
    for(var item of this.list) {
      this.modules.push({text:item});
    }
  }
};
</script>
<style scoped>
  .test {
  width: 100%;
  height: 100%;
  position: relative;
}
.test .el-input {
  width: 200px;
  margin: 10px 0;
}

</style>
