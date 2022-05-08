<template>
    <div class="node">
        <div class="top_left">
            <p>节点ID</p>
            <p style="text-align: center;background-color: purple">6</p>
        </div>
        <div class="top_right">
            <p>节点角色</p>
            <p></p>
        </div>
        <div style="clear: both;"></div>
        <div class="bottom_left">
            <p>入网时间</p>
            <p>23917</p>
        </div>
        <div class="bottom_middle">
            <p>当前频段</p>
            <p>1651</p>
        </div>
        <div class="bottom_right">
            <p>当前簇</p>
            <p>1316</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "NodeInformation",
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
    margin-left: 0.2rem;
    margin-top: 0.2rem;
    color: #00B0F0;
}
.top_right{
    margin-left: 0.3rem;
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
</style>