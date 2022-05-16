<template>
    <div>
        <div id="topological" style="width: 1300px;height: 700px"></div>
    </div>
</template>

<script>
export default {
    name: "TopologicalGraph",
    methods:{
        echartsInit(){
            var myChart = this.$echarts.init(document.getElementById("topological"));
            //配置图表
            var symbols=['circle','rect','roundRect','diamond','triangle'];
            var colors = ['red','orange','green','blue','purple','black']
            var option = {
                legend: [{
                    data: ["簇1", "簇2", "簇3", "簇4", "簇5"]
                }],
                animationDuration: 1500,
                animationEasingUpdate: "quinticInOut",
                series: [{
                    name: "Les Miserables",
                    type: "graph",
                    layout: "none",
                    edgeSymbol:["arrow","arrow"],
                    symbolOffset:[0,0],
                    data: [{
                        id:"0",
                        name:"节点0",
                        symbolSize:32,
                        x:0,
                        y:-1,
                        // value:33,
                        category: 0,
                        symbol:symbols[0],
                        itemStyle:{
                            color:colors[0]
                        }
                    },
                        {
                            id:"1",
                            name:"节点1",
                            symbolSize:32,
                            x:3.5,
                            y:-0.5,
                            category: 1,
                            symbol:symbols[1],
                        },
                        {
                            id:"2",
                            name:"节点2",
                            symbolSize:32,
                            x:1.5,
                            y:0.5,
                            category: 2,
                            symbol:symbols[2],
                            itemStyle:{
                                color:colors[2]
                            }
                        },
                        {
                            id:"3",
                            name:"节点3",
                            symbolSize:32,
                            x:-1.5,
                            y:1,
                            category: 3,
                            symbol:symbols[3],
                            itemStyle:{
                                color:colors[3]
                            }
                        },
                        {
                            id:"4",
                            name:"节点4",
                            symbolSize:32,
                            x:-2,
                            y:0,
                            category: 4,
                            symbol:symbols[4],
                            itemStyle:{
                                color:colors[4]
                            }
                        },
                        {
                            id:"5",
                            name:"节点5",
                            symbolSize:32,
                            x:-1,
                            y:-2,
                            category: 0,
                            symbol:symbols[0],
                            itemStyle:{
                                color:colors[0]
                            }
                        },
                        {
                            id:"6",
                            name:"节点6",
                            symbolSize:32,
                            x:-2,
                            y:-2,
                            category: 0,
                            symbol:symbols[0],
                            itemStyle:{
                                color:colors[0]
                            }
                        },
                        {
                            id:"7",
                            name:"节点7",
                            symbolSize:32,
                            x:-3,
                            y:-2,
                            category: 0,
                            symbol:symbols[0],
                            itemStyle:{
                                color:colors[0]
                            }
                        },
                        {
                            id:"8",
                            name:"节点8",
                            symbolSize:32,
                            x:-4,
                            y:-2,
                            category: 0,
                            symbol:symbols[0],
                            itemStyle:{
                                color:colors[0]
                            }
                        },
                        {
                            id:"9",
                            name:"节点9",
                            symbolSize:32,
                            x:1,
                            y:-2,
                            category: 1,
                            symbol:symbols[1],
                            itemStyle:{
                                color:colors[1]
                            }
                        },
                        {
                            id:"10",
                            name:"节点10",
                            symbolSize:32,
                            x:2,
                            y:-2,
                            category: 1,
                            symbol:symbols[1],
                            itemStyle:{
                                color:colors[1]
                            }
                        },
                        {
                            id:"11",
                            name:"节点11",
                            symbolSize:32,
                            x:3,
                            y:-2,
                            category: 1,
                            symbol:symbols[1],
                            itemStyle:{
                                color:colors[1]
                            }
                        },
                        {
                            id:"12",
                            name:"节点12",
                            symbolSize:32,
                            x:4,
                            y:-2,
                            category: 1,
                            symbol:symbols[1],
                            itemStyle:{
                                color:colors[1]
                            }
                        },
                        {
                            id:"13",
                            name:"节点13",
                            symbolSize:32,
                            x:1,
                            y:2,
                            category: 2,
                            symbol:symbols[2],
                            itemStyle:{
                                color:colors[2]
                            }
                        },
                        {
                            id:"14",
                            name:"节点14",
                            symbolSize:32,
                            x:2,
                            y:2,
                            category: 2,
                            symbol:symbols[2],
                            itemStyle:{
                                color:colors[2]
                            }
                        },
                        {
                            id:"15",
                            name:"节点15",
                            symbolSize:32,
                            x:3,
                            y:2,
                            category: 2,
                            symbol:symbols[2],
                            itemStyle:{
                                color:colors[2]
                            }
                        },
                        {
                            id:"16",
                            name:"节点16",
                            symbolSize:32,
                            x:4,
                            y:2,
                            category: 2,
                            symbol:symbols[2],
                            itemStyle:{
                                color:colors[2]
                            }
                        },
                        {
                            id:"17",
                            name:"节点17",
                            symbolSize:32,
                            x:-1,
                            y:2,
                            category: 3,
                            symbol:symbols[3],
                            itemStyle:{
                                color:colors[3]
                            }
                        },
                        {
                            id:"18",
                            name:"节点18",
                            symbolSize:32,
                            x:-2,
                            y:2,
                            category: 3,
                            symbol:symbols[3],
                            itemStyle:{
                                color:colors[3]
                            }
                        },
                        {
                            id:"19",
                            name:"节点19",
                            symbolSize:32,
                            x:-3,
                            y:2,
                            category: 3,
                            symbol:symbols[3],
                            itemStyle:{
                                color:colors[3]
                            }
                        },
                        {
                            id:"20",
                            name:"节点20",
                            symbolSize:32,
                            x:-4,
                            y:2,
                            category: 3,
                            symbol:symbols[3],
                            itemStyle:{
                                color:colors[3]
                            }
                        },
                        {
                            id:"21",
                            name:"节点21",
                            symbolSize:32,
                            x:-3,
                            y:0.5,
                            category: 4,
                            symbol:symbols[4],
                            itemStyle:{
                                color:colors[4]
                            }
                        },
                        {
                            id:"22",
                            name:"节点22",
                            symbolSize:32,
                            x:-3,
                            y:-1,
                            category: 4,
                            symbol:symbols[4],
                            itemStyle:{
                                color:colors[4]
                            }
                        },
                        {
                            id:"23",
                            name:"节点23",
                            symbolSize:32,
                            x:-3,
                            y:1,
                            category: 4,
                            symbol:symbols[4],
                            itemStyle:{
                                color:colors[4]
                            }
                        }],
                    links: [
                        {
                            source: "0",
                            target: "1",
                            lineStyle:{
                                color:colors[5],
                                dashOffset:30,
                            }
                        },
                        {
                            source: "1",
                            target: "2",
                            lineStyle:{
                                color:colors[5]
                            }
                        },
                        {
                            source: "2",
                            target: "3",
                            lineStyle:{
                                color:colors[5]
                            }
                        },
                        {
                            source: "3",
                            target: "4",
                            lineStyle:{
                                color:colors[5]
                            }
                        },
                        {
                            source: "4",
                            target: "0",
                            lineStyle:{
                                color:colors[5]
                            }
                        },
                        {
                            source: "5",
                            target: "0",
                            lineStyle:{
                                color:colors[0]
                            }
                        },
                        {
                            source: "6",
                            target: "0",
                            lineStyle:{
                                color:colors[0]
                            }
                        },
                        {
                            source: "7",
                            target: "0",
                            lineStyle:{
                                color:colors[0]
                            }
                        },
                        {
                            source: "8",
                            target: "0",
                            lineStyle:{
                                color:colors[0]
                            }
                        },
                        {
                            source: "9",
                            target: "1",
                            lineStyle:{
                                color:colors[1]
                            }
                        },
                        {
                            source: "10",
                            target: "1",
                            lineStyle:{
                                color:colors[1]
                            }
                        },
                        {
                            source: "11",
                            target: "1",
                            lineStyle:{
                                color:colors[1]
                            }
                        },
                        {
                            source: "12",
                            target: "1",
                            lineStyle:{
                                color:colors[1]
                            }
                        },
                        {
                            source: "13",
                            target: "2",
                            lineStyle:{
                                color:colors[2]
                            }
                        },
                        {
                            source: "14",
                            target: "2",
                            lineStyle:{
                                color:colors[2]
                            }
                        },
                        {
                            source: "15",
                            target: "2",
                            lineStyle:{
                                color:colors[2]
                            }
                        },
                        {
                            source: "16",
                            target: "2",
                            lineStyle:{
                                color:colors[2]
                            }
                        },
                        {
                            source: "17",
                            target: "3",
                            lineStyle:{
                                color:colors[3]
                            }
                        },
                        {
                            source: "18",
                            target: "3",
                            lineStyle:{
                                color:colors[3]
                            }
                        },
                        {
                            source: "19",
                            target: "3",
                            lineStyle:{
                                color:colors[3]
                            }
                        },
                        {
                            source: "20",
                            target: "3",
                            lineStyle:{
                                color:colors[3]
                            }
                        },
                        {
                            source: "21",
                            target: "4",
                            lineStyle:{
                                color:colors[4]
                            }
                        },
                        {
                            source: "22",
                            target: "4",
                            lineStyle:{
                                color:colors[4]
                            }
                        },
                        {
                            source: "23",
                            target: "4",
                            lineStyle:{
                                color:colors[4]
                            }
                        }],
                    categories: [{
                        name: "簇1",
                        itemStyle:{
                            color:colors[0]
                        }
                    }, {
                        name: "簇2",
                        itemStyle:{
                            color:colors[1]
                        }
                    }, {
                        name: "簇3",
                        itemStyle:{
                            color:colors[2]
                        }
                    }, {
                        name: "簇4",
                        itemStyle:{
                            color:colors[3]
                        }
                    }, {
                        name: "簇5",
                        itemStyle:{
                            color:colors[4]
                        }
                    }],
                    // legendHoverLink: true,
                    label:{
                        show:true
                    }
                }]
            }
            myChart.setOption(option);
        }
    },
    mounted() {
        this.echartsInit()
    }
}
</script>

<style scoped>

</style>