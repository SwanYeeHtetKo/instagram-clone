<template>
    <div>
        <v-card flat style="border:1px solid rgba(0,0,0,0.2)">
            <v-row no-gutters>
                <v-col style="position:relative" cols="12" xs="12" sm="12" md="4" :style="[$vuetify.breakpoint.smAndDown ? {'border': 'none'}:{'border-right': '1px solid rgba(0,0,0,0.2)'}]">
                    <v-btn class="text-lowercase ml-12" text>swan_yee_htet_ko<v-icon>mdi-chevron-down</v-icon></v-btn>
                    <v-btn icon right absolute>
                        <v-icon>mdi-square-edit-outline</v-icon>
                    </v-btn>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-item two-line @click="goChatBox()">
                            <v-list-item-avatar>
                                <v-img src="https://picsum.photos/200/300?random"/>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>pearl_twal</v-list-item-title>
                                <v-list-item-subtitle>You sent a message . 56 w</v-list-item-subtitle>
                            </v-list-item-content>                            
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="8">
                    <div>
                        <v-list>
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-img src="https://picsum.photos/200/300?random"/>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>pearl_twal</v-list-item-title>                                    
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn icon>
                                        <v-icon>mdi-help</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                    </div>
                    <div v-show="checkBox">
                        <v-row justify="center" align="center" class="mt-10">
                            <v-avatar size="200">
                                <v-icon size="100">mdi-send-outline</v-icon>
                            </v-avatar>
                        </v-row>
                        <p class="text-center">Your Messages</p>
                        <p class="text-center">Send private photos and messages to a friend or group.</p>
                        <v-row justify="center" align="center">
                            <v-btn class="text-capitalize" small depressed color="#0195f6" dark>Send Message</v-btn>
                        </v-row>
                        <br/>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    data:() =>({
        checkBox: true
    }),

    methods:{
        goChatBox(){
            this.checkBox = false;
        }
    }
}
</script>