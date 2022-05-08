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
          data:[10,20,10,20,30,40,10]
      }
    },
    methods: {
        echartsInit(){
            var myChart1 = this.$echarts.init(document.getElementById('frequency1'));
            var myChart2 = this.$echarts.init(document.getElementById('frequency2'));
            var myChart3 = this.$echarts.init(document.getElementById('frequency3'));
            //配置图表
            var option = {
                backgroundColor:'#01133B',
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                        data: this.data,
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
            myChart1.setOption(option);
            myChart2.setOption(option);
            myChart3.setOption(option);
        },
    },
    mounted() {
        this.echartsInit();
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
    width:85%;
    height: 20%;
    margin-left: 0.05rem
}
</style>