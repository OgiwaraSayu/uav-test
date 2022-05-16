<template>
    <div>
        <div class="left">
            <div style="height: 3.85rem;background-color: black">
                <div class="menu" style="margin-top: 0">
                    <router-link to="/topological">
                        <div class="title">
                            <p>全网动态</p>
                            <p>拓扑</p>
                        </div>
                    </router-link>
                </div>
                <div class="menu">
                    <router-link to="/node">
                        <div class="title">
                            <p>节点状态</p>
                            <p>驾驶舱</p>
                        </div>
                    </router-link>
                </div>
                <div class="menu">
                    <router-link to="/data">
                        <div class="title">
                            <p>数据流状态</p>
                            <p>驾驶舱</p>
                        </div>
                    </router-link>
                </div>
                <div class="menu">
                    <router-link to="/service">
                        <div class="title">
                            <p>数据业务</p>
                            <p>接入</p>
                        </div>
                    </router-link>
                </div>
            </div>
<!--            <el-menu-->
<!--                default-active="1"-->
<!--                class="el-menu-vertical-demo"-->
<!--                style="height: 3.85rem"-->
<!--                background-color="black"-->
<!--                text-color="white"-->
<!--                active-text-color="#ffd04b">-->
<!--                <router-link to="/node">-->
<!--                    <el-menu-item index="1">-->
<!--&lt;!&ndash;                        <i class="el-icon-menu"></i>&ndash;&gt;-->
<!--                        <span slot="title" style="font-size: 0.1rem;color: white">-->
<!--                            节点状态驾驶舱-->
<!--                        </span>-->
<!--                    </el-menu-item>-->
<!--                </router-link>-->
<!--                <el-menu-item index="2">-->
<!--                    <i class="el-icon-menu"></i>-->
<!--                    <span slot="title">-->
<!--                        <router-link to="/data">-->
<!--                            导航二-->
<!--                        </router-link>-->
<!--                    </span>-->
<!--                </el-menu-item>-->
<!--                <el-menu-item index="3" disabled>-->
<!--                    <i class="el-icon-document"></i>-->
<!--                    <span slot="title">导航三</span>-->
<!--                </el-menu-item>-->
<!--                <el-menu-item index="4">-->
<!--                    <i class="el-icon-setting"></i>-->
<!--                    <span slot="title">-->
<!--                        <router-link to="/service">-->
<!--                            导航四-->
<!--                        </router-link>-->
<!--                    </span>-->
<!--                </el-menu-item>-->
<!--            </el-menu>-->
            <!--                @open="handleOpen"-->
            <!--                @close="handleClose"-->
<!--            <router-link to="/node" style="font-size: 0.1rem">1</router-link>-->
<!--            <router-link to="/data" style="font-size: 0.1rem">2</router-link>-->

        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

export default {
    name: "MainPage",
    data(){
        return{
            msgList:[],
            username:[1,2,3,4,5,6,7,8],
        }
    },
    created() {
        const deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
        document.documentElement.style.fontSize = deviceWidth / 768*100 + 'px';
    },
    /* socket是监听服务器发布的自定义事件 */
    // sockets: {
    //     /* 监听welcome事件 */
    //     welcome:function(data){
    //         console.log("welcome data 数据返回 = >", data);
    //     },
    // },
}
</script>

<style scoped>
.left{
    float: left;
    width: 10%;
    border-right: 1px white solid;

}
.menu{
    margin-top: 5%;
    height: 8%;
    color: white;
    font-size: 0.08rem;
    text-align: center;
    border: solid 1px skyblue;
    background-color: #073162;
    margin-right: 1px;
}
a{
    color: #fff;

}
a.router-link-exact-active{
    color: deepskyblue;
}
.title{
    margin-top: 5%;
}
.right{
    float: left;
    width: 89%;
}
</style>