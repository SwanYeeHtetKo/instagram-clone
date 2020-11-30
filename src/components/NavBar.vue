<template>
  <div>
    <v-app-bar
      app
      color="white"
      flat
      fixed
    >

      <v-container class="py-0 fill-height">
        
        <v-img :style="[$vuetify.breakpoint.smAndDown ?{'max-width':'50px'}:{}]" max-width="100" style="cursor:pointer" @click="startProgram()" src="@/assets/735145cfe0a4.png"/>
        
        <v-responsive max-width="260" class="offset-md-3">
            <v-autocomplete
            prepend-inner-icon="mdi-magnify"
            item-text="name"
            :loading="isLoading"
            :search-input.sync="search"
            v-model="user" 
            :items="users" 
            append-icon="" 
            outlined 
            single-line
            hide-no-data 
            hide-details="auto" 
            clearable 
            label="Search" 
            dense 
            class="hidden-sm-and-down">
              <template v-slot:item="{ item }">
                <v-list-item-avatar
                  color="indigo"
                  class="headline font-weight-light white--text"
                >
                  <v-img :src="item.avatar"/>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                  <v-list-item-subtitle v-text="item.userName"></v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-autocomplete>
        </v-responsive>

        <v-spacer></v-spacer>

        <v-btn icon @click="goHome()">
          <v-icon v-if="$route.path == '/'">mdi-home</v-icon>
          <v-icon v-else>mdi-home-outline</v-icon>
        </v-btn>

        <v-btn icon @click="goInbox()">
          <v-icon v-if="$route.path == '/direct/inbox'">mdi-send</v-icon>
          <v-icon v-else>mdi-send-outline</v-icon>
        </v-btn>

        <v-btn icon @click="goExplore()">
          <v-icon v-if="$route.path == '/explore'">mdi-compass</v-icon>
          <v-icon v-else>mdi-compass-outline</v-icon>
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
                    <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle class="text--primary font-weight-regular">{{item.suggestion}} <span class="text--secondary">{{item.date}}</span></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-img width="50" height="50" v-if="item.data" :src="item.data"/>
                    <v-btn color="#0195f6" v-else small depressed dark>
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
              <v-img src="@/assets/avatar.jpg"></v-img>
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
      { avatar: 'https://picsum.photos/200/300?random=1',title: 'john_w', suggestion: 'started following you', date: '3w',data: null},
      { avatar: 'https://picsum.photos/200/300?random=2',title: 'Your friend John Smith is on Instagram as john_smith1997', suggestion: 'suggestion for you', date: '6w',data: null},
      { avatar: 'https://picsum.photos/200/300?random=3',title: 'pearl_twal', suggestion: 'liked your photo', date: '8w' ,data: 'https://picsum.photos/seed/picsum/200/300'},
      { avatar: 'https://picsum.photos/200/300?random=4',title: 'wuro_bmm33', suggestion: 'liked your photo', date: '8w', data: 'https://picsum.photos/id/237/200/300'},
    ],
    user: null,
    search: null,
    isLoading: false,
    users:[],
    usersFromApi:[
      {avatar: 'https://picsum.photos/200/300?random=1',name: 'sabalphyu98',userName: 'Sabal Phyu'},
      {avatar: 'https://picsum.photos/200/300?random=2',name: 'thandar_maung_maung',userName: 'maung'},
      {avatar: 'https://picsum.photos/200/300?random=3',name: 'zwellpyae.black.boy.1',userName: 'Thu Rein Maung'},
      {avatar: 'https://picsum.photos/200/300?random=4',name: 'wuro_bmm33',userName: 'Bhone Myint Myat'},
      {avatar: 'https://picsum.photos/200/300?random=5',name: 'pearl_twal',userName: 'Pearl Twal'},
      {avatar: 'https://picsum.photos/200/300?random=6',name: 'taylorswift',userName: 'Taylor Swift'},
    ]
  }),

  watch: {

    search (val) {
      if(!val){
        this.users = []
      }else{
        this.isLoading = true
        // Lazily load input items
        setTimeout(() => {
          this.users = this.usersFromApi
          this.isLoading = false
        },500)
      }
      
    },
    
  },

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
    },

  
  }
}
</script>