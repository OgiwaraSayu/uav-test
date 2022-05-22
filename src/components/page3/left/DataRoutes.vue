<template>
    <div class="routes">
        <div style="width: 95%;height:95%;background-color: #073162;margin-left: 2.5%;margin-top: 2.5%">
            <div class="font">Oment端数据路径</div>
            <div style="width:100%;height:100%;margin-top: -0.1rem" id="graph"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DataRoutes",
    data(){
        return{
            nodes:[],
        }
    },
    sockets: {
        /* 监听消息事件 */
        nodes:function(data){
            // console.log("data 数据返回 = >", data);
            this.nodes = data.current_nodes;
            this.echartsInit()
        },
    },
    methods:{
        echartsInit(){
            // if (document.getElementById('grahp1') == null) {
            //     return
            // }
            // this.$echarts.dispose(document.getElementById('graph1'))
            var myChart = this.$echarts.init(document.getElementById('graph'));
            //配置图表
            const axisData = this.nodes;
            const data = axisData.map(function (item, i) {
                // return Math.round(Math.random() * 1000 * (i + 1));
                return i%2?1:0
            });
            const links = data.map(function (item, i) {
                return {
                    source: i,
                    target: i + 1
                };
            });
            links.pop();
            var option = {
                yAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: axisData,
                    show:false,
                    inverse:true
                },
                xAxis: {
                    type: 'value',
                    show:false
                },
                series: [
                    {
                        type: 'graph',
                        layout: 'none',
                        coordinateSystem: 'cartesian2d',
                        symbolSize: 40,
                        label: {
                            show: true
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        lineStyle:{
                            color:'white'
                        },
                        data: data,
                        links: links,
                        itemStyle: {
                            color: function(params){
                                var colorList = ['skyblue','purple','lightgreen','yellow']
                                return colorList[params.dataIndex%4]
                            }
                        },
                        animationDuration: function (idx) {
                            // 越往后的数据时长越大
                            return idx * 400;
                        }
                    }
                ]
            };
            myChart.setOption(option)
        },
    },

}
</script>

<style scoped>
.routes{
    background: url("../../../assets/images/border.png") no-repeat;
    background-size: 100% 100% ;
    width: 100%;
    height: 100%;

}
.routes div{
    margin-top: 0.05rem;
}
.font{
    color:#00B0E6;
    font-size: 0.1rem;
    margin-left: 0.05rem;
}
</style>