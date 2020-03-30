<template>
    <div>
      <p>{{msg}}</p>
      <el-table :data="tableData" style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column prop="date" label="日期" sortable width="100">
        </el-table-column>
        <el-table-column prop="name" label="姓名" sortable width="100">
        </el-table-column>
        <el-table-column prop="address" label="地址" :formatter="formatter">
        </el-table-column>
      </el-table>



    <!--排序-->
      <div>
        <span @click="tp">向上</span>
        <span @click="bt">向下</span>
      </div>
      <div>
        <div class="listinfo" v-for="item in ta" :key="">
          <span>{{item.name}}</span>
          <span class="set1">{{item.person}}</span>
        </div>
      </div>


    </div>
</template>

<script>
    export default {
        name: "Paixv",
        data(){
          return{
            msg:"Paixv.vue",
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              }],
            ta:[
              {name:"数学",person:"10"},
              {name:"语文",person:"20"},
              {name:"英语",person:"30"},
              {name:"化学",person:"40"},
              {name:"正",person:"50"},
            ]
          }
        },
      methods:{
        tp(){
          //升序
          // return this.ta.sort((a,b)=>a.person-b.person);//升序
          console.log(1)
          this.ta.sort((a,b)=>{
            //排序基于的数据
            return a.person - b.person;
          })
        },
        bt(){
          //降序
          this.ta.sort((a,b)=>{
            //排序基于的数据
            return b.person - a.person;
          })
        },
        formatter(row, column) {
          return row.address;
        }
      },

    }
</script>

<style scoped>
.set1{
  padding-left: 20px;
}
.listinfo{
  margin-top: 20px;
}
</style>
