<template>
  <div id="app">
    <Headerindex></Headerindex>   
    <router-view/>
    <Footerindex></Footerindex>
  </div>
</template>

<script>
import Headerindex from '@/components/Header/index'
import Footerindex from '@/components/footer/index'
export default {
  name: 'App',
  components:{
    Headerindex,
    Footerindex
  }
}
</script>

<style>

</style>
