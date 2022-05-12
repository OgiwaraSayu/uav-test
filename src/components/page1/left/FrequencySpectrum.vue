<template>
    <div class="frequency">
        <div style="width: 95%;height:95%;background-color: #073162;margin-left: 2.5%;margin-top: 2.5%">
            <div class="font">频谱感知</div>
            <div class="chart" id="frequency1"></div>
            <div class="font">频谱预测</div>
            <div class="chart" id="frequency2"></div>
            <div class="font">智能决策</div>
            <div class="chart" id="frequency3"></div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            frequencyData:{
                data1:[],
                data2:[],
                data3:[]
            }
        }
    },

    methods: {
        echartsInit(elementId, data){
            // var myChart;
            if (document.getElementById(elementId) == null) {
                return
            }
            this.$echarts.dispose(document.getElementById(elementId));
            var myChart = this.$echarts.init(document.getElementById(elementId));
            //配置图表
            var option = {
                backgroundColor:'#01133B',
                xAxis: {
                    type: 'category',
                    data: [0,1,2,3,4,5,6,7,8,9],
                    axisLabel:{
                        show: false
                    },
                    axisLine: {
                        lintStyle:{
                            width: '2'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color: '#006CD0'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLabel:{
                        show: false
                    },
                    splitLine: {
                        show: true,
                        lineStyle:{
                            color: '#006CD0'
                        }
                    }
                },
                series: [
                    {
                        data: data,
                        type: 'bar',
                        barWidth:'10',
                        // barGap: '-100%',
                        barCategoryGap:'1%',
                        itemStyle: {
                            borderRadius: [4,4,0,0],
                            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 1, color: '#0AB76C' },
                                { offset: 0, color: '#55C7C3' }
                            ])
                        },
                    },
                ],
                grid:{ // 让图表占满容器
                    top:"0px",
                    left:"0px",
                    right:"0px",
                    bottom:"0px"
                }
            };
            myChart.setOption(option);
            // myChart.resize();
        },
        echartsInitAll(){
            this.echartsInit('frequency1',this.frequencyData.data1)
            this.echartsInit('frequency2',this.frequencyData.data2)
            this.echartsInit('frequency3',this.frequencyData.data3)
        }
    },
    sockets: {
        /* 监听消息事件 */
        frequencyData:function(data){
            // console.log("data 数据返回 = >", data);
            this.frequencyData = data;
            this.echartsInitAll()
        },
    },
    mounted() {
        this.echartsInitAll()
    }

}
</script>

<style scoped>
.frequency{
    background: url("../../../assets/images/border.png") no-repeat;
    background-size: 100% 100% ;
    width: 100%;
    height: 100%;

}
.frequency div{
    margin-top: 0.05rem;
}
.font{
    color:#00B0E6;
    font-size: 0.1rem;
    margin-left: 0.05rem;
    /*margin-top: 0.05rem;*/
}
.chart{
    width:80%;
    height: 18%;
    margin-left: 0.05rem
}
</style>