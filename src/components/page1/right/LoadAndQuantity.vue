<template>
    <div class="load_and_quantity">
        <div>
            <div class="font">
                <p>负载</p>
                <p>{{powerData.data1}}%</p>
            </div>
            <div class="font" style="color: red">
                <p>电量</p>
                <p>{{powerData.data2}}%</p>
            </div>
        </div>
        <div class="clear"></div>
        <div id="load" class="chart"></div>
        <div id="quantity" class="chart"></div>
    </div>
</template>

<script>
export default {
    name: "LoadAndQuantity",
    data(){
        return{
            powerData:{
                data1:50,
                data2:30
            }
        }
    },
    methods: {
        echartsInit1(data){
            if (document.getElementById('load') == null) {
                return
            }
            this.$echarts.dispose(document.getElementById('load'))
            var myChart = this.$echarts.init(document.getElementById('load'));
            //配置图表
            // Generate data
            let category = ['left','right'];
            let max = [100,100];
            let lineData = [data,data];
            // option
            var option = {
                // backgroundColor: '#0f375f',
                xAxis: {
                    show: false,
                    data: category,
                },
                yAxis: {
                    show: false,
                },
                animation:false,
                series: [
                    {
                        name: 'dotted',
                        type: 'pictorialBar',
                        symbol: 'rect',
                        // showBackground: true,
                        itemStyle: {
                            color: '#3793E7'
                        },
                        symbolRepeat: true,
                        symbolSize: [20, 2],
                        symbolMargin: '0.5', //图形垂直间隔
                        z: -10,
                        data: max,

                    },
                    {
                        name: 'dotted2',
                        type: 'pictorialBar',
                        symbol: 'rect',
                        itemStyle: {
                            color: '#633EC4'
                        },
                        symbolRepeat: true,
                        symbolSize: [20, 2],
                        symbolMargin: '0.5',
                        z: -5,
                        data: lineData
                    }
                ]
            };
            myChart.setOption(option);
        },
        echartsInit2(data) {
            if (document.getElementById('quantity') == null) {
                return
            }
            this.$echarts.dispose(document.getElementById('quantity'))
            var myChart = this.$echarts.init(document.getElementById('quantity'));
            //配置图表
            // Generate data
            let category = ['power'];
            let max = [100];
            let lineData = [data];
            // option
            var option = {
                xAxis: {
                    show: false,
                    data: category,
                },
                yAxis: {
                    show: false,
                },
                animation:false,
                series: [
                    {
                        name: 'dotted',
                        type: 'pictorialBar',
                        symbol: 'rect',
                        // showBackground: true,
                        itemStyle: {
                            color: 'red'
                        },
                        symbolRepeat: true,
                        symbolSize: [20, 2],
                        symbolMargin: '0.5', //图形垂直间隔
                        z: -10,
                        data: max,

                    },
                    {
                        name: 'dotted2',
                        type: 'pictorialBar',
                        symbol: 'rect',
                        itemStyle: {
                            color: 'yellow'
                        },
                        symbolRepeat: true,
                        symbolSize: [20, 2],
                        symbolMargin: '0.5',
                        z: -5,
                        data: lineData
                    }
                ]
            };
            myChart.setOption(option);
        },
        echartsInitAll(){
            this.echartsInit1(this.powerData.data1);
            this.echartsInit2(this.powerData.data2);
        }
    },
    sockets: {
        /* 监听消息事件 */
        powerData:function(data){
            console.log("data 数据返回 = >", data);
            this.powerData = data;
            this.echartsInitAll()
        },
    },
}
</script>

<style scoped>
.load_and_quantity{
    background: url("../../../assets/images/border.png") no-repeat;
    background-size: 100% 100% ;
    font-size: 0.08rem;
    width: 100%;
    height: 100%;
}
.font{
    color: #633EC4;
    font-weight: bold;
    margin-top: 0.1rem;
    margin-left: 0.4rem;
    float:left;
}
.chart{
    width: 0.2rem;
    height: 1rem;
    margin-top: -0.15rem;
    margin-left: 0.38rem;
    float: left
}
</style>