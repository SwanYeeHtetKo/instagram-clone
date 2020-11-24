<template>
  <div>
    <v-app-bar
      app
      color="white"
      flat
      fixed
    >

      <v-container class="py-0 fill-height">
        
        <img width="100" class="offset-lg-1" src="@/assets/735145cfe0a4.png"/>
        
        <v-responsive max-width="260" class="offset-md-2">
            <v-text-field outlined single-line hide-details="auto" clearable label="Search" dense class="hidden-sm-and-down"></v-text-field>
        </v-responsive>

        <v-spacer></v-spacer>

        <v-btn icon @click="goHome()">
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>

        <v-btn icon @click="goInbox()">
          <v-icon>mdi-send-outline</v-icon>
        </v-btn>

        <v-btn icon @click="goExplore()">
          <v-icon>mdi-compass-outline</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>

        <v-menu
          left
          bottom
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              class="mr-md-12"
            >
              <v-avatar
                color="primary"
                size="25"
              >
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-avatar>
            </v-btn>
          </template>

          <v-list dense>
            <v-list-item-group
              color="primary"
            >
            <template v-for="item in userDropDown">
              <v-divider  v-if="item.divider" :key="item.icon"></v-divider>
            
              <v-list-item v-else :key="item.name" route :to="item.link"
              >
                <v-list-item-icon v-if="item.icon">
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{item.name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data:() => ({
    userDropDown:[
      {icon: 'mdi-account-circle-outline',name: 'Profile', link: 'profile'},
      {icon: 'mdi-content-save-outline',name: 'Saved',link: ''},
      {icon: 'mdi-cog-outline',name: 'Settings', link: ''},
      {icon: 'mdi-account-switch-outline',name: 'Switch Accounts', link: ''},
      {divider: true },
      {icon: '',name: 'Log Out',}
    ]
  }),

  methods:{
    goHome(){
      this.$router.push('/');
    },
    goInbox(){
      this.$router.push('/direct/inbox');
    },
    goExplore(){
      this.$router.push('/explore');
    }
  }
}
</script>