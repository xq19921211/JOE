<template>
<div class="more">
<div class="top">
   <div class="m-left">
   <router-link to="/"><span class="mui-icon mui-icon-arrowleft"></span></router-link>
    <span style="color:#fff">搜索</span>
   </div>
</div>
<div class="body">
  <div class="sou">
    <input type="text" placeholder="请输入目的地名称" />
    <button type="button" class="mui-btn mui-btn-danger">搜索</button>
  </div>
  <div class="m-list">
    <p>热门目的地</p>
    <div>
     <ul>
       <li><router-link to="">巴厘岛</router-link></li>
     </ul>
     <ul>
       <li><router-link to="">新加坡</router-link></li>
     </ul>
     <ul>
       <li><router-link to="">张掖</router-link></li>
     </ul>
    </div>
  </div>
  <div class="m-list">
    <p>出境</p>
    <div>
     <ul>
       <li><router-link to="">美国</router-link></li>
     </ul>
     <ul>
       <li><router-link to="">台湾</router-link></li>
     </ul>
     <ul>
       <li><router-link to="">柬埔寨</router-link></li>
     </ul>
    </div>
  </div>
  <div class="m-list">
    <p>国内</p>
    <div>
     <ul>
       <li><router-link to="">云南</router-link></li>
     </ul>
     <ul>
       <li><router-link to="">上海</router-link></li>
     </ul>
     <ul>
       <li><router-link to="">安徽</router-link></li>
     </ul>
    </div>
  </div>
  <div class="m-list">
    <p>周边</p>
    <div>
     <ul>
       <li><router-link to="">淡定业务</router-link></li>
     </ul>
     <ul>
       <li><router-link to="">滨河徐营</router-link></li>
     </ul>
     <ul>
       <li><router-link to="">青岛</router-link></li>
     </ul>
    </div>
  </div>
</div>
</div>
</template>
<style>
.body{background:#fff}
.more>.top{background:#00f}
.top>.m-left .mui-icon{color:#fff}
.m-left>span{margin:0 38%;font-size:1.2rem}
.sou{margin:0.6rem;}
.sou>input{width:82% !important;margin-bottom:0 !important}
.sou>button{font-size:1.1rem}
.m-list{margin:0 0.6rem 0.6rem;border:1px solid #ccc;height:10rem}
.m-list>p{margin:0;font-size:1.1rem;color:#000;padding:0.5rem;background:#ddd}
.m-list ul{list-style:none;padding:0;margin:0}
.m-list ul>li{float:left;width:25%;font-size:0.9rem;margin:0.8rem 0.8rem 0.6rem}
</style>
