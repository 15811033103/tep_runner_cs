<template>
    <div>
        <!--min-height: 100vh"=视图（页面）高度 -->
        <!--  <el-menu-item index="user">陈帅团队</el-menu-item> 其中的==user ==default-active是默认展示-->
        <el-menu
                style="width: 200px; min-height: 100vh "
                default-active="user"
                class="el-menu-vertical-demo">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>保险业务</span>
                </template>
                <el-menu-item-group title="保险一部" index="main">
                    <el-menu-item index="user">陈帅团队</el-menu-item>
                    <el-menu-item index="1-2">哈哈团队</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="保险二部">
                    <el-menu-item index="1-3">嘻嘻团队</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="1-4">
                    <template #title>财商团队</template>
                    <el-menu-item index="1-4-1">财商一组</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
                <el-icon><icon-menu /></el-icon>

                <span>游戏部门</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>

                <span>汽车部门</span>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon><setting /></el-icon>

                <span>香烟部门</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "aside.vue"
    }
</script>

<style scoped>

</style>