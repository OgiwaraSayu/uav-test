<template>
    <div class="id">
        <div class="box">
            <el-switch
                v-model="switchValue"
                active-text="定时器开"
                style="position: absolute;margin-left:0.15rem;margin-top: -0.15rem"
                :width="width"
                @change = "switch_on_off(switchValue)"
            >
            </el-switch>
            <p>数据流源节点ID</p>
            <p style="text-align: center;background-color: purple;color: yellow">
<!--                {{noteId}}-->
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
            </p>
        </div>
        <div class="box">
            <p>数据流目的节点ID</p>
            <p style="text-align: center;background-color: green;color: yellow">9</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "NodeId",
    data(){
        return{
            // noteId:this.$global.defaultId,
            ids:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
            defaultValue:this.$global.defaultId,
            timer:'',
            width:50,
            switchValue:true
        }
    },
    methods:{
        getNodeInformation(id){
            console.log(id)
            console.log("get page2 data",id);
            this.$global.defaultId=id;
            // /* 发送数据到服务器 */
            this.$socket.emit('get page2 data',id);
        },
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
    mounted() {
        if(this.timer){
            clearInterval(this.timer)
        }
        else {
            this.timer = setInterval(()=>{
                this.getNodeInformation(this.defaultValue)
            },2000)
        }
    },
    destroyed() {
        clearInterval(this.timer)
    },
    created() {
        this.noteId = this.$global.defaultId;
        this.getNodeInformation(this.noteId)
    }
}
</script>

<style scoped>
.id{
    background: url("../../../assets/images/border.png") no-repeat;
    background-size: 100% 100% ;
    width: 100%;
    height: 100%;
}
.id div{
    float: left;
    font-size: 0.08rem;
    font-weight: bold;

}
.box{
    margin-left: 0.2rem;
    margin-top: 0.2rem;
    width: 30%;
    color: #00B0F0;
    float: left;
    text-align: center;
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
    margin-left: -2%;
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