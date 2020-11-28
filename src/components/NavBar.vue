<template>
  <div>
    <v-app-bar
      app
      color="white"
      flat
      fixed
    >

      <v-container class="py-0 fill-height">
        
        <img width="100" style="cursor:pointer" @click="startProgram()" src="@/assets/735145cfe0a4.png"/>
        
        <v-responsive max-width="260" class="offset-md-3">
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

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-on="on" v-bind="attrs">
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item-group
            >
              <template v-for="(item, index) in notifications">
                <v-list-item
                  two-line
                  :key="item.title"
                >
                  <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{item.suggestion}}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn color="#0195f6" small depressed dark>
                      Follow
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>              
            <v-divider inset v-if="index < notifications.length - 1"
            :key="index"></v-divider>
            </template>
            </v-list-item-group>
          </v-list>
        </v-menu>

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
      {icon: 'mdi-account-circle-outline',name: 'Profile', link: '/profile/post'},
      {icon: 'mdi-content-save-outline',name: 'Saved',link: '/profile/saved'},
      {icon: 'mdi-cog-outline',name: 'Settings', link: '/account/edit'},
      {icon: 'mdi-account-switch-outline',name: 'Switch Accounts', link: ''},
      {divider: true },
      {icon: '',name: 'Log Out',}
    ],
    notifications: [
      { avatar: 'https://cdn.vuetifyjs.com/images/john.png',title: 'Click Me', suggestion: 'start following you'},
      { avatar: 'https://cdn.vuetifyjs.com/images/john.png',title: 'Click Me', suggestion: 'start following you'},
      { avatar: 'https://cdn.vuetifyjs.com/images/john.png',title: 'Click Me', suggestion: 'start following you' },
      { avatar: 'https://cdn.vuetifyjs.com/images/john.png',title: 'Click Me 2', suggestion: 'start following you' },
    ]
  }),

  methods:{
    startProgram(){
      window.location.assign('/');
    },
    goHome(){
      if(this.$route.path == '/'){
        window.location.assign('/');
      }else{
        this.$router.push('/');
      }
    },
    goInbox(){
      if(this.$route.path == '/direct/inbox'){
        window.location.assign('/direct/inbox');
      }else{
        this.$router.push('/direct/inbox');
      }
    },
    goExplore(){
      if(this.$route.path == '/explore'){
        window.location.assign('/explore');
      }else{
        this.$router.push('/explore');
      }
    }
  }
}
</script>