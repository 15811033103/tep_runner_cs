<template>
    <div>
        <!--min-height: 100vh"=视图（页面）高度 -->
        <!--  <el-menu-item index="user">陈帅团队</el-menu-item> 其中的==user ==default-active是默认展示-->
        <el-menu
                style="width: 100px; min-height: 100vh "
                default-active="user"
                class="el-menu-vertical-demo">

            <el-menu-item index="2" router @click="project">
                <el-icon><icon-menu /></el-icon>

                <span>项目管理1</span>
            </el-menu-item>

            <el-menu-item index="3" router @click="env">
                <el-icon><document /></el-icon>

                <span>环境变量</span>
            </el-menu-item>


            <el-menu-item index="4" router @click="case_page">
                <el-icon><setting /></el-icon>

                <span>测试用例</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  name: "aside.vue",
  methods: {
    project() {
      this.$router.push({ path: '/project' });
    },
    case_page() {
      this.$router.push({path: '/case'});
    },
    env() {
      this.$router.push({path: '/env'});
    }
  }}

</script>

<style scoped>

</style>