<template>
    <div>
        <div id="percentage" style="width: 100%;height: 300px"></div>
        <div class="table-style">
            <div style="font-size: 0.1rem">节点4:</div>
            <table id='table1' style="width: 80%">
                <tr>
                    <td>0</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>29</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>31</td>
                </tr>
            </table>
        </div>
        <div class="table-style">
            <div style="font-size: 0.1rem">节点20:</div>
            <table id='table2' style="width: 80%">
                <tr>
                    <td>0</td>
                    <td>16</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>19</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>29</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>31</td>
                </tr>
            </table>
        </div>
<!--        <div style="margin-top: -220px;">-->
<!--            <button @click="test">测试</button>-->
<!--        </div>-->
    </div>
</template>

<script>
export default {
    name: "NewGraph",
    data(){
        return{
            data:{
                count:'',
                node_four:[],
                node_twenty:[]
            }
        }
    },
    sockets: {
        /* 监听消息事件 */
        newdata:async function(data){
            // console.log("data 数据返回 = >", data);
            this.data = data
            // await console.log(this.data)
            this.getColor(data.node_four,'table1')
            this.getColor(data.node_twenty,'table2')
            this.echartsInit(data.count)
        },
    },
    methods:{
        echartsInit(data) {
            var myChart = this.$echarts.init(document.getElementById("percentage"));
            var option = {
                title: {
                    text: '全网一跳一秒入网节点数比例',
                    left: 'center'
                },
                animation:500,
                series: [
                    {
                        //禁止hover
                        silent:true,
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: data, name: '入网',itemStyle:{
                                    color:'yellow'
                                } },
                            { value: 1-data, name: '未入网',itemStyle:{
                                    color:'green'
                                }},
                        ],
                    }
                ]
            };
            myChart.setOption(option)
        },
        getColor(data,elementid){
            var table = document.getElementById(elementid)
            for(let i = 0; i < 32; i++){
                if(i < 16){
                    if(data[i] === 1){
                        table.rows[i].cells[0].style.backgroundColor = 'red'
                    }else {
                        table.rows[i].cells[0].style.backgroundColor = 'white'
                    }
                }
                else {
                    if(data[i] === 1){
                        table.rows[i-16].cells[1].style.backgroundColor = 'red'
                    }else {
                        table.rows[i-16].cells[1].style.backgroundColor = 'white'
                    }
                }
            }
        }
    },
    mounted() {
        this.echartsInit();
    }
}
</script>

<style scoped>
td{
    width: 50%;
    text-align: center;
    border: 1px solid;
}
.table-style{
    font-size: 0.1rem;
    width: 45%;
    margin-left: 4%;
    margin-top: -10%;
    float: left
}
table{
    border: 1px solid;
}
</style>