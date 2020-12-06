<template>
    <div>
        <!-- avatar -->
        <v-row>
            <v-col cols="4">
                <v-row justify="center">
                    <v-avatar size="150" >
                        <v-img  src="@/assets/avatar.jpg"/>
                    </v-avatar>
                </v-row>
            </v-col>

            <v-col cols="8" xs="7" sm="7" lg="8">
                <v-row>
                    <v-col cols="12" xs="12" sm="12" md="6" lg="5">
                        <div :style="[$vuetify.breakpoint.xs ?{'max-width':'200px'}:{}]" class="text-h4 d-inline-block text-truncate">swan_yee_htet_ko</div>
                    </v-col>
                    <v-col class="ml-2">
                        <v-btn class="text-capitalize" outlined depressed>Edit Profile</v-btn>
                        <v-btn icon @click="openSettingDialog = true">
                            <v-icon>mdi-cog-outline</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="hidden-md-and-down">
                    <v-col cols="2">
                        <b>119</b> posts
                    </v-col>
                    <v-col cols="3">
                        <b>17K</b> followers
                    </v-col>
                    <v-col cols="3">
                        <b>25</b> following
                    </v-col>
                </v-row>                
            </v-col>
            <v-col cols="12" class="offset-lg-4" :style="[$vuetify.breakpoint.mdAndDown ? {'margin': '0px'}:{'margin-top': '-50px'}]">
                <div>Swan Yee Htet Ko</div>
                <div>What's new? Discover by self</div>
                <div>swanyeehtetko.com</div>
            </v-col>
        </v-row>

        <!-- hidden pff -->
        <div class="hidden-lg-and-up">
            <hr/>
            <v-row>
                <v-col><b>119</b> posts</v-col>
                <v-col><b>17K</b> followers</v-col>
                <v-col><b>25</b> following</v-col>
            </v-row>
            <hr/>
        </div>
        
        <!-- user data -->
        <template>
            <v-tabs show-arrows
            v-model="profileTabId"
            background-color="transparent"
            centered
            >
                <v-tabs-slider color="black"></v-tabs-slider>

                <v-tab >
                    <v-icon class="mr-2">mdi-post-outline</v-icon>
                    Posts
                </v-tab>

                <v-tab >
                    <v-icon class="mr-2">mdi-television-classic</v-icon>
                    IGTV                    
                </v-tab>

                <v-tab >
                    <v-icon class="mr-2">mdi-content-save-outline</v-icon>
                    Saved                    
                </v-tab>

                <v-tab >
                    <v-icon class="mr-2">mdi-clipboard-account-outline</v-icon>
                    Tagged                    
                </v-tab>
            </v-tabs>

            <v-tabs-items style="background-color:transparent" v-model="profileTabId" >
                <v-tab-item :value="0">
                    <v-container>
                        <ViewMyPost/>
                    </v-container>
                </v-tab-item>
                <v-tab-item :value="1">
                    <v-container>
                        <IGTV/>
                    </v-container>
                </v-tab-item>
                <v-tab-item :value="2">
                    <v-container>
                        <Save/>
                    </v-container>
                </v-tab-item>
                <v-tab-item :value="3">
                    <v-container>
                        <Tagged/>
                    </v-container>
                </v-tab-item>
            </v-tabs-items>
        </template>

        <!-- Setting Dialog -->
        <template>
            <div class="text-center">
                <v-dialog
                v-model="openSettingDialog"
                width="500"
                >               

                <v-card>
                    <v-list flat>
                        <v-list-item-group
                        >
                        <template v-for="(item, i) in settingBox">
                            <v-divider v-if="item.text && i != 0" :key="i"></v-divider>
                            <v-list-item
                            :key="i"
                            >
                            <v-list-item-content>
                                <v-list-item-title  v-text="item.text" class="text-center"></v-list-item-title>
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
import ViewMyPost from '@/components/profile/ViewMyPost'
import IGTV from '@/components/profile/Igtv'
import Save from '@/components/profile/Save'
import Tagged from '@/components/profile/Tagged'
  export default {
    components:{
        ViewMyPost,
        IGTV,
        Save,
        Tagged
    },
    data () {
      return {
        openSettingDialog: false,
        settingBox: [
            {text: 'Change Password'},
            {text: 'Nametag'},
            {text: 'Apps and Websites'},
            {text: 'Notifications'},
            {text: 'Privacy and Security'},
            {text: 'Login Activity'},
            {text: 'Emails and Instagram'},
            {text: 'Report a Problem'},
            {text: 'Log Out'},
            {text: 'Cancel'}
        ]
      }
    },

    computed:{
        profileTabId:{
            get(){
                return this.$store.getters.profileTabId
            },
            set(e){
                this.$store.dispatch('takeTabId',{id: e});
            }
        }
    },

    methods:{
    }

  }
</script>