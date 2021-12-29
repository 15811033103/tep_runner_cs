<template>
    <!--style="height: 50px" ==元素内部高度 -->
    <!--line-height: 500px" ==元素与顶部高度 -->
    <!--border-bottom: 1px solid #13ce66" = 下边横线，#13ce66 =颜色 -->
    <!--display: flex" ==容器”。其所有子元素自动成为容器成员  -->
    <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #13ce66;display: flex" >
        <!-- 表示这个元素宽带是500px = <div style="width: 500px">后台</div>-->
        <div style="width: 500px">后台</div>
        <!--style="flex: 1" = flex 属性用于设置或检索弹性盒模型对象的子元素如何分配空间。 -->
        <div style="flex: 1"></div>

        <div style="width: 100px">

            <!-- 下拉菜单-->
            <el-dropdown>
                <span class="el-dropdown-link">
                  下拉菜单
                  <el-icon class="el-icon--right">
                    <arrow-down/>
                  </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人信息</el-dropdown-item>
                        <el-dropdown-item>退出系统</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>


        </div>

    </div>
</template>

<script>
    export default {
        name: "Header.vue"
    }
</script>

<style scoped>

</style>