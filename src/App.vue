<template>
  <div>
    <tabbar v-if="$store.state.isShow"></tabbar>
    <router-view></router-view>
  </div>
  
</template>

<script>
import tabbar from './components/tabbar'
export default {
  components:{
    tabbar
  }
}
</script>