<template>
    <div class="delay">
        <div class="title">9种任务端端时延</div>
        <div class="chart" id="delay1"></div>
        <div class="chart" id="delay2"></div>
        <div class="chart" id="delay3"></div>
        <div class="chart" id="delay4"></div>
        <div class="chart" id="delay5"></div>
        <div class="chart" id="delay6"></div>
        <div class="chart" id="delay7"></div>
        <div class="chart" id="delay8"></div>
        <div class="chart" id="delay9"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            relayData:{
                data1: [],
                data2: []
            }
        }
    },
    methods:{
        echartsInit(elementid,data,lineColor,nodeColor,bgColor){
            if (document.getElementById(elementid) == null) {
                return
            }
            this.$echarts.dispose(document.getElementById(elementid))
            var myChart = this.$echarts.init(document.getElementById(elementid));
            var option = {
                xAxis: {
                    type: 'category',
                    data: [1,2,3,4,5,6,7,8,9,10,11,12],
                    show: false
                },
                yAxis: {
                    type: 'value',
                    show: false
                },
                series: [
                    {
                        data: data,
                        type: 'line',
                        smooth: 0.3,
                        lineStyle:{
                            // color:'#366BA9'
                            color:lineColor
                        },
                        symbol:'circle',
                        symbolSize:[10,5],
                        itemStyle:{
                            color:nodeColor
                        },
                        areaStyle: {
                            opacity: 0.8,
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: bgColor
                                },
                                {
                                    offset: 1,
                                    color: '#07163F'
                                }
                            ])
                        }
                    }
                ],
                grid: {
                    // containLabel: true,
                    top:"3",
                    left:"0",
                    bottom:"3",
                    right:'0'
                },
            };
            myChart.setOption(option)
        },
        echartsInitAll(){
            this.echartsInit('delay1',this.relayData.data1,'#366BA9','#269BFF','#194585')
            this.echartsInit('delay3',this.relayData.data1,'#366BA9','#269BFF','#194585')
            this.echartsInit('delay5',this.relayData.data1,'#366BA9','#269BFF','#194585')
            this.echartsInit('delay7',this.relayData.data1,'#366BA9','#269BFF','#194585')
            this.echartsInit('delay9',this.relayData.data1,'#366BA9','#269BFF','#194585')
            this.echartsInit('delay2',this.relayData.data2,'#17FEB8','#1EFDB8','#106668')
            this.echartsInit('delay4',this.relayData.data2,'#17FEB8','#1EFDB8','#106668')
            this.echartsInit('delay6',this.relayData.data2,'#17FEB8','#1EFDB8','#106668')
            this.echartsInit('delay8',this.relayData.data2,'#17FEB8','#1EFDB8','#106668')
        }
    },
    sockets: {
        /* 监听消息事件 */
        relayData:function(data){
            // console.log("data 数据返回 = >", data);
            this.relayData = data;
            this.echartsInitAll()
        },
    },
    mounted() {
        this.echartsInitAll()
    }
}
</script>

<style scoped>
.delay{
    background: url("../../../assets/images/border.png") no-repeat;
    background-size: 100% 100% ;
    font-size: 0.08rem;
    width: 100%;
    height: 100%;
}
.title{
    color:#00B0ED;
    font-size: 0.07rem;
    width: 100%;
    margin-top: 0.05rem;
    text-align: center;
}
.chart{
    width: 90%;
    margin-left: 5%;
    height: 8.5%;
    margin-top: 0.5%;
}
</style>