<template>
    <div class="node">
        <div class="top_left">
<!--            <el-switch-->
<!--                v-model="switchValue"-->
<!--                active-text="定时器开"-->
<!--                style="position: absolute;margin-left:0.55rem;margin-top: -0.15rem"-->
<!--                :width="width"-->
<!--                @change = "switch_on_off(switchValue)"-->
<!--            >-->
<!--            </el-switch>-->
            <p style="margin-left: 0">节点ID</p>
<!--            <p style="text-align: center;background-color: purple">-->
<!--                <el-select v-model="defaultValue" @change="getData(defaultValue)"-->
<!--                           :popper-append-to-body="false"-->
<!--                           class="select"-->
<!--                           style="">-->
<!--                    <el-option-->
<!--                        v-for="item in ids"-->
<!--                        :key="item"-->
<!--                        :value="item"-->
<!--                        :label="item">-->
<!--                    </el-option>-->
<!--                </el-select>-->
            <select class="select"
                    onmousedown="if(this.options.length>3){this.size=6}"
                        onchange="this.size=0"
                    @change="getNodeInformation(defaultValue);"
                    v-model="defaultValue"
            >
                <option v-for="item in ids"
                        :key="item"
                        :value="item"
                >{{item}}</option>
            </select>
<!--            </p>-->
        </div>
        <div class="top_right">
            <p>节点角色</p>
            <p style="text-align: center;background-color: purple;color: yellow">{{data.nodeCharacter}}</p>
        </div>
        <div style="clear: both;"></div>
        <div class="bottom_left">
            <p>入网时间</p>
            <p>{{data.time}}</p>
        </div>
        <div class="bottom_middle">
            <p>当前频段</p>
            <p>{{data.frequency}}</p>
        </div>
        <div class="bottom_right">
            <p>当前簇</p>
            <p>{{data.cluster}}</p>
        </div>
    </div>
</template>

<script>
// import {request} from "../../../../config/api";

export default {
    name: "NodeInformation",
    data(){
        return{
            ids:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
            defaultValue:0,
            data:{
                id:'',
                nodeCharacter:'',
                time:'',
                frequency:'',
                cluster:''
            },
            width:50,
            timer:"",
            switchValue:true
        }
    },
    sockets: {
        /* 监听welcome事件 */
        nodeInformation:function(data){
            // console.log("nodeInformation = >", data);
            this.data = data;
        },
    },
    methods:{
        getNodeInformation(id){
            console.log(id)
            console.log("get page1 data",id);
            this.$global.defaultId=id;
            // /* 发送数据到服务器 */
            this.$socket.emit('get page1 data',id);
        },
        // getNodeInformation(){
        //     var url ='/nodeInformation'
        //     request(url).then(res =>{
        //         this.data = res.data
        //         this.defaultValue = this.data.id
        //     })
        // },
        switch_on_off(switchValue){
            if(switchValue){
                this.timer = setInterval(()=>{
                    this.getNodeInformation(this.defaultValue)
                },2000)
            }else {
                clearInterval(this.timer)
            }
        }
    },
    created() {
        this.defaultValue = this.$global.defaultId;
        this.getNodeInformation(this.defaultValue)
    },
    mounted() {
        // if(this.timer){
        //     clearInterval(this.timer)
        // }
        // else {
        //     this.timer = setInterval(()=>{
        //         this.getNodeInformation(this.defaultValue)
        //     },2000)
        // }
    },
    destroyed() {
        clearInterval(this.timer)
    }
}
</script>

<style scoped>
.node{
    background: url("../../../assets/images/border.png") no-repeat;
    background-size: 100% 100% ;
    width: 100%;
    height: 100%;
}
.node div{
    float: left;
    font-size: 0.08rem;
    /*font-weight: bold;*/
}
.top_left{
    width: 50%;
    margin-left: 0;
    margin-top: 0.2rem;
    color: #00B0F0;
}

.top_right{
    margin-left: 0.1rem;
    margin-top: 0.2rem;
    color: #00B0F0;
}
.bottom_left{
    margin-left: 0.1rem;
    margin-top: 0.2rem;
    color: #019BFD;
}
.bottom_middle{
    margin-left: 0.15rem;
    margin-top: 0.2rem;
    color: #F7BC08;
}
.bottom_right{
    margin-left: 0.15rem;
    margin-top: 0.2rem;
    color: #00AF48;
}
p{
    text-align: center;
    font-weight: bold;
}
.select{
    font-size: 0.1rem;
    position: absolute;
    background-color: purple;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    color: yellow;
    text-align: center;
    width:3%;
    float: left;
    margin-left: 3%;
}
select::-webkit-scrollbar {
    /*width: 10px;*/
    display: none;
}

/*滚动条里面小方块*/
select::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: orange;
}

/*滚动条里面轨道*/
select::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: purple;
}

</style>