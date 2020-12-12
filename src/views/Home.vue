<template>
  <div class="home">
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="7" xl="8">
        <!-- Story -->
        <v-card style="border: 1px solid rgba(0,0,0,0.2)" flat>
          <v-card-text>
            <div class="d-flex ma-3" style="overflow:auto">
            <v-avatar              
              v-for="n in 5"
              :key="n"
              :style="[n == 1 ? {'margin-left': '0px'}:{'margin-left': '30px'}]"
              color="primary"
              size="60"
            >
            <v-img class="grey lighten-2" aspect-ratio="1"
            :lazy-src="`https://picsum.photos/500/300?random=${n * 5+ 10}`"
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`">
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
            </v-avatar>
            </div>
          </v-card-text>
        </v-card>

        <!-- New Feed -->

        <v-card class="mt-12" style="border: 1px solid rgba(0,0,0,0.2)" v-for="(item,n) in newsFeedData" flat :key="n">
          <v-toolbar elevation="0">
            <v-avatar
              color="primary"
              size="35"
            >
            
            <v-img
              class="grey lighten-2" aspect-ratio="1" 
              :lazy-src="`https://picsum.photos/500/300?random=${n * 2}`"
              :src="`https://picsum.photos/200/300?random=${n * 2 }`">
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
            </v-avatar>
            <v-toolbar-title style="cursor:pointer" @click="$router.push('/guest/'+item.userName)" class="ml-5">{{item.userName}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="postSettings = true">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </v-toolbar>

          <v-img v-if="item.photo.length == 1" class="grey lighten-2" contain 
          :lazy-src="`https://picsum.photos/500/300?random=${item.photo[0].img * 4 + 10}`" 
          :src="`https://picsum.photos/500/300?random=${item.photo[0].img * 4 + 10}`">          
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
          <v-carousel height="400" v-else hide-delimiters>
            <v-carousel-item
              reverse-transition="fade-transition"
              transition="fade-transition"
              v-for="(multiPhoto,i) in item.photo"
              :key="i"
              :lazy-src="`https://picsum.photos/200/300?random=${multiPhoto.img * 2}`"
              :src="`https://picsum.photos/200/300?random=${multiPhoto.img * 2}`"
            >
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
            </v-carousel-item>
          </v-carousel>

          <v-card-text>
            <v-btn icon @click.stop="item.liked =! item.liked">
              <v-icon v-if="item.liked">mdi-heart-outline</v-icon>
              <v-icon v-else color="red">mdi-heart</v-icon>
            </v-btn>
            <v-btn @click="$router.push(`/comment/${n * 4 + 10}`)" icon>
              <v-icon>mdi-message-outline</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-send-outline</v-icon>
            </v-btn>
            <v-btn @click="snackbar = true;" icon absolute right>
              <v-icon>mdi-content-save-outline</v-icon>
            </v-btn>
            <p class="ml-2 font-weight-bold" v-if="!item.liked"><span v-if="item.liked">0</span><span v-else>1</span> likes</p>
            <div v-show="item.comments" v-for="(cmt,i1) in item.comments" :key="i1">
              <!-- if auth user go to profile. if not go to guest route -->
              <b style="cursor:pointer" @click="$router.push('/profile')">{{cmt.userName}}</b><span class="ml-3">{{cmt.description}}</span>
            </div>
            <div class="ml-2 caption">22 MIN AGO</div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-textarea rounded label="Add a comment" v-model="item.comment" rows="1" no-resize single-line hide-details="auto">
              <template v-slot:append-outer>
                <!-- use user name Auth user -->
                <v-btn @click="item.comments.push({userName: 'swan_yee_htet_ko',description: item.comment, date: new Date()}),item.comment = []" text>Post</v-btn>
              </template>
            </v-textarea>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- right side bar -->
      <v-col cols="12" xs="12" sm="12" md="12" lg="5" xl="3" class="offset-xl-1">

        <!-- profile -->
        <v-list dense two-line color="grey lighten-3" style="position:fixed;" width="440">
          <v-list-item @click="$router.push('/profile')">
            <v-list-item-avatar size="50">
              <v-img class="grey lighten-2" aspect-ratio="1"
                  lazy-src="@/assets/avatar.jpg" src="@/assets/avatar.jpg">
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
              <v-list-item-title class="title">
                swan_yee_htet_ko
              </v-list-item-title>
              <v-list-item-subtitle>Swan Yee Htet Ko</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn text class="text-capitalize" color="primary"> Switch</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <!-- Sugget for you -->
        
        <v-list dense two-line style="position:fixed;margin-top:90px" color="grey lighten-3" width="440">
            <div class="d-flex justify-space-between">
              <div class="text--disabled ml-3 font-weight-bold">
              Suggestions For You
              </div>
              <div>
              <v-btn text class="text-capitalize mr-3">See All</v-btn>
              </div>
            </div>
            
            
              <v-list-item dense @click="$router.push('/guest/'+item.title)" v-for="(item) in items"
                :key="item.title"
              >
                <v-list-item-avatar>
                  <v-img class="grey lighten-2" aspect-ratio="1"
                  :lazy-src="item.avatar"
                  :src="item.avatar">
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
                  <v-list-item-title>{{item.title}}</v-list-item-title>
                  <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                <v-btn text class="text-capitalize" color="primary" @click.stop="item.follow =!item.follow"><span v-if="item.follow">Following</span> <span v-else>Follow</span></v-btn>
              </v-list-item-action>
              </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <!-- postSettings dialog -->
    <template>
      <div class="text-center">
        <v-dialog
          v-model="postSettings"
          width="500"
        >
          <v-card>
            <v-list flat>
              <v-list-item-group
              >
              <template v-for="(item, i) in postSettingsList">
                <v-divider v-if="item.text && i != 0" :key="i"></v-divider>
                <v-list-item
                  :key="item.text"
                >
                  <v-list-item-content>
                    <v-list-item-title :style="[item.text == 'Report' || item.text == 'Unfollow' ? {'color': 'red'}: {'color': 'black'}]" v-text="item.text" class="text-center"></v-list-item-title>
                  </v-list-item-content>                  
                </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-dialog>
      </div>
    </template>

    <!-- snack bar -->
    <v-snackbar
      v-model="snackbar"
      outlined
      color="deep-purple accent-4"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="deep-purple accent-4"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      postSettings: false,
      liked: false,
      newsFeedData: [
        {photo: [{img: 1}],userName: 'john_smith', liked: true,comments: [],comment: null},
        {photo: [{img: 10},{img: 11}],userName: 'christ', liked: true,comments: [],comment: null},
        {photo: [{img: 2},{img: 16},{img: 17}],userName: 'rose', liked: true,comments: [],comment: null},
        {photo: [{img: 3}],userName: 'kyaw_kyaw', liked: true,comments: [],comment: null},
        {photo: [{img: 4}],userName: 'aung_aunng', liked: true,comments: [],comment: null},
        {photo: [{img: 5},{img: 12},{img: 18}],userName: 'kay_zin_thet', liked: true,comments: [],comment: null},
        {photo: [{img: 6},{img: 13},{img: 14},{img: 15}],userName: 'a_chay_ma', liked: true,comments: [],comment: null},
        {photo: [{img: 7}],userName: 'thurein_mg_mg', liked: true,comments: [],comment: null},
        {photo: [{img: 8}],userName: 'sabal_Phyu', liked: true,comments: [],comment: null},
        {photo: [{img: 9}],userName: 'hein_Thu', liked: true,comments: [],comment: null}
      ],
      items: [
        {
          avatar: 'https://picsum.photos/200/300?random=1',
          title: 'kyaw_gyi',
          subtitle: `Follows you`,
          follow: false,
        },
        {
          avatar: 'https://picsum.photos/200/300?random=2',
          title: 'justin_viber',
          subtitle: `New to instagram`,
          follow: false,
        },
        {
          avatar: 'https://picsum.photos/200/300?random=3',
          title: 'westlife',
          subtitle: 'Followed by sabalphyu98',
          follow: false,
        },
        {
          avatar: 'https://picsum.photos/200/300?random=4',
          title: 'two_direction',
          subtitle: 'Suggested for you',
          follow: false,
        },
        {
          avatar: 'https://picsum.photos/200/300?random=5',
          title: 'taylor_pig',
          subtitle: 'Followed by yeir_min',
          follow: false,
        },
      ],
      postSettingsList:[
        {text: 'Report'},
        {text: 'Unfollow'},
        {text: 'Go to post'},
        {text: 'Share to...'},
        {text: 'Copy Link'},
        {text: 'Embed'},
        {text: 'Cancel'},
      ],
      snackbar: false,
      text: 'You saved this post!'
    }),
  }
</script>