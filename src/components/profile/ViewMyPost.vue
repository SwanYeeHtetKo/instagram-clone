<template>
    <div>
        <v-row>
            <template v-for="(n, i) in 30">
                <v-col cols="12" xs="12" sm="12" md="4" flat :key="i">
                    
                    <v-hover v-slot="{ hover }">
                        <v-card flat @click="openDialog(`https://picsum.photos/500/300?random=${n * 3 + 10}`)">
                            <v-img :src="`https://picsum.photos/500/300?random=${n * 3 + 10}`">
                            
                            <div v-if="hover" style="background-color:rgba(0,0,0,0.3);height:100%">
                                <v-row justify="center" align="center" style="height:100%">
                                    <div>
                                        <v-icon color="white">mdi-heart</v-icon> <span style="color:white">15</span>
                                        <v-icon color="white" class="ml-5">mdi-message</v-icon> <span style="color:white">6</span>
                                    </div>
                                </v-row>                                    
                            </div>
                            
                            </v-img>
                        </v-card>
                    </v-hover>                      
                    
                </v-col>
            </template>
        </v-row>

        <!-- full image dialog -->
        <v-dialog v-model="fullImageDialog" max-width="900">
            <v-card class="rounded-0">
                <v-card-text class="pa-0">
                    <v-row no-gutters>
                        <v-col>
                            <v-img :src="image" height="100%"/>
                        </v-col>
                        <v-col>
                            <v-list dense two-line>
                                <v-list-item>
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
                                        <v-btn icon @click="postSettingsDialog = true"> 
                                            <v-icon>mdi-dots-horizontal</v-icon>
                                        </v-btn>
                                    </v-list-item-action>
                                </v-list-item>
                            </v-list>
                            <v-divider class="hidden-md-and-down"></v-divider>
                            <div class="hidden-md-and-down" style="min-height:200px"></div>
                            <v-divider></v-divider>
                            <div class="d-flex">
                                <div class="ml-3">
                                    <v-btn icon>
                                    <v-icon>mdi-heart-outline</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                    <v-icon>mdi-message-outline</v-icon>
                                    </v-btn>
                                    <v-btn icon>
                                    <v-icon>mdi-send-outline</v-icon>
                                    </v-btn>
                                </div>
                                <div class="ml-auto">
                                    <v-btn icon >
                                        <v-icon>mdi-content-save-outline</v-icon>
                                    </v-btn>
                                </div>
                            </div>
                            <div class="ma-5">
                                <v-avatar size="20">
                                    <v-img src="https://picsum.photos/500/300?random"/>
                                </v-avatar>
                                Liked by <b>wuro_bmm33</b> and 1 <b>other</b><br/>
                                <span class="text--disabled mt-1">OCTOBER 2</span>
                            </div>
                            <v-divider ></v-divider>
                            <v-card-actions>
                            <v-textarea rounded label="Add a comment" rows="1" no-resize single-line hide-details="auto">
                            <template v-slot:append-outer>
                                <v-btn class="text-capitalize" color="#459bf6" text>Post</v-btn>
                            </template>
                            </v-textarea>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>

        <!-- post dialog -->
        <template>
            <div class="text-center">
                <v-dialog
                v-model="postSettingsDialog"
                width="400"
                >
                <v-card class="rounded-lg">
                    <v-list flat>
                    <v-list-item-group
                    >
                    <template v-for="(item, i) in postSettingsList">
                        <v-divider v-if="item.text && i != 0" :key="i"></v-divider>
                        <v-list-item
                        :key="item.text"
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
  export default {
    data: () => ({
      overlay: false,
      fullImageDialog: false,
      image : null,
      postSettingsDialog: false,
      postSettingsList:[
        {text: 'Go to post'},
        {text: 'Share to...'},
        {text: 'Copy Link'},
        {text: 'Embed'},
        {text: 'Cancel'},
      ]
    }),

    methods:{
        openDialog(e){
            this.image = e;
            this.fullImageDialog = true;
        }
    }
  }
</script>