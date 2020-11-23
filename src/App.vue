<template>
  <div id="app">
    <v-app>
      <NavBar/>
      <v-main class="grey lighten-3">
      <v-container>
        <router-view/>
      </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components:{
    NavBar
  }
}
</script>
