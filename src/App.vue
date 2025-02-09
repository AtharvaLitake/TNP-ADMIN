<template>
  <v-app>
    <nav-drawer></nav-drawer>
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavDrawer from "./BaseComponents/NavDrawer.vue";
export default{
  components:{
    'nav-drawer':NavDrawer,
  }
}
</script>
