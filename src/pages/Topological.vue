<template>
    <div>
        <div style="width: 80%;float: left">
            <TopologicalGraph></TopologicalGraph>
        </div>
        <div style="width: 20%;float: left">
            <NewGraph></NewGraph>
        </div>
    </div>
</template>

<script>
import TopologicalGraph from "@/components/page0/left/TopologicalGraph";
import NewGraph from "@/components/page0/right/NewGraph";
export default {
    name: "Topological",
    components: {NewGraph, TopologicalGraph},
    methods:{
        getPostion(){
            // /* 发送数据到服务器 */
            this.$socket.emit('get page0 data');
        },
    },
    created() {
        this.getPostion()
    }

}
</script>

<style scoped>

</style>