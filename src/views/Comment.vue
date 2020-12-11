<template>
    <div>
            <v-card class="rounded-0">
                <v-card-text class="pa-0">
                    <v-row no-gutters>
                        <v-col>
                            <v-img :src="`https://picsum.photos/500/300?random=`+$route.params.id" height="100%"/>
                        </v-col>
                        <v-col>
                            <v-list dense two-line>
                                <v-list-item>
                                    <v-list-item-avatar size="50">
                                    <v-img 
                                    class="grey lighten-2"
                                    lazy-src="@/assets/avatar.jpg"
                                    aspect-ratio="1" 
                                    src="@/assets/avatar.jpg">
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
    </div>
</template>
