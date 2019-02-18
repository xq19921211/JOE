<template>
<div class="">
<div class="top">
   <div class="h-left">
   <router-link to="/"><span class="mui-icon mui-icon-arrowleft"></span></router-link>
   </div>
   <div class="h-right">
   <router-link id="icon-person" to=""><span class="mui-icon mui-icon-person"></span></router-link>
   <router-link to="/more"><span class="mui-icon mui-icon-search"></span></router-link>
   <router-link to=""><span class="mui-icon mui-icon-bars"></span></router-link>
   </div>
</div>
   <div class="pro">
     <p>〓出境游</p>
     <ul class="proul">
		        <li class="ll">
                    <a href="#">韩国</a>
                </li>
		        <li class="">
                <a href="#">泰国</a>
                </li>
		        <li class="">
				    <a href="#">曼谷</a>
				</li>
		        <li class="">
				<a href="#">芽庄</a>
				</li>
		        <li class="ll">
				<a href="#">新加坡</a>
				</li>
		        <li class="">
				<a href="#">游轮</a>
				</li>
				<li class="">
				<a href="#">俄罗斯</a>
				</li>
				<li class="">
				<a href="#">台湾</a>
				</li>
				<li class="ll">
				<a href="#">日本</a>
				</li>
				<li class="">
				<a href="#">美国</a>
				</li>
				<li class="">
				<a href="#">欧洲</a>
				</li>
				<li class="">
				<a href="#">游艇</a>
				</li>
		</ul> 
   </div>
   <div class="probom">
     <ul class="bom">
       <li>
        <router-link to="/prolist"><img src="img/balidao.jpg" /></router-link>
        <p class="bomfp">2人成行纯玩巴厘岛6晚8天炫酷版</p>
        <p>团期：请致电咨询</p>
       </li>
       <li>
        <img src="img/mangu.jpg" />
        <p class="bomfp">2018年曼谷包机 泰国泰纵横5晚6天（新版）</p>
        <p>团期：请致电咨询</p>
       </li>
       <li>
        <img src="img/xinjpo.jpg" />
        <p class="bomfp">新加坡包机—惠美—新马波德申6日游（酷虎航）</p>
        <p>团期：请致电咨询</p>
       </li>
     </ul>
   </div>
   <div class="foot">
	  <p>Copyright © 2010-2018 嘉华文化国际旅行社有限公司</p>
	  <p>旅游经营许可证：L-SD-CJ00002 管理</p>
	  <p>备案号：鄂ICP备1020402965号-1</p>
	  <p>地址：深圳市龙华新区汇海大厦A座21楼</p>
	  <p>旅游局投诉电话：12301</p>
	</div> 
</div>
</template>
  <style>
 .top{
	width:100%;
	height:3rem;
	background:#fff;
	padding:8px 0;
	}
 .top>div .mui-icon{color:#111;font-size:1.8rem}
     .pro{padding-top:2rem;background:#fff;margin-top:0.5rem}
     .pro ul{
         list-style:none;
         width:100%;
         padding:0.5rem 0 0 0;
         height:10rem;
         border-top:1px solid #ddd
         }
     .pro p{font-size:1.3rem;color:#666;margin-bottom:0px;margin-left:1rem}
     .pro li{
         border:1px solid #ddd;
         float:left;width:20%;
         margin:0.4rem 0.5rem;
         padding:0.3rem 1.0rem;
         border-radius:10px;
         text-align:center
         }
     .proul a{font-size:0.8rem;color:#666}
     .proul>.ll{margin-left:1rem}
     .probom{background:#fff}
     .probom ul{list-style:none;padding:0;padding:1rem;padding-bottom:0}
     .probom li{margin-bottom:1rem;border:1px solid #e1e1e1}
     .probom img{width:100%}
     .bom p{margin:0.1rem 0;color:#666}
     .bomfp{font-size:1.3rem;}
   </style>