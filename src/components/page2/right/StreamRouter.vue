<template>
    <div class="router">
        <div style="margin-left: 0.3rem;">
            <div class="left">
                <div>路由方法</div>
                <div>端到端跳数</div>
                <div>端到端时延</div>
                <div>端到端最小剩余电量</div>
                <div>初始</div>
                <div>当前</div>
            </div>
            <div class="right">
                <div class="methods">
                    <div style="">
                        <div>
                            <div style="background-color: #B4C7E7;color: black">最短路径</div>
                            <div>
                                <i class="el-icon-back"></i>
                                20s
                                <i class="el-icon-right"></i>
                            </div>
                        </div>
                        <div>
                            <div  style="background-color: #8FAADC;color: orange">最短时延</div>
                            <div>
                                <i class="el-icon-back"></i>
                                20s
                                <i class="el-icon-right"></i>
                            </div>
                        </div>
                        <div>
                            <div style="background-color: #2F5579;color: white">最小能耗</div>
                            <div>
                                <i class="el-icon-back"></i>
                                20s
                                <i class="el-icon-right"></i>
                            </div>
                        </div>
                        <div  style="width: 40%">
                            <div style="background-color: #203864;color: white">干扰区域规避</div>
                            <div>
                                <i class="el-icon-back"></i>
                                40s
                                <i class="el-icon-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line_chart">
                    <div class="chart" id="hop"></div>
                    <div class="chart" id="delay"></div>
                    <div class="chart" id="power"></div>
                </div>
                <div class="graph_chart">
                    <div style="margin-top: 300px;width:80%;height: 100px" id="graph1"></div>
                    <div style="width:80%;height: 100px" id="graph2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StreamRouter",
    data(){
        return{
            value:0,
            values:[1,2,3,4,5,6],
            nodes:{
                init_nodes: [],
                current_nodes:[],
            },
            countData: {
                data1: [],
                data2: []
            }
        }
    },
    methods:{
        echartsInit(nodes,elementId){
            var myChart = this.$echarts.init(document.getElementById(elementId));
            //配置图表
            const axisData = nodes;
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
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: axisData,
                    show:false,
                    // inverse:true
                },
                yAxis: {
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
                        // itemStyle:{
                        //     color:'lightgreen'
                        // },
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
            myChart.setOption(option);
        },
        echartsInit2(elementid,data,lineColor,nodeColor,bgColor){
            if (document.getElementById(elementid) == null) {
                return
            }
            this.$echarts.dispose(document.getElementById(elementid))
            var myChart = this.$echarts.init(document.getElementById(elementid));
            var option = {
                xAxis: {
                    type: 'category',
                    //最多容纳
                    data: [1,2,3,4,5,6,7,8,9,10,11,12],
                    show: false
                },
                yAxis: {
                    type: 'value',
                    show: false
                },
                animation:false,
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
        test(value){
            console.log(value)
        },
        graphInitAll(){
            this.echartsInit(this.nodes.init_nodes,'graph1')
            this.echartsInit(this.nodes.current_nodes,'graph2')
         },
        lineInitAll(){
            this.echartsInit2('hop',this.countData.data1,'#366BA9','#269BFF','#194585')
            this.echartsInit2('delay',this.countData.data2,'#17FEB8','#1EFDB8','#106668')
            this.echartsInit2('power',this.countData.data1,'#366BA9','#269BFF','#194585')
        }
    },
    sockets: {
        /* 监听消息事件 */
        nodes:function(data){
            // console.log("data 数据返回 = >", data);
            this.nodes = data;
            this.graphInitAll()
        },
        countData:function (data) {
            this.countData = data;
            this.lineInitAll()
        }
    },
    mounted() {
        this.graphInitAll()
        this.lineInitAll()
    }
}
</script>

<style scoped>
.router{
    background: url("../../../assets/images/border.png") no-repeat;
    background-size: 100% 100% ;
    width: 100%;
    height: 100%;
}
.left{
    color: #00B0F0;
    font-size: 0.08rem;
    width: 10%;
    height: 100%;
    float: left;
}
.left div{
    width: 100%;
    text-align: center;

    margin-top: 0.3rem;
}
.right{
    float: left;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
    width: 80%;
    height: 100%;
    /*background-color: yellow;*/
}
.methods{
    width: 100%;
    height: 100%;
    font-size: 0.1rem;
}
.methods div div{
    float: left;
    width: 20%;
    /*height: 20%;*/

}
.methods div div div{
    width: 100%;
    text-align: center;
    color: white;
    border:1px solid skyblue;
}
i{
    width: 30%;
}
.graph_chart{
    margin-top: -80%;
    width: 100%;
}
.line_chart{
    margin-top: 10%;
    margin-left: -10%;
    width: 100%;
    height: 900px;
}
.chart{
    width: 100%;
    margin-left: 5%;
    height: 8.5%;
    margin-top:0.2rem;
}
</style>
