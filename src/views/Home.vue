<template>
  <div class="home">
    <v-row>
      <v-col cols="12" xs="12" sm="12" md="12" lg="7">
        <!-- Story -->
        <v-card style="border: 1px solid rgba(0,0,0,0.2)" flat>
          <v-card-text>
            <div class="d-flex" style="overflow:auto">
            <v-avatar              
              v-for="n in 5"
              :key="n"
              :style="[n == 1 ? {'margin-left': '0px'}:{'margin-left': '30px'}]"
              color="primary"
              size="60"
            >
            <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"></v-img>
            </v-avatar>
            </div>
          </v-card-text>
        </v-card>

        <!-- New Feed -->

        <v-card class="mt-12" style="border: 1px solid rgba(0,0,0,0.2)" v-for="n in 10" flat :key="n">
          <v-toolbar elevation="0">
            <v-avatar
              color="primary"
              size="35"
            >
            <v-img :src="`https://picsum.photos/200/300?random=${n * 2 }`"></v-img>
            </v-avatar>
            <v-toolbar-title class="ml-5">John Smith</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="postSettings = true">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </v-toolbar>
          <v-img :src="`https://picsum.photos/500/300?random=${n * 4 + 10}`"/>
          <v-card-text>
            <v-btn icon>
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-message-outline</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-send-outline</v-icon>
            </v-btn>
            <v-btn icon absolute right>
              <v-icon>mdi-content-save-outline</v-icon>
            </v-btn>
            <p class="ml-2 font-weight-bold">6 likes</p>
            <div class="ml-2 caption">22 MIN AGO</div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-textarea rounded label="Add a comment" rows="1" no-resize single-line hide-details="auto">
              <template v-slot:append-outer>
                <v-btn text>Post</v-btn>
              </template>
            </v-textarea>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- right side bar -->
      <v-col cols="12" xs="12" sm="12" md="12" lg="5" >

        <!-- profile -->
        <v-list dense two-line color="grey lighten-3" style="position:fixed;" width="440">
          <v-list-item link>
            <v-list-item-avatar size="50">
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
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
            
            
              <v-list-item dense link v-for="(item) in items"
                :key="item.title"
              >
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{item.title}}</v-list-item-title>
                  <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                <v-btn text class="text-capitalize" color="primary"> Follow</v-btn>
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
  </div>
</template>

<script>
  export default {
    data: () => ({
      postSettings: false,
      items: [
        {
          avatar: 'https://picsum.photos/200/300?random=1',
          title: 'Brunch this weekend?',
          subtitle: `Swan Yee Htet Ko`,
        },
        {
          avatar: 'https://picsum.photos/200/300?random=2',
          title: 'Swan Yee Htet Ko',
          subtitle: `Swan Yee Htet Ko`,
        },
        {
          avatar: 'https://picsum.photos/200/300?random=3',
          title: 'Oui oui',
          subtitle: 'Swan Yee Htet Ko',
        },
        {
          avatar: 'https://picsum.photos/200/300?random=4',
          title: 'Birthday gift',
          subtitle: 'Swan Yee Htet Ko',
        },
        {
          avatar: 'https://picsum.photos/200/300?random=5',
          title: 'Recipe to try',
          subtitle: 'Swan Yee Htet Ko',
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
      ]
    }),
  }
</script>