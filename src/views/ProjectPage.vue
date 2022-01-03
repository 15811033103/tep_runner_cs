<template>
  <div class="home">
    <!--style="margin: 2px 1px" = 上下俩个像素，左右1个像素 -->
    <!--新增、导入、导出 按钮 -->
    <div style="margin: 2px 1px">
      <!--type="primary" = 是重要的颜色，还有其他警告、危险代表不同颜色 -->
      <el-button type="primary" @click="add">新增</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>

    </div>
    <!--查询输入框 -->
    <div>
      <!-- style="width: 20%"  input输入框 长度-->
      <el-input v-model="search" placeholder="请输出查询内容" style="width: 20%" clearable/>
      <el-button type="primary" @click="searchdata">查询</el-button>
    </div>

    <!-- 表格-->
    <el-table :data="tableData" border style="width: 100%">
      <!--sortable 是排序 -->
<!--      <el-table-column prop="id" label="用例id" sortable  />-->

      <el-table-column prop="name" label="项目名称"  />
      <el-table-column prop="desc" label="描述"  />


      <!-- 固定》右边操作按钮-->
      <!-- 切记#default="scope"-->
      <el-table-column fixed="right" label="操作 " width="120">
        <template #default="scope">
          <!-- size="small" == 按钮大小-->
          <!-- type="text" == 按钮文本类型-->
          <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>

          <el-popconfirm title="Are you sure to delete this?" @confirm="handleDelete(scope.row.id)">

            <!-- 因为点击删除会触发确认操作弹窗，所以@click="handleDelete(scope.row.id)" 绑定函数放到确认组件上-->
            <template #reference>
              <el-button type="text" size="small" >删除</el-button>
            </template>
          </el-popconfirm>

        </template>
      </el-table-column>

    </el-table>


    <!--style="margin: 2px 1px" = 上下俩个像素，左右1个像素 -->
    <!--sizes(可选择多少条作为一页)，page-size（默认20条=一页） -->
    <div style="margin: 10px 0">
      <el-pagination
              v-model:currentPage="currentPage"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
      >
      </el-pagination>

      <!--对话框 -->
      <el-dialog v-model="dialogVisible" title="新增项目" width="30%" >

        <!-- from 表单-->
        <el-form ref="form" :model="form" label-width="120px">

          <el-form-item label="项目名称">
            <el-input v-model="form.name" style="width: 80%"></el-input>
          </el-form-item>
          <el-form-item label="项目描述">
            <el-input v-model="form.desc" style="width: 80%"></el-input>
          </el-form-item>

        </el-form>


        <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="save ">保存</el-button>
      </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src

  //import axios from "axios";
  import request from "../utils/request";

  export default {
    name: 'Home',
    data(){
      return{
        form:{},
        dialogVisible: false,
        search: "",
        currentPage:1,
        total:50,
        pageSize:10,
        tableData: [

        ],
      }
    },
    created() {
      this.load()
    },
    methods:{
      add(){
        this.dialogVisible = true
        this.form = {}
      },
      load(){
        request({url: "http://127.0.0.1:8000/api/projectpage/",
          method: 'get',
          params:{
            "sizeNum":this.pageSize,
            "pageNum":this.currentPage,
            }}).then(res =>{
          console.log(res.data)
          this.tableData = res.data
          // this.total = (res.data.length)
        })
      },
      searchdata() {
        request({
          url: "http://127.0.0.1:8000/api/project/",
          method: 'get',
          params: {
            "search": this.search,
          }
        }).then(res => {
          console.log(res.data)
          this.tableData = res.data
        })
      },
      save(){
        //if (this.form.id)判断form中是否存在id，如果存在调用编辑接口，如果不存在调用新增接口
        // if判断接口返回是否是200，如果是说明保存成功，否则保存失败，页面弹窗展示
        if (!this.form.id){
          request({
            url: "http://127.0.0.1:8000/api/project/",
            method: 'post',
            data: this.form
          }).then((res => {

            if (res.status == 200) {
              console.log("adsdas")
              this.$messageBox({
                type: "成功",
                message: "保存成功"
              })
            } else {
              this.$messageBox({
                type: "error",
                message: "保存失败"
              })
            }
            this.load() //刷新表格的数据
            this.dialogVisible = false //关闭弹窗
          }))
        } else {
          request({
            url: "http://127.0.0.1:8000/api/project/" + this.form.id,
            method: 'post',
            data: this.form
          }).then((res => {

            if (res.status == 200) {
              console.log("adsdas")
              this.$messageBox({
                type: "成功",
                message: "保存成功"
              })
            } else {
              this.$messageBox({
                type: "error",
                message: "保存失败"
              })
            }
            this.load() //刷新表格的数据
            this.dialogVisible = false //关闭弹窗
          }))
        }
 },
      handleEdit(row){
        this.form = JSON.parse(JSON.stringify(row))
        console.log(this.form)
        this.dialogVisible = true
      },
      handleDelete(id){
        request({
          url: "http://127.0.0.1:8000/api/project/"+id,
          method: 'get',
        }).then((res => {
          if (res.status == 200) {
            this.$messageBox({
              message: "删除成功"
            })
          } else {
            this.$messageBox({
              message: "删除成功"
            })
          }
          this.load() //刷新表格的数据
          this.dialogVisible = false //关闭弹窗
        }))
      },
      handleSizeChange(pageSize){ //改变当前每夜的个数触发
        this.pageSize = pageSize
        this.load()

      },
      handleCurrentChange(currentPage){ //改变当前页码触发
        this.currentPage = currentPage
        this.load()
      }
    },
    components: {
    }
  }
</script>
