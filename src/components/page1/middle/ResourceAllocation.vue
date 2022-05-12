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
            resourceData:{
                data1:[],
                data2:[],
                data3:[]
            }
        }
    },
    methods: {
        echartsInit(elementid,data,color){
            if (document.getElementById(elementid) == null) {
                return
            }
            this.$echarts.dispose(document.getElementById(elementid))
            var myChart = this.$echarts.init(document.getElementById(elementid));
            //配置图表
            var option = {
                xAxis: {
                    show: false,
                    type: 'category',
                    data:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
                },
                yAxis: {
                    show: false,
                    type: 'value'
                },
                series: [
                    {
                        data: data,
                        type: 'bar',
                        barWidth:"30%",
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
        echartsInitAll() {
            this.echartsInit('resource1',this.resourceData.data1,'#1597E7');
            this.echartsInit('resource2',this.resourceData.data2,'#5B69DD');
            this.echartsInit('resource3',this.resourceData.data3,'#1BCCA8');
        }
    },
    sockets: {
        /* 监听消息事件 */
        resourceData:function(data){
            // console.log("data 数据返回 = >", data);
            this.resourceData = data;
            this.echartsInitAll()
        },
    },
    mounted(){
        this.echartsInitAll()
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
    font-size: 0.08rem;
    width: 100%;
    margin-top: 0.05rem;
    text-align: center;
}
.left{
    margin-top: 0.07rem;
    margin-left: 0.5rem;
    width: 0.15rem;
}
.left div{
    margin-top: 0.07rem;
    font-size: 0.07rem;
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
    width: 50%;
    margin-left: 5%;
    height: 22%;
    margin-top: 0.04rem
}
</style>