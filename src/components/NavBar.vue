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
              <template  v-slot:item="{ item }">
                <div class="d-flex" @click="goProfileFromSearch(item.name)">
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
                </div>
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
                    <v-img class="grey lighten-2"
                    :lazy-src="item.avatar"
                    aspect-ratio="1" :src="item.avatar">
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-bold">{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle class="text--primary font-weight-regular">{{item.suggestion}} <span class="text--secondary">{{item.date}}</span></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-img 
                    class="grey lighten-2"
                    :lazy-src="item.avatar"
                    aspect-ratio="1" 
                    width="50" height="50" v-if="item.data" :src="item.data">
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
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

          <v-list dense flat>
            <v-list-item-group
            >
            <template v-for="item in userDropDown">
              <v-divider  v-if="item.divider" :key="item.icon"></v-divider>
            
              <v-list-item v-else :key="item.name" @click ="() => {goToLink(item.link)}"
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


    <!-- Switch Account -->
    <template>
      <div class="text-center">
        <v-dialog v-model="switchAccountDialog" width="500" scrollable>

          <v-card>
            <v-toolbar dense flat>
              <div style="margin-left: 35%">Switch Accounts</div>
              
              <v-btn right absolute @click="switchAccountDialog = false,switchLogin = false" icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>

            </v-toolbar>

            <v-divider></v-divider>

            <v-card-text :style="[switchLogin ? {'height': '400px'}: {}]">
              <v-list v-if="!switchLogin">
                <v-list-item>
                  <v-list-item-avatar>
                    <v-img src="@/assets/avatar.jpg"></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    Swan Yee Htet Ko
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon color="blue">
                      <v-icon>mdi-check-circle</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
              
              <div v-if="switchLogin" class="mt-10">
                <v-img src="@/assets/735145cfe0a4.png" class="mx-auto" contain width="150"></v-img>

                <v-row>
                  <v-col class="offset-2" cols="8">
                    <v-text-field outlined dense hide-details="auto" label="Phone number, username or email"></v-text-field>
                  </v-col>
                </v-row>
                <v-row >
                  <v-col class="offset-2" cols="8">
                    <v-text-field outlined dense hide-details="auto" label="Password"></v-text-field>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col class="offset-2" cols="8">
                  <v-checkbox dense hide-details="auto" label="Save login info"></v-checkbox>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="offset-2" cols="8">
                    <v-btn depressed small class="text-capitalize" block color="blue" dark>Login</v-btn>
                  </v-col>
                </v-row>

                <div class="text-center"><a href="#" class="text-decoration-none">Forgot password?</a></div>
              </div>
            </v-card-text>

            <v-divider v-if="!switchLogin"></v-divider>

              <div v-if="!switchLogin" class="text-center">
                <v-btn
                  color="primary"
                  text
                  @click="login()"
                  class="text-capitalize ma-3"                  
                >
                  Log into a Existing Account
                </v-btn>
              </div>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data:() => ({
    userDropDown:[
      {icon: 'mdi-account-circle-outline',name: 'Profile', link: '/profile/post'},
      {icon: 'mdi-content-save-outline',name: 'Saved',link: '/profile/saved'},
      {icon: 'mdi-cog-outline',name: 'Settings', link: '/account'},
      {icon: 'mdi-account-switch-outline',name: 'Switch Accounts', link: '/switchAccount'},
      {divider: true },
      {icon: '',name: 'Log Out',link: '/login'}
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
    ],
    switchAccountDialog: false,
    switchLogin: false,
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

    goToLink(e){
      if(e == '/switchAccount'){
        this.switchAccountDialog = true;
      }else if(e == '/profile/post'){
        this.$store.dispatch('takeTabId',{id: 0});
        this.$router.push('/profile')
      }else if(e == '/profile/saved'){
        this.$store.dispatch('takeTabId',{id: 2});
        this.$router.push('/profile')
      }
      else if(e == '/account'){
        this.$store.dispatch('takeAccountId',{id: 0})
        this.$router.push('/account');
      }else{
        this.$router.push(e);
      }
    },

    login(){
      this.switchLogin = true;
    },

    goProfileFromSearch(name){
      this.$router.push('/guest/'+name),
      this.users = [],
      this.user= null,
      this.search = null
    }
  
  }
}
</script>