<template> 
<div class="app-container">
    <!--2:router-view-->
    <router-view></router-view>	
    <!--3:tabbar-->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="#">
				<span class="mui-icon mui-icon-chat"></span>
				<span class="mui-tab-label">客服</span>
			</router-link>
			<router-link class="mui-tab-item" to="/login">
				<span class="mui-icon mui-icon-qq"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
	</nav>   
 </div>
</template>
<style>
 .mui-bar .mui-icon{float:none;margin:0}
</style>
