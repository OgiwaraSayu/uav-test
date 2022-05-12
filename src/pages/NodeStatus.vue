<template>
  <div class="bg">
      <div class="title">节点状态驾驶舱</div>
      <div class="left">
          <div class="top_left">
              <NodeInformation></NodeInformation>
          </div>
          <div class="clear"></div>
          <div class="bottom_left">
              <FrequencySpectrum></FrequencySpectrum>
          </div>
      </div>
      <div class="middle">
          <div class="top_middle">
              <ResourceAllocation></ResourceAllocation>
          </div>
          <div class="clear"></div>
          <div class="bottom_middle">
              <TimeDelay></TimeDelay>
          </div>
      </div>
      <div class="right">
          <div class="top_right">
              <LoadAndQuantity></LoadAndQuantity>
          </div>
          <div class="clear"></div>
          <div class="bottom_right">
              <PieChart></PieChart>
          </div>
      </div>
  </div>
</template>

<script>
import NodeInformation from "@/components/page1/left/NodeInformation";
import ResourceAllocation from "@/components/page1/middle/ResourceAllocation";
import LoadAndQuantity from "@/components/page1/right/LoadAndQuantity";
import FrequencySpectrum from "@/components/page1/left/FrequencySpectrum";
import TimeDelay from "@/components/page1/middle/TimeDelay";
import PieChart from "@/components/page1/right/PieChart";
export default {
    components: {PieChart, TimeDelay, LoadAndQuantity, ResourceAllocation, NodeInformation,FrequencySpectrum},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg{
    margin:0 auto;
    width:98%;
    min-height:100vh;
    background:url(../assets/images/bg.jpg) no-repeat;
    background-size: cover;
    padding:0.1rem;
}
.bg div{
    float: left;
}
.title{
    width:100%;
    font-size:0.15rem;
    line-height:0.2rem;
    color:#9DC3E6;
    text-align:center;
    vertical-align: center;
    font-weight:bold;
    /*padding-top: 10px;*/
}
.left{
    width: 20%;
    padding-right: 0.05rem;
}
.top_left{
    margin-top: 0;
    width: 100%;
    height: 1rem;

}
.bottom_left{
    margin-top: 0.1rem;
    height: 2rem;
    width: 100%;
}
.middle{
    width: 58%;
    margin-top: 2%;
    padding-right: 0.05rem;
}
.top_middle{
    width: 100%;
    height: 1rem;
}
.bottom_middle{
    margin-top: 0.1rem;
    height: 2rem;
    width: 100%;
}
.right{
    width: 19%;
}
.top_right{
    margin-top: 0;
    width: 100%;
    height: 1rem;
}
.bottom_right{
    margin-top: 0.1rem;
    height: 2rem;
    width: 100%;
}
</style>