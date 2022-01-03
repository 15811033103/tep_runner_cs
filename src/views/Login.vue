<template>
  <div class="firstdemo">
    <el-form ref="form" :model="user_data" label-width="80px">
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label="用户名">
            <el-input v-model="user_data.username"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label="密码">
            <el-input v-model="user_data.password"></el-input>
          </el-form-item>
        </el-col>
      </el-row >
      <div v-if='user_data.register_button'>
        <el-row type="flex" justify="center">
          <el-col :span="5">
            <el-form-item label="邮箱" >
              <el-input v-model="user_data.email" @click="register_click"></el-input>
              <el-button type="primary" @click="onRegister">提交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </div>

      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">登陆</el-button>
            <el-button type="primary" @click="register_click">注册</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import request from "../utils/request";

export default {
  name: "fisrtdemo",
  data() {
    return {
      user_data: {
        register_button:false,
        register_submit:false,
        username: "",
        password: "",
        email:""
      }
    };
  },
  methods: {
    onSubmit() {
      //if (this.form.id)判断form中是否存在id，如果存在调用编辑接口，如果不存在调用新增接口
      // if判断接口返回是否是200，如果是说明保存成功，否则保存失败，页面弹窗展示
      request({
        url: "http://127.0.0.1:8000/user/login/",
        method: 'post',
        data: this.user_data
      }).then((res => {
        if (res.status == '200') {
          //console.log(sessionStorage)
          sessionStorage.setItem("token","Token "+res.token); //将登陆token写到浏览器中
        this.$router.push({ path: '/project' });
        } else {
          this.$messageBox({
            type: "error",
            message: "保存失败1"
          })
        }
        this.dialogVisible = false //关闭弹窗
      }))
    },
        onRegister() {
      //if (this.form.id)判断form中是否存在id，如果存在调用编辑接口，如果不存在调用新增接口
      // if判断接口返回是否是200，如果是说明保存成功，否则保存失败，页面弹窗展示
      request({
        url: "http://127.0.0.1:8000/user/register/",
        method: 'post',
        data: this.user_data
      }).then((res => {
        console.log(res.data)
        if (res.status == '200') {
          location.reload()
        } else {
            this.$messageBox({
              type:"error",
              message:"注册失败,用户已存在-前端"
            })
          }
        this.dialogVisible = false //关闭弹窗
      }))
    },
        register_click() {
      this.user_data.register_button = true
                console.log(this.user_data.register_button)
    },
  },
};
</script>
<style lang="stylus" scoped></style>