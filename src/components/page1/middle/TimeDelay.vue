<template>
    <div class="delay">
        <div class="title">任务端端时延</div>
        <div class="chart" id="delay1"></div>
        <div class="chart" id="delay2"></div>
        <div class="chart" id="delay3"></div>
        <div class="chart" id="delay4"></div>
        <div class="chart" id="delay5"></div>
        <div class="chart" id="delay6"></div>
        <div class="chart" id="delay7"></div>
        <div class="chart" id="delay8"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            data1: [0,5,2,1,6,8,4,1,7,6,5,0],
            data2: [0,5,1,2,7,4,1,4,5,7,3,6]
        }
    },
    methods:{
        chartInit(elementid,data,lineColor,nodeColor,bgColor){
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
                        smooth: true,
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
        }
    },
    mounted() {
        this.chartInit('delay1',this.data1,'#366BA9','skyblue','skyblue')
        this.chartInit('delay3',this.data1,'#366BA9','skyblue','skyblue')
        this.chartInit('delay5',this.data1,'#366BA9','skyblue','skyblue')
        this.chartInit('delay7',this.data1,'#366BA9','skyblue','skyblue')
        this.chartInit('delay2',this.data2,'#17FEB8','lightgreen','lightgreen')
        this.chartInit('delay4',this.data2,'#17FEB8','lightgreen','lightgreen')
        this.chartInit('delay6',this.data2,'#17FEB8','lightgreen','lightgreen')
        this.chartInit('delay8',this.data2,'#17FEB8','lightgreen','lightgreen')
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
    height: 10%;
    margin-top: 0.5%;
}
</style>