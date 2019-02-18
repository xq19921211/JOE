<!--src/components/tabbar/Home.Vue;-->
<template>
   <!--1:顶部导航栏-->
<div class="app-container">
  <div class="header">
	 <div class="tu"><img src="img/logo.png"/></div>
	 <input type="text" class="ipt" placeholder="目的地"/>
	 <img src="img/search.png" class="search"/>
	 <div class="tb">
	   <router-link id="icon-phone" to="tel:88610000">
	   <span class="mui-icon mui-icon-phone"></span>
     </router-link>
	   <router-link id="icon-person" to="/login">
	   <span class="mui-icon mui-icon-person"></span>
	   </router-link>
	 </div>
	 </div>
   <div class="app-home">
     <!--2:轮播图-->
     <mt-swipe :auto="3002">
       <mt-swipe-item v-for="item in list" :key="item.id">
          <img  :src="item.img_url"/>
       </mt-swipe-item>
     </mt-swipe>
     <!--3:宫格-->
      <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell">
                <router-link to="/product">
		              <img src="img/tu (4).png" />
		              <div class="mui-media-body">出境</div>
                </router-link>
            </li>
		        <li class="mui-table-view-cell">
                <a href="#">
		              <img src="img/tu (1).png" />
		              <div class="mui-media-body">国内</div>
                </a>
            </li>
		        <li class="mui-table-view-cell">
               <a href="#">
		              <img src="img/tu (5).png" />
		              <div class="mui-media-body">周边</div>
               </a>
            </li>
		        <li class="mui-table-view-cell">
                <a href="#">
		                    <img src="img/tu (3).png" />
		                    <div class="mui-media-body">自驾</div>
                </a>
            </li>
		        <li class="mui-table-view-cell mui-media">
                 <a href="#">
		                <img src="img/tu (2).png" />
		                <div class="mui-media-body">签证</div>
                </a>
            </li>
		  </ul> 
     <!--4:tabbar-->
     <div class="jiahua">
       <a href="#">
       <img src="img/jihua_ship.jpg" />
       </a>
       <a href="#">
       <img src="img/jihua_plane.jpg" />
       </a>
       <a href="#">
       <img src="img/jihua_self.jpg" />
       </a>
     </div>
     <div>
       <ul class="zhong">
        <li>
        <div>
        <img src="img/erxiao.png" />
        </div>
        <div>
        <p>当季热销</p>
        <p>这里你值得去</p>
        </div>
        </li>
        <li>
        <div>
        <img src="img/yanxue.png" />
        </div>
        <div>
        <p>研学旅游</p>
        <p>让孩子赢在起跑线上</p>
        </div>
        </li>
        <li>
        <div>
        <img src="img/bama.png" />
        </div>
        <div>
        <p>爸妈之旅</p>
        <p>孝敬爸妈要赶早</p>
        </div>
        </li>
        <li>
        <div>
        <img src="img/miyue.png" />
        </div>
        <div>
        <p>蜜月之旅</p>
        <p>您专属的爱情保鲜剂</p>
        </div>
        </li>
       </ul>
     </div>
     <div class="mudi">
        <p class="mudidi">——热门目的地——</p>
        <ul class="didi">
          <li><img src="img/yz.jpg" />
          <p>芽庄</p>
          </li>
          <li><img src="img/bld.jpg" />
          <p>巴厘岛</p>
          </li>
          <li><img src="img/tg.jpg" />
          <p>泰国</p>
          </li>
          <li><img src="img/els.jpg" />
          <p>俄罗斯</p>
          </li>
          <li><img src="img/yl.jpg" />
          <p>加勒比</p>
          </li>
          <li><img src="img/cbs.jpg" />
          <p>长白山</p>
          </li>
        </ul>
        <button><router-link to="/more">更多目的地</router-link></button>
     </div>  
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
<script>
   export default {
      created(){
        this.getImages();
      },
      methods:{
        getImages(){
          //11:03
          this.$http.get("imagelist").then(result=>{
            //console.log(result.data);
            this.list = result.body;
          })
        }
      },
      data(){
        return {
          list:[]
        }
      }
   }
</script>
<style>
.app-container{
 position:relative;
 padding-bottom:1.8rem
}
.header{
	width:100%;
	height:3rem;
	background:rgba(0,0,0,0.3);
	position:fixed;
	z-index:10;
	padding:8px 0;
	}
.tu{
	width:28%;
	margin-left:0.1rem;
	float:left;
	line-height:3rem;
	}
.tu>img{width:100%}
.search{position:absolute;top:26%;right:24%;opacity:0.8}
.header>.ipt{
  margin-left:0.5rem;
  display:inline-block;
  width:48%;
  height:2rem;
  border-radius:50px;
  float:left;
  font-size:0.8rem
}
.tb{float:left;width:20%;text-align:right;}
#icon-phone>.mui-icon{float:none;margin:0}
#icon-person>.mui-icon{float:none;margin:0}
.mui-icon-phone:before,.mui-icon-person:before{font-size:2rem}
.tb>a{color:#fff}
.foot{text-align:center;background:#fff;padding-top:0.2rem}
.foot p{font-size:0.5rem;margin:0}
 .app-home{
   padding-bottom:20px;
   }
 .app-home .mint-swipe{
   height:220px;
 }
 .app-home .mint-swipe img{
   width:100%;
   height:220px
 }
 /*九宫图片中大小*/
 .mui-table-view{
   width:100%;
   background:#f00;
   }
 .mui-table-view li{width:20%}
 .app-home .mui-grid-view img{
     width:2.6rem;
     height:2.6rem;
 }
 .app-home .mui-grid-view li{
   border:none;
 }
 .jiahua{
   height:3rem;
   margin:0.6rem 0;
   } 
 .jiahua img{
   float:left;
   width:33.3%;
   }
 .zhong{
   list-style:none;
   width:100%;
   background:#fff;
   padding:0;
   margin:0;
   height:8rem
   }
 .zhong>li{
   float:left;
   width:50%;
   border:1px solid #e1e1e1;
   height:4rem;
   padding:0.6rem 0 0 0.5rem
   }
 .zhong p{margin:0}
 .zhong li>div:first-child{width:30%}
 .zhong li>div:last-child{width:70%}
 .zhong li p:first-child{
   font-size:1.2rem;
   color:#555;
   margin-top:0.2rem
   }
 .zhong li p:last-child{font-size:0.6rem;}
 .zhong div{float:left}
 .mudi{
   margin-top:0.8rem;
   background:#fff;
   padding-bottom:0.8rem
   }
 .mudidi{
   text-align:center;
   font-size:1.2rem;
   padding:1rem;margin:0
   }
 .mudi img{width:100%;}
 .didi{margin:0}
 .didi>li{
   width:33.3%;
   float:left;
   padding:0.5rem
   }
 .didi p{text-align:center;margin:0}
 .mudi ul{list-style:none;padding:0}
.mudi>button{display:block;margin:0 auto}
</style>
