<template>
    <div class="load_and_quantity">
        <div>
            <div style="color: #633EC4;font-weight: bold;margin-top: 0.1rem;margin-left: 0.4rem">负载</div>
            <div style="color:#C00000;font-weight: bold;margin-top: 0.1rem;margin-left: 0.4rem">电量</div>
        </div>
        <div class="clear"></div>
        <div id="load" style="width: 0.3rem;height: 1.2rem;margin-top: -0.2rem;margin-left: 0.33rem;float: left"></div>
        <div id="quantity" style="width: 0.2rem;height: 1.2rem;margin-top: -0.2rem;margin-left: 0.32rem;float: left"></div>
    </div>
</template>

<script>
export default {
    name: "LoadAndQuantity",
    methods: {
        echartsInit1(){
            var myChart = this.$echarts.init(document.getElementById('load'));
            //配置图表
            // Generate data
            let category = ['left','right'];
            let max = [100,100];
            let lineData = [50,50];
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
        echartsInit2() {
            var myChart = this.$echarts.init(document.getElementById('quantity'));
            //配置图表
            // Generate data
            let category = ['power'];
            let max = [100];
            let lineData = [50];
            // option
            var option = {
                xAxis: {
                    show: false,
                    data: category,
                },
                yAxis: {
                    show: false,
                },
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
    },
    mounted(){
        this.echartsInit1();
        this.echartsInit2();
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
</style>