<template>
    <div>
        <div class="left">
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                style="height: 3.85rem;"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">
                        <router-link to="/node">
                            导航一
                        </router-link>
                    </span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">
                        <router-link to="/data">
                            导航二
                        </router-link>
                    </span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
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
    // methods: {
    //     /* 登录 */
    //     login(id){
    //         console.log("chat message",this.username[id-1]);
    //         /* 发送数据到服务器 */
    //         this.$socket.emit('chat message',this.username[id-1]);
    //         // this.isLogin=true;
    //         this.msgList.push({type:'',msg:this.username[id-1]+'登录成功'});
    //     },
    // }
}
</script>

<style scoped>
.left{
    float: left;
    width: 10%;
}
.right{
    float: left;
    width: 90%;
}
</style>