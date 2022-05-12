<template>
    <div class="id">
        <div class="box">
            <p>数据流源节点ID</p>
            <p style="text-align: center;background-color: purple;color: yellow">{{noteId}}</p>
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
            noteId:this.$global.defaultId
        }
    },
    methods:{
        getNodeInformation(id){
            console.log(id)
            console.log("get data",id);
            this.$global.defaultId=id;
            // /* 发送数据到服务器 */
            this.$socket.emit('get data',id);
        },
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

</style>