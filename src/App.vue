<template>
  <div id="app">
    <div>
      <router-link to="/home" active-class="ac">首页</router-link>
      <router-link to="/list" active-class="ac">列表</router-link>
      <router-link to="/mine" active-class="ac">我的</router-link>
    </div>
      <!--就是为了让路由组件显示出来-->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  // .router-link-active{
  //   color:red;
  // }
  .router-link-exact-active{
    color:green;
  }
  .ac{
    color:skyblue;
  }
</style>

<script>
  export default{
      
  }
</script>  
