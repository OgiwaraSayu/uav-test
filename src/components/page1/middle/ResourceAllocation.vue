<template>
    <div class="resource">
        <div class="title">
            资源分配状态
        </div>
        <div class="left" style="float: left">
            <div class="left_top" style="margin-top: 0">已分时隙</div>
            <div class="left_middle">剩余时隙</div>
            <div class="left_bottom">包到达率</div>
        </div>
        <div class="chart" id="resource1"></div>
        <div class="chart" id="resource2"></div>
        <div class="chart" id="resource3"></div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            data1:[1,1,1,1,1,1,1,1,1,1,1,0.5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            data2:[1,1,1,1,1,1,1,1,1,1,1,0,0.5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            data3:[1,1,1,1,1,1,1,1,1,1,1,0.5,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        }
    },
    methods: {
        echartsInit(elementid,data,color){
            var myChart = this.$echarts.init(document.getElementById(elementid));
            //配置图表
            var option = {
                xAxis: {
                    show: false,
                    type: 'category',
                },
                yAxis: {
                    show: false,
                    type: 'value'
                },
                series: [
                    {
                        data: data,
                        type: 'bar',
                        barWidth:5,
                        itemStyle:{
                            borderRadius:[3]
                        }
                    }
                ],
                grid: {
                    // containLabel: true,
                    top:"0px",
                    left:"0px",
                    bottom:"0px",
                    right:'0px'
                },
                color:[color]
            };
            myChart.setOption(option);
        },

    },
    mounted(){
        this.echartsInit('resource1',this.data1,'#1597E7');
        this.echartsInit('resource2',this.data2,'#5B69DD');
        this.echartsInit('resource3',this.data3,'#1BCCA8');
    },
}
</script>

<style scoped>
.resource{
    background: url("../../../assets/images/border.png") no-repeat;
    background-size: 100% 100% ;
    width: 100%;
    height: 100%;

}
.title{
    color:#00B0ED;
    /*color:rgba(14,253,255,1);*/
    font-size: 0.07rem;
    width: 100%;
    margin-top: 0.05rem;
    text-align: center;
}
/*.font{*/
/*    color:rgba(14,253,255,1);*/
/*    font-size: 15px;*/
/*}*/
.left{
    margin-top: 0.13rem;
    margin-left: 0.1rem;
    width: 0.15rem;
}
.left div{
    margin-top: 0.1rem;
    font-size: 0.06rem;
    font-weight: bold;
}
.left_top{
    color: #1597E7;
}
.left_middle{
    color: #5B69DD;
}
.left_bottom{
    color: #1BCCA8;
}
.chart{
    float:left;
    width: 90%;
    height: 22%;
    margin-top: 0.05rem
}
</style>