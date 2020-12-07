<template>
    <div>
        <v-card flat style="border:1px solid rgba(0,0,0,0.2)">
            <v-row no-gutters>
                <v-col style="position:relative" cols="12" xs="12" sm="12" md="4" :style="[$vuetify.breakpoint.smAndDown ? {'border': 'none'}:{'border-right': '1px solid rgba(0,0,0,0.2)'}]">
                    <v-btn class="text-lowercase ml-12 mt-3" text>swan_yee_htet_ko<v-icon>mdi-chevron-down</v-icon></v-btn>
                    <v-btn @click="choosePeople()" icon right absolute class="mt-3">
                        <v-icon>mdi-square-edit-outline</v-icon>
                    </v-btn>
                    <v-divider class="mt-3"></v-divider>
                    <v-list >
                        <v-list-item-group v-model="selectedItem" color="primary">
                            <v-list-item  v-for="(item,i) in groups" :key="i" two-line @click="goChatBox(item)">
                                <v-list-item-avatar>
                                    <v-img :src="`https://picsum.photos/200/300?random${i * 5+ 10}`"/>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <!-- Your can check with type or array... as you like -->
                                    <v-list-item-title v-if="!Array.isArray(item.user)">{{item.user}}</v-list-item-title>
                                    <v-list-item-title v-else >
                                        <div class="d-flex">
                                            <div class="text-truncate" v-for="(group,i2) in item.user" :key="i2">
                                                {{group.title}}
                                                <span v-show="i2 -1">,</span>
                                            </div>
                                        </div>
                                    </v-list-item-title>
                                    <v-list-item-subtitle>You sent a message . {{item.date}}</v-list-item-subtitle>
                                </v-list-item-content>                            
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="8">
                    <div v-if="currentChatUser.length != 0">
                        <v-list dense class="pa-0 ma-0">
                            <v-list-item dense>
                                <v-list-item-avatar size="30">
                                    <v-img src="https://picsum.photos/200/300?random"/>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title v-if="currentChatUser.length > 1">
                                        <div class="d-flex">
                                        <div class="text-truncate" v-for="(group,i2) in currentChatUser" :key="i2">
                                            {{group.title}}
                                            <span v-show="i2 -1">,</span>
                                        </div>
                                    </div>
                                    </v-list-item-title>
                                    <v-list-item-title v-else>{{currentChatUser[0].title}}</v-list-item-title>                
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
                                    <v-icon @click="messages.push({user:'me' ,message: 'mdi-heart-outline',date: 'Today'}),scrollToEnd()">mdi-heart-outline</v-icon>
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
                            <v-btn @click="choosePeople()" class="text-capitalize" small depressed color="#0195f6" dark>Send Message</v-btn>
                        </v-row>
                        <br/>
                    </div>
                </v-col>
            </v-row>
        </v-card>

        <!-- Choose People -->
        <ChoosePeopleDialog  :dialog="dialog" @selectedUserData="selectedUser" @closeDialogData="closeDialog"/>
    </div>
</template>
<script>
import ChoosePeopleDialog from '@/components/message/ChoosePeopleDialog'
export default {

    components:{
        ChoosePeopleDialog
    },

    data:() =>({
        selectedItem: null,
        checkBox: true,
        messages: [
            // Note: add null for date if user send same date Use some function eg.(map)
            {user:'friend', message:'hi',date: 'November 3, 2019'},
            {user:'me',message:'hello',date: null},
            {user:'friend', message:'how are you?',date: null},
            {user:'me', message:'i\'m fine bro!',date: null},
            {user:'me', message:'Hello baby',date: null},
        ],
        message:null,
        status: null,
        dialog: false,
        groups: [
            //Note:  use key with id from api
            {user: 'pearl_twal',type: 'personal', date: '56 w'}
        ],
        currentChatUser: []
    }),

    watch:{
        message(){
            this.status = 'You are typing...'
        }
    },


    methods:{
        goChatBox(item){
            this.checkBox = false;
            this.currentChatUser = [{title:item.user}]
        },

        sendMessage(){
            this.messages.push({user: 'me', message: this.message,date: new Date()});
            this.scrollToEnd();
            this.message = null
        },

        scrollToEnd: function() {    	
            let scroll = this.$el.querySelector("#scroll");
            scroll.scrollTop = scroll.scrollHeight;
        },

        choosePeople(){
            this.dialog = true;
        },
        closeDialog(){
            this.dialog = false;
            
        },

        selectedUser(e){
            this.currentChatUser = []
            if(e.length > 1){
                this.groups.push({user: e, type: 'group', date: 'Today'});
            }else{
                this.groups.push({user: e[0].title, type: 'personnal', date: 'Today'});
            }
            this.currentChatUser =(e);
            this.closeDialog();
            this.checkBox = false;
            this.messages = [];
            this.selectedItem = this.groups.length - 1
        }
    }
}
</script>