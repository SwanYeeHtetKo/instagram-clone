<template>
    <div>
        <v-card flat style="border:1px solid rgba(0,0,0,0.2)">
            <v-row no-gutters>
                <v-col style="position:relative" cols="12" xs="12" sm="12" md="4" :style="[$vuetify.breakpoint.smAndDown ? {'border': 'none'}:{'border-right': '1px solid rgba(0,0,0,0.2)'}]">
                    <v-btn class="text-lowercase ml-12 pt-5" text>swan_yee_htet_ko<v-icon>mdi-chevron-down</v-icon></v-btn>
                    <v-btn icon right absolute class="pt-5">
                        <v-icon>mdi-square-edit-outline</v-icon>
                    </v-btn>
                    <v-divider class="mt-6"></v-divider>
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
                        <v-list dense class="pa-0 ma-0">
                            <v-list-item dense>
                                <v-list-item-avatar size="30">
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
                        <v-divider></v-divider>
                        <v-card-text v-show="!checkBox">
                        <div id="scroll" :style="[ !checkBox ?{'min-height':'300px','max-height': '300px','overflow': 'auto'}:{}]">
                            <v-container >
                                <div v-for="(item,index) in messages" :key="index">
                                    <div v-if="item.date" class="text-center">{{item.date}}</div>
                                    <div :style="[item.user == 'friend' ? {'text-align': 'left'}: {'text-align': 'right'}]">
                                        <div class="mt-3" v-if="item.message == 'mdi-heart-outline'">
                                            <v-icon color="red">mdi-heart</v-icon>
                                        </div>
                                        <div v-else class="mt-3">
                                        {{item.message}}
                                        </div>
                                    </div>
                                </div>  
                            </v-container>
                            <br/><br/>
                        </div>
                        <div v-if="message">{{status}}</div>
                            <v-text-field
                            v-model="message" 
                            hide-details="auto" 
                            prepend-inner-icon="mdi-emoticon-happy-outline"
                            outlined single-line rounded 
                            label="Message..."
                            clearable
                            >
                            <template v-slot:append>
                                <div style="cursor: pointer" @click="sendMessage()" class="pt-1" v-if="message">
                                    Send
                                </div>
                                <div v-else>
                                    <v-icon class="mr-3" @click="$refs.file.click()">mdi-image</v-icon>
                                    <input type="file" ref="file" style="display: none">
                                    <v-icon @click="messages.push({user:'me' ,message: 'mdi-heart-outline'}),scrollToEnd()">mdi-heart-outline</v-icon>
                                </div>
                            </template>
                            </v-text-field>
                        </v-card-text>
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
        checkBox: true,
        messages: [
            {user:'friend', message:'hi',date: 'November 3, 2019 7:14 pm'},
            {user:'me',message:'hello',date: 'November 3, 2019 7:14 pm'},
            {user:'friend', message:'how are you?',date: 'November 3, 2019 7:14 pm'},
            {user:'me', message:'i\'m fine bro!',date: 'November 3, 2019 7:14 pm'},
            {user:'me', message:'Hello baby',date: 'Today'},
        ],
        message:null,
        status: null,
    }),

    watch:{
        message(){
            this.status = 'You are typing...'
        }
    },


    methods:{
        goChatBox(){
            this.checkBox = false;
        },

        sendMessage(){
            this.messages.push({user: 'me', message: this.message});
            this.scrollToEnd();
            this.message = null
        },

        scrollToEnd: function() {    	
            let scroll = this.$el.querySelector("#scroll");
            scroll.scrollTop = scroll.scrollHeight;
        },
    }
}
</script>