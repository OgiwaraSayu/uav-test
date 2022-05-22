<template>
    <div class="bg">
        <div class="title">数据业务接入</div>
        <div class="left">
            <div class="top_left">
                <NodeId></NodeId>
            </div>
            <div class="clear"></div>
            <div class="bottom_left">
                <DataRoutes></DataRoutes>
            </div>
        </div>
        <div class="right">
            <div class="right_child">
                <p class="font">需接入的业务数据输入</p>
                <textarea v-model="inputData"></textarea>
                <div style="margin-left: 0.3rem;margin-top: -1rem;width:100%">
                    <el-button class="button" type="success" @click="submit" plain>输入</el-button>
                    <el-button class="button" type="info" @click="clear" plain>清空</el-button>
                </div>

            </div>
            <div class="right_child" style="margin-top: 0.1rem">
                <p class="font">经OMNet跳传后输出的业务数据</p>
                <textarea readonly="readonly" style="cursor: auto" v-model="outputData"></textarea>
                <div style="margin-left: 0.3rem;margin-top: -1rem;width: 100%">
                    <el-button class="button" type="primary" @click="reveal" plain>显示</el-button>
                    <el-button class="button" type="warning" @click="hidden" plain>隐藏</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NodeId from "@/components/page2/left/NodeId";
import DataRoutes from "@/components/page3/left/DataRoutes";
export default {
    name: "DataService",
    components: {DataRoutes, NodeId},
    data(){
        return{
            inputData:'',
            outputData:'',
            nullValue:'',
            tempValue:''
        }
    },
    methods:{
        clear(){
            this.inputData = ''
        },
        reveal(){
            this.outputData = this.tempValue;
        },
        hidden(){
            this.outputData = this.nullValue;
        },
        pass(){
            this.outputData = this.inputData;
        },
        async submit(){
            this.tempValue = this.inputData
            setTimeout(this.pass,3000)
            // await this.pass()
        },
        getNodeInformation(){
            // /* 发送数据到服务器 */
            this.$socket.emit('get page1 data',this.$global.defaultId,this.$global.defaultTargetId);
        },
    },
    created() {
        this.getNodeInformation()
        this.tempValue = this.outputData
    }
}
</script>

<style scoped>
.bg{
    margin:0 auto;
    width:100%;
    min-height:100vh;
    background:url(../assets/images/bg.jpg) no-repeat;
    background-size: cover;
    padding:0.1rem;
}
.bg div{
    float: left;
}
.title{
    width:100%;
    font-size:0.15rem;
    line-height:0.2rem;
    color:#9DC3E6;
    text-align:center;
    vertical-align: center;
    font-weight:bold;
    /*padding-top: 10px;*/
}
.left{
    width: 20%;
    padding-right: 0.05rem;
}
.top_left{
    margin-top: 0;
    width: 100%;
    height: 1rem;
    /*background-color: blue;*/

}
.bottom_left{
    margin-top: 0.1rem;
    height: 2rem;
    width: 100%;
}

.right{
    margin-top: 0.1rem;
    width: 76%;
    height: 3rem;
}
.right_child{
    width: 100%;
    height: 50%;
    background: url("../assets/images/border.png") no-repeat;
    background-size: 100% 100% ;
}
textarea{
    max-width: 4rem;
    max-height:0.8rem;
    min-width: 4rem;
    min-height: 0.8rem;
    font-size: 0.1rem;
    background-color: white;
    margin-left: 0.3rem;
    /*margin-top: 0.05rem;*/
    z-index: 2;
}
p{
    margin-left: 0.3rem;
    margin-top: 0.1rem;
    font-size: 0.08rem;
    color: #00B0F0;
}
.button{
    margin-left: 1rem;
    width: 0.5rem;
    height: 0.2rem
}
</style>