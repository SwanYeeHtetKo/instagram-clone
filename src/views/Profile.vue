<template>
    <div>
        <!-- avatar -->
        <v-row>
            <v-col cols="4">
                <v-row justify="center">
                <v-avatar size="150" >
                    <v-img  src="https://cdn.vuetifyjs.com/images/john.png"/>
                </v-avatar>
                </v-row>
            </v-col>

            <v-col cols="8">
                <v-row>
                    <v-col>
                        <div class="text-h4">swan_yee_htet_ko</div>
                    </v-col>
                    <v-col>
                        <v-btn class="text-capitalize" outlined depressed>Edit Profile</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn icon>
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
            <v-tabs
            v-model="tab"
            background-color="transparent"
            centered
            >
                <v-tabs-slider color="black"></v-tabs-slider>

                <v-tab href="#tab-1">
                    <v-icon class="mr-2">mdi-post-outline</v-icon>
                    Posts
                </v-tab>

                <v-tab href="#tab-2">
                    <v-icon class="mr-2">mdi-television-classic</v-icon>
                    IGTV                    
                </v-tab>

                <v-tab href="#tab-3">
                    <v-icon class="mr-2">mdi-content-save-outline</v-icon>
                    Saved                    
                </v-tab>

                <v-tab href="#tab-4">
                    <v-icon class="mr-2">mdi-clipboard-account-outline</v-icon>
                    Tagged                    
                </v-tab>
            </v-tabs>

            <v-tabs-items style="background-color:transparent" v-model="tab" >
                <v-tab-item value="tab-1">
                    <v-container>
                        <ViewMyPost/>
                    </v-container>
                </v-tab-item>
                <v-tab-item value="tab-2">
                    <v-container>
                        <IGTV/>
                    </v-container>
                </v-tab-item>
                <v-tab-item value="tab-3">
                    <v-container>
                        <Save/>
                    </v-container>
                </v-tab-item>
                <v-tab-item value="tab-4">
                    <v-container>
                        <Tagged/>
                    </v-container>
                </v-tab-item>
            </v-tabs-items>
        </template>
    </div>
</template>

<script>
import ViewMyPost from '@/components/ViewMyPost'
import IGTV from '@/components/Igtv'
import Save from '@/components/Save'
import Tagged from '@/components/Tagged'
  export default {
    components:{
        ViewMyPost,
        IGTV,
        Save,
        Tagged
    },
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>