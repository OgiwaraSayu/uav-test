<template>
    <div class="bg">
        <div class="title">数据流状态驾驶舱</div>
        <div class="left">
            <div class="top_left">
                <NodeId></NodeId>
            </div>
            <div class="clear"></div>
            <div class="bottom_left">
                <FrequencySpectrum></FrequencySpectrum>
            </div>
        </div>
        <div class="right">
            <StreamRouter></StreamRouter>
        </div>
    </div>
</template>

<script>
import NodeId from "@/components/page2/left/NodeId";
import FrequencySpectrum from "@/components/page1/left/FrequencySpectrum";
import StreamRouter from "@/components/page2/right/StreamRouter";
export default {
    name: "DataStream",
    components: {StreamRouter, NodeId, FrequencySpectrum},
    created() {
        const deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
        document.documentElement.style.fontSize = deviceWidth / 768*100 + 'px';
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
}
.bottom_left{
    margin-top: 0.1rem;
    height: 2rem;
    width: 100%;
}

.right{
    margin-top: 0.1rem;
    width: 76%;
    /*background-color: red;*/
    height: 3rem;
}
</style>