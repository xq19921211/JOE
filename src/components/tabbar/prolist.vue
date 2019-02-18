<template>
<div class="box">
<div class="top">
   <div class="h-left">
   <router-link to="/"><span class="mui-icon mui-icon-arrowleft"></span></router-link>
   </div>
   <div class="h-right">
   <router-link to="/more"><span class="mui-icon mui-icon-search"></span></router-link>
   <router-link id="icon-person" to=""><span class="mui-icon mui-icon-person"></span></router-link> 
   <router-link to=""><span class="mui-icon mui-icon-bars"></span></router-link>
   </div>
</div>
<div class="xq"> 
  <img src="img/balidao.jpg" />
  <p class="tuan"><span>【跟团游】</span>2人成行纯玩巴厘岛6晚8天炫酷版</p>
  <p>团期：请致电咨询</p>
</div>
<div class="xq1">
 <p><span>线路特色</span><span class="mui-icon mui-icon-arrowright"></span></p>
 <p><span>行程安排</span><span class="mui-icon mui-icon-arrowright"></span></p>
 <p><span>集合地点</span><span class="mui-icon mui-icon-arrowright"></span></p>
 <p><span>选择团期</span><span class="mui-icon mui-icon-arrowright"></span></p>
 <p><span>费用说明</span><span class="mui-icon mui-icon-arrowright"></span></p>
 <p><span>服务标准</span><span class="mui-icon mui-icon-arrowright"></span></p>
 <p><span>特别提醒</span><span class="mui-icon mui-icon-arrowright"></span></p>
 <p><span>温馨提示</span><span class="mui-icon mui-icon-arrowright"></span></p>
</div>
</div>
</template>
<style>
  .box{padding-bottom:1.2rem}
  .xq{width:100%;background:#fff}
  .xq img{width:100%}
  .tuan{font-size:1rem;font-weight:bold}
  .tuan span{color:#f60}
  .xq>p {margin:0.3rem 0.5rem;}
  .xq1{width:96%;height:22rem;background:#fff;margin:0.5rem}
  .xq1>p{padding:0.5rem;border:1px solid #ddd;margin:0}
  .xq1>p>span{display:inline-block;width:50%}
  .xq1>p>.mui-icon{text-align:right}
</style>