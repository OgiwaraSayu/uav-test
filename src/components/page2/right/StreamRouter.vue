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

                </div>
                <div class="graph_chart">
                    <div style="margin-top: 300px;width: 500px;height: 100px" id="graph1"></div>
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
            nodes: [1,2,3,4,5,6,7]
        }
    },
    methods:{
        echartsInit(nodes){
            // if (document.getElementById('grahp1') == null) {
            //     return
            // }
            // this.$echarts.dispose(document.getElementById('graph1'))
            var myChart = this.$echarts.init(document.getElementById('graph1'));
            //配置图表
            const axisData = nodes;
            const data = axisData.map(function (item, i) {
              // return Math.round(Math.random() * 1000 * (i + 1));
                return i%2?1:0
            });
            // const data = [1,Math.random(),Math.random(),Math.random(),Math.random(),Math.random(),Math.random()]
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
                    show:false
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
                        itemStyle:{
                            color:'lightgreen'
                        },
                        data: data,
                        links: links,
                        lineStyle: {
                            color: 'white'
                        }
                    }
                ]
            };
            myChart.setOption(option);
        },
        test(value){
            console.log(value)
        }
    },
    mounted() {
        this.echartsInit(this.nodes)
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
    width: 85%;
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
    width: 100%;
}

/*.el-select,*/
/*.el-select-dropdown,*/
/*.el-scrollbar,*/
/*.el-select-dropdown__wrap,*/
/*.el-scrollbar__view,*/
/*.el-select-dropdown__item:hover {*/
/*    background-color: #baf;*/
/*}*/

</style>
<style lang="scss">
$focus_color: #3296E1;
.statictis-select{
    /deep/.el-input__inner{
        background-color: #112E49;
        color: #ffffff
    }
    .el-input__inner{
        border-color: $focus_color;
    }

    &:hover .el-input__inner{
        border-color: $focus_color;
    }

    &-popper{
        border: 1px solid $focus_color;
        border-radius: 4px;
        overflow: hidden;

        &[x-placement^=bottom]{
            margin-top: 4px;
        }

        .el-scrollbar{
            background-color: #112E49;
        }

        .el-select-dropdown__item{
            height: 26px;
            line-height: 26px;
            padding: 0 12px;
            font-size: 12px;
            color: #ffffff;
            position: relative;
            text-align: center;
        }
        .el-select-dropdown__item::after{
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 10px;
            width: calc(100% - 20px);
            height: 1px;
            //background-image: url(../../assets/images/horizontal_line.png);
            background-repeat: no-repeat;
            background-size: cover;
        }

        .el-select-dropdown__item:last-child::after{
            display: none;
        }

        .el-select-dropdown__item.selected{
            color: $focus_color;
        }
        .el-select-dropdown__item.hover{
            background-color: #112E49;
            color: $focus_color;
        }
        .popper__arrow{
            display: none;
        }
    }
}
</style>