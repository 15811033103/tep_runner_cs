<template>
    <div>
        <!--头部  使用组件-->
        <Header />

        <!--主体 -->
        <div style="display: flex">

            <!--侧边栏 -->
            <Aside/>
            <!--内容 -->
            <router-view style="flex: 1"/>
        </div>
    </div>
</template>

<script>
    //导入组件

    import Header from "../components/Header";
    import Aside from "../components/Aside";
    export default {
        name: "layout",
        // 增加组件
        components:{
            Header,
            Aside
        }
    }
</script>

<style scoped>

</style>