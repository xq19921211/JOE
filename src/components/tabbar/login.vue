<template>
  <div class="container">
  <div class="header">
   <div class="h-left">
   <router-link to="/"><span class="mui-icon mui-icon-arrowleft"></span></router-link>
   </div>
   <div class="h-right">
   <router-link to="/more"><span class="mui-icon mui-icon-search"></span></router-link>
   <router-link id="icon-person" to=""><span class="mui-icon mui-icon-person"></span></router-link>
   <router-link to=""><span class="mui-icon mui-icon-bars"></span></router-link>
   </div>
    </div>
     <table></table>
     <div class="login" id="app">
     <div class="logtop">
       <button @click="yk(true)" :class="aa==true?'active':''">游客登录</button>
       <button @click="yk(false)" :class="aa==false?'active':''">工作人员登录</button>
     </div>
    <div class="module1" v-if="aa">
    <div class="yh">   
      <div><input type="text" placeholder="用户名"></div>
      <span class="mui-icon mui-icon-person aa"></span>
    </div>
    <div class="mm">    
      <div><input type="password" placeholder="密码"></div>
      <span class="mui-icon mui-icon-locked aa"></span>
    </div>
    </div>
    <div class="module2" v-else>
    <div class="yh">   
      <div><input type="text" placeholder="手机号"></div>
    </div>
    <div class="mm">    
      <div><input type="password" placeholder="验证码"></div>
    </div>
    </div>
    <button>登录</button>
    <div class="logbom">
      <span>免费注册</span>
      <span>找回密码</span>
    </div>  
    </div>  
  </div>
</template>
<script>
export default {
  data(){
   return {aa:true}
  },
  methods: {
    yk(bol){
     this.aa=bol
    }
  },
}
</script>
<style>
 .container {
  height:40rem;
  background:#6AA5E9;
 }
.login{
  width:20rem;
  height:20rem;
  background:#fff;
  margin:10rem auto;
  padding:2rem;
  position:relative
  }
.login>button{
  width:100%;
  font-size:1rem;
  background:orange;
  color:#fff;
  padding:0.5rem 0
  }
  .aa{float:left;margin-left:-2.3rem;margin-top:0.35rem}
  .yh>div,.mm>div{width:100%;float:left}
  .logbom{
    border-top:1px dotted #666;
    width:100%;height:3rem;
    padding:1rem 0;
    margin-top:1rem;
   }
   .logtop{width:100%;margin-bottom:1rem;margin-bottom:8rem}
   .module1{position:absolute;top:5.3rem}
   .module2{position:absolute;top:5.3rem}
   .logtop>button{width:50%;border:none;padding:0.6rem;}
   .logtop>button.active{background:#6aa5e9;color:#fff}
   .logbom span:first-child{display:inline-block;width:50%;text-align:left;font-size:1rem;color:#666}
   .logbom span:last-child{display:inline-block;width:50%;text-align:right;font-size:1rem;color:#666}
   .h-left{float:left;padding-left:0.8rem;height:2rem}
   .h-left .mui-icon{color:#fff}
   .h-right{float:right;margin:auto 0.8rem}
   .h-right .mui-icon{color:#fff;display:inline-block;margin:auto 0.3rem;font-size:1.8rem}
</style>