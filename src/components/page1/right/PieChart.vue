<template>
    <div class="pie">
        <div class="left">
            <div class="font">波束方向</div>
            <div class="font">仿真时间</div>
            <div class="font">发送速率</div>
        </div>
        <div class="right">
            <div class="chart" id="pie1"></div>
            <div class="chart2" id="pie2"></div>
            <div class="chart2" id="pie3"></div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            // data1:[1,1,1,1,1,1,1,1,1,1,1,0,0.5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            data2:[36],
            data3:[1,1,1,1,1,1,1,1,1,1,1,0.5,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        }
    },
    methods: {
        echartsInit1(){
            var myChart = this.$echarts.init(document.getElementById('pie1'));
            //配置图表
            var option = {
                color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
                radar: [
                    {
                        indicator: [
                            { text: '1' },
                            { text: '2' },
                            { text: '3' },
                            { text: '4' },
                            { text: '5' }
                        ],
                        center: ['25%', '50%'],
                        radius: 40,
                        startAngle: 90,
                        splitNumber: 4,
                        // shape: 'circle',
                        axisName: {
                            // formatter: '【{value}】',
                            color: '#428BD4'
                        },
                        splitArea: {
                            areaStyle: {
                                color: ['#0A2357', '#0A2357', '#0A2357', '#01173E'],
                                shadowColor: 'rgba(0, 0, 0, 0.2)',
                                shadowBlur: 10
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(211, 253, 250, 0.8)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: 'rgba(211, 253, 250, 0.8)'
                            }
                        }
                    },
                ],
                series: [
                    {
                        type: 'radar',
                        emphasis: {
                            lineStyle: {
                                width: 4
                            }
                        },
                        data: [
                            {
                                value: [100, 8, 0.4, -80, 2000],
                                name: 'Data A'
                            },
                            {
                                value: [60, 5, 0.3, -100, 1500],
                                name: 'Data B',
                                areaStyle: {
                                    color: 'rgba(255, 228, 52, 0.6)'
                                }
                            }
                        ]
                    },

                ]
            };
            myChart.setOption(option);
        },
        echartsInit2(){
            var myChart = this.$echarts.init(document.getElementById('pie2'));
            //配置图表
            var option = {
                series: [
                    {
                        itemStyle: {
                            normal: {
                                borderWidth: 1,//边际线大小
                                borderColor:'#00ffff',//边界线颜色
                                areaColor:'#09295b'//默认区域颜色
                            },
                        },
                        name: 'Pressure',
                        type: 'gauge',
                        //进度条
                        progress: {
                            show: true,
                            itemStyle:{
                                color:'#3AC0A4'
                            },
                            roundCap:true,
                            width:3
                        },
                        //分割线
                        splitLine: {
                            show: false
                        },
                        min:0,
                        max:36,
                        //刻度
                        axisTick: {
                            show: false,
                        },
                        //刻度标签
                        axisLabel: {
                            show: false,
                            // formatter: '{value}'
                        },
                        pointer:{
                            show:false,
                        },
                        axisLine: {
                            lineStyle: {
                              // color: [[1, '#000']],
                              width: 3
                            }
                        },
                        anchor:{
                            show: true,
                            offsetCenter: ['0', "-10"],
                            icon:"image://https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/167-512.png",
                            size:25
                        },
                        data: [
                            {
                                value: this.data2,
                            }
                        ],
                        detail:{
                            fontSize: 15,
                            textStyle:{
                                color:'#3AC0A4'
                            }
                        },
                        animation: true
                    }
                ]
            };
            myChart.setOption(option);
        },
        echartsInit3(){
            var myChart = this.$echarts.init(document.getElementById('pie3'));
            //配置图表
            var option = {
                series: [
                    {
                        name: '发送速率',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            color: '#769FFD'
                        },
                        label: {
                            show: true,
                            position: 'center',
                            formatter: '{style2|{c}}\n{style1|{b}}',
                            rich: {
                                style1: {
                                    color: '#fff',
                                    fontSize:10
                                },
                                style2: {
                                    color: '#58C5C7',
                                    fontSize:15
                                },},
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 64, name: '???' },
                        ]
                    }
                ]
            };
            myChart.setOption(option);
        },

    },
    mounted(){
        this.echartsInit1();
        this.echartsInit2();
        this.echartsInit3();
    },
}
</script>

<style scoped>
.pie{
    background: url("../../../assets/images/border.png") no-repeat;
    background-size: 100% 100% ;
    font-size: 0.08rem;
    width: 100%;
    height: 100%;
}
.chart{
    margin-left: 10%;
    margin-top: 10%;
    width: 120%;
    height: 33%;
}
.chart2{
    margin-left: 10%;
    margin-top: -10%;
    width: 70%;
    height: 33%;
}
.left{
    width: 30%;
    height: 100%;
}
.right{
    width: 70%;
    height: 100%;
}
.font{
    color:#00B0E6;
    font-size: 0.07rem;
    margin-left: 0.1rem;
    margin-top: 0.45rem;
}
</style>