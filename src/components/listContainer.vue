<!--src/components/listContainer.vue-->
<template>
   <div>
     <h1>数据列表</h1>
     <ul>
 <!--:key="" v-for循环对数据排序,key条件-->
 <!--key条件,不重复-->
 <!--添加key提升排序效率-->     
 <li v-for="item in list" :key="item.uid">
         {{item.uid}}{{item.name}}
       </li>
     </ul>
   </div>
</template>
<script>
   export default {
     data(){
       return {
         list:[
           {uid:1,name:"tom"},
           {uid:2,name:"jerry"},
           {uid:3,name:"james"}
         ]
       }
     }
   }
</script>
<style>
</style>