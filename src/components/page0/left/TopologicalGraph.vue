<template>
    <div>
        <div id="topological" style="width: 100%;height: 700px"></div>
    </div>
</template>

<script>
export default {
    name: "TopologicalGraph",
    data(){
        return{
            data:[{
                cluster: 0,
                frequency: 0,
                id: 0,
                location: [],
                nodeCharacter: "",
                status: 0,
                time: 0
            }],
            links:[],
            pie_24_show:0,
            pie_25_show:0,
        }
    },
    sockets: {
        /* 监听welcome事件 */
        position:function(data){
            // console.log("position = >", data);
            this.data = data[0];
            this.links = data[1];
            // console.log('this.data'+this.data[0].nodeCharacter)
            console.log(this.data)
            if(data[0][24].status === 1){
                this.pie_24_show = 1
            }else {
                this.pie_24_show = 0
            }
            if(data[0][25].status === 1){
                this.pie_25_show = 1
            }else {
                this.pie_25_show = 0
            }
            this.echartsInit()
        },

    },
    methods:{
        echartsInit(){
            var myChart = this.$echarts.init(document.getElementById("topological"));
            //配置图表
            var colors = ['red','orange','green','blue','purple','black']
            var option = {
                grid: {
                    left: '5%',
                    right: '0',
                    bottom: '5%',
                    containLabel: true
                },
                xAxis: {
                    show:false,
                    type: 'value',
                    boundaryGap: false,
                },
                yAxis: {
                    type: 'value',
                    show:false,
                },
                legend: [{
                    data: ["簇1", "簇2", "簇3", "簇4", "簇5","干扰机"]
                }],
                animationDuration: 1000,
                animationEasingUpdate: "quinticInOut",
                // animation:false,
                series: [{
                    type: "graph",
                    layout: "none",
                    coordinateSystem: 'cartesian2d',
                    edgeSymbol:["arrow","arrow"],
                    symbolOffset:[0,0],
                    data: [{
                        id:"0",
                        name:"节点0",
                        symbolSize:[60,30],
                        value:this.data[0].location,
                        category: this.data[0].cluster,
                        symbol:'image://'+require('@/assets/images/plane1.png'),
                        label:{
                            show:true,
                            position:'top',
                        }
                    },
                        {
                            id:"1",
                            name:"节点1",
                            symbolSize:[60,30],
                            value:this.data[1].location,
                            category: this.data[1].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"2",
                            name:"节点2",
                            symbolSize:[60,30],
                            value:this.data[2].location,
                            category: this.data[2].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"3",
                            name:"节点3",
                            symbolSize:[60,30],
                            value:this.data[3].location,
                            category:this.data[3].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"4",
                            name:"节点4",
                            symbolSize:[60,30],
                            value:this.data[4].location,
                            category: this.data[4].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"5",
                            name:"节点5",
                            symbolSize:[60,30],
                            value:this.data[5].location,
                            category: this.data[5].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"6",
                            name:"节点6",
                            symbolSize:[60,30],
                            value:this.data[6].location,
                            category: this.data[6].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"7",
                            name:"节点7",
                            symbolSize:[60,30],
                            value:this.data[7].location,
                            category:this.data[7].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"8",
                            name:"节点8",
                            symbolSize:[60,30],
                            value:this.data[8].location,
                            category: this.data[8].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"9",
                            name:"节点9",
                            symbolSize:[60,30],
                            value:this.data[9].location,
                            category: this.data[9].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"10",
                            name:"节点10",
                            symbolSize:[60,30],
                            value:this.data[10].location,
                            category: this.data[10].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"11",
                            name:"节点11",
                            symbolSize:[60,30],
                            value:this.data[11].location,
                            category: this.data[11].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"12",
                            name:"节点12",
                            symbolSize:[60,30],
                            value:this.data[12].location,
                            category: this.data[12].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"13",
                            name:"节点13",
                            symbolSize:[60,30],
                            value:this.data[13].location,
                            category: this.data[13].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"14",
                            name:"节点14",
                            symbolSize:[60,30],
                            value:this.data[14].location,
                            category: this.data[14].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"15",
                            name:"节点15",
                            symbolSize:[60,30],
                            value:this.data[15].location,
                            category:this.data[15].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"16",
                            name:"节点16",
                            symbolSize:[60,30],
                            value:this.data[16].location,
                            category: this.data[16].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"17",
                            name:"节点17",
                            symbolSize:[60,30],
                            value:this.data[17].location,
                            category: this.data[17].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"18",
                            name:"节点18",
                            symbolSize:[60,30],
                            value:this.data[18].location,
                            category: this.data[18].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"19",
                            name:"节点19",
                            symbolSize:[60,30],
                            value:this.data[19].location,
                            category: this.data[19].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"20",
                            name:"节点20",
                            symbolSize:[60,30],
                            value:this.data[20].location,
                            category: this.data[20].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"21",
                            name:"节点21",
                            symbolSize:[60,30],
                            value:this.data[21].location,
                            category: this.data[21].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"22",
                            name:"节点22",
                            symbolSize:[60,30],
                            value:this.data[22].location,
                            category: this.data[22].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"23",
                            name:"节点23",
                            symbolSize:[60,30],
                            value:this.data[23].location,
                            category: this.data[23].cluster,
                            symbol:'image://'+require('@/assets/images/plane1.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"24",
                            name:"节点24",
                            symbolSize:[60,30],
                            value:this.data[24].location,
                            category: 5,
                            symbol:'image://'+require('@/assets/images/plane2.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },
                        {
                            id:"25",
                            name:"节点25",
                            symbolSize:[60,30],
                            value:this.data[25].location,
                            category: 5,
                            symbol:'image://'+require('@/assets/images/plane2.png'),
                            label:{
                                show:true,
                                position:'top'
                            }
                        },

                    ],

                    // lineStyle:{
                    //     color:"source",
                    //     dashOffset:30,
                    // },
                    links:this.links,
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
                        },
                    }, {
                        name: "干扰机",
                        itemStyle: {
                            color: colors[5]
                        },
                    }],
                    // legendHoverLink: true,
                    label:{
                        show:true
                    }
                },
                {
                    //禁止hover
                    silent:true,
                    type: 'graph',
                    layout: 'none',
                    coordinateSystem: 'cartesian2d',
                    z:1,
                    data: [
                        {
                            symbolSize:[1000,1000],
                            value:this.data[24].location,
                            symbol:"image://"+require("@/assets/images/pie.png"),
                            itemStyle:{
                                opacity:this.pie_24_show
                            }
                        },
                        {
                            symbolSize:[1000,1000],
                            value:this.data[25].location,
                            symbolRotate: 180,
                            symbol:"image://"+require("@/assets/images/pie.png"),
                            itemStyle:{
                                opacity:this.pie_25_show
                            }
                        },
                    ],
                }
                ]
            }
            myChart.setOption(option);
        }
    },

}
</script>

<style scoped>

</style>