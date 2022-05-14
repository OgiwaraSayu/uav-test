<template>
    <div class="pie">
        <div class="left">
            <div class="font">波束方向</div>
            <div class="font">仿真时间</div>
            <div class="font">发送速率</div>
        </div>
        <div class="right">
            <div class="chart" style="margin-top: 10%" id="pie1"></div>
            <div class="chart2" id="pie2"></div>
            <div class="chart" id="pie3"></div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            pieData:{
                data1:'',
                data2:'',
                data3:''
            }
        }
    },
    methods: {
        echartsInit1(data){
            if (document.getElementById('pie1') == null) {
                return
            }
            this.$echarts.dispose(document.getElementById('pie1'))
            var myChart = this.$echarts.init(document.getElementById('pie1'));
            //配置图表
            var option = {
                    color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
                    radar: [
                        {
                            indicator: [
                                { text: '0' },
                                { text: '30' },
                                { text: '60' },
                                { text: '90' },
                                { text: '120' },
                                { text: '150' },
                                { text: '180' },
                                { text: '210' },
                                { text: '240' },
                                { text: '270' },
                                { text: '300' },
                                { text: '330' },
                            ],
                            radius: 40,
                            startAngle: 0,
                            splitNumber: 4,
                            shape: 'circle',
                            axisName: {
                                // formatter: '【{value}】',
                                padding:-10,
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
                     animation:false,
                    series: [
                        {
                            type: 'gauge',
                            clockwise:false,
                            radius:50,
                            startAngle: 360,
                            endAngle: 0,
                            min: 0,
                            max: 360,
                            splitNumber: 12,
                            itemStyle: {
                                color: '#58D9F9',
                                shadowColor: 'rgba(0,138,255,0.45)',
                                shadowBlur: 10,
                                shadowOffsetX: 2,
                                shadowOffsetY: 2
                            },
                            progress: {
                                show: false,
                            },
                            pointer: {
                                icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
                                length: '75%',
                                width: 12,
                                offsetCenter: [0, 0]
                            },
                            axisLine: {
                                show:false,
                            },
                            axisTick: {
                                show:false,
                            },
                            splitLine: {
                                show:false,
                            },
                            axisLabel: {
                                show:false,
                                color:'red'
                            },
                            title: {
                                show: false
                            },
                            detail: {
                                show:false
                            },
                            data: [
                                {
                                    value: data
                                }
                            ]
                        },
                    ]
            }
            myChart.setOption(option);
        },
        echartsInit2(data){
            if (document.getElementById('pie2') == null) {
                return
            }
            this.$echarts.dispose(document.getElementById('pie2'))
            var myChart = this.$echarts.init(document.getElementById('pie2'));
            //配置图表
            var option = {
                series: [{
                    name: '',
                    type: 'gauge',
                    radius:'100%',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                        // formatter: '{value}'
                    },
                    pointer:{
                        show:false,
                    },
                    axisTick: {
                        show: false,
                    },
                    anchor:{
                        show: true,
                        offsetCenter: ['0', "-10"],
                        icon:"image://https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/167-512.png",
                        size:30
                    },
                    detail: {
                        formatter: '{value}',
                        textStyle:{
                            fontSize:20,
                            color:'#30D27C'
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: [
                                [1,new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    // {
                                    // offset: 0.1,
                                    // color: "#FFC600"
                                    // },
                                    {
                                        offset: 0.6,
                                        color: "#30D27C"
                                    },
                                    {
                                        offset: 1,
                                        color: "#0B95FF"
                                    }
                                ])
                                ]
                            ]
                        }
                    },
                    data: [
                        {
                            value: data,
                        }
                    ]
                }]
            };
            myChart.setOption(option);
        },
        echartsInit3(data){
            if (document.getElementById('pie3') == null) {
                return
            }
            this.$echarts.dispose(document.getElementById('pie3'))
            var myChart = this.$echarts.init(document.getElementById('pie3'));
            //配置图表
            var option = {
                animation:false,
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
                            { value: data, name: 'Mbps' },
                        ]
                    }
                ]
            };
            myChart.setOption(option);
        },
        echartsInitAll(){
            this.echartsInit1(this.pieData.data1);
            this.echartsInit2(this.pieData.data2);
            this.echartsInit3(this.pieData.data3);
        }
    },
    sockets: {
        /* 监听消息事件 */
        pieData:function(data){
            // console.log("data 数据返回 = >", data);
            this.pieData = data;
            this.echartsInitAll()
        },
    },
    mounted(){
        this.echartsInitAll()
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
    margin-top: -5%;
    width: 70%;
    height: 33%;
}
.chart2{
    margin-left: 20%;
    margin-top: -5%;
    width: 50%;
    height: 33%;
}
.left{
    width: 30%;
    height: 100%;
    float: left;
}
.right{
    width: 70%;
    height: 100%;
    float: left;
}
.font{
    color:#00B0E6;
    font-size: 0.07rem;
    margin-left: 0.1rem;
    margin-top: 0.45rem;
}
</style>