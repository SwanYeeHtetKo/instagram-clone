<template>
    <div>
        <v-dialog
        v-model="dialog"
        width="500"
        persistent
        >
        
            <v-card>
                <v-toolbar dense flat>
                    <v-toolbar-title >
                        <v-icon>mdi-close</v-icon>
                    </v-toolbar-title>
                    <div class="offset-4 font-weight-bold">New Message</div>
                    <v-spacer></v-spacer>
                    <v-btn text color="#0195f6" :disabled="noSelectedUser" class="text-capitalize">Next</v-btn>
                </v-toolbar>
                <v-divider></v-divider>

                <div class="d-flex flex-wrap">
                    <div style="width: 10%" class="ml-3 mt-3 font-weight-bold">To:</div>
                    <div v-if="selectedUser" >
                        <div v-for="user in selectedUser" :key="user.id">
                            <v-chip 
                                class="ma-2"
                                close
                                color="cyan"
                                @click:close="clearSelectedUser(user.id)"
                                label
                                text-color="white">
                                {{user.title}}
                            </v-chip>
                        </div>
                    </div>
                    <div  class="mt-1">
                        <v-text-field
                        v-model="search"
                        dense 
                        single-line 
                        solo 
                        flat 
                        label="Search" 
                        class="mr-5" 
                        hide-details="auto">
                        </v-text-field>
                    </div>
                </div>
                
                <v-divider></v-divider>

                <div class="mt-5">
                    <div class="ml-3 font-weight-bold">Suggested</div>
                    
                    <v-list dense two-line  >
                        
                        <v-list-item dense  v-for="(item) in items"
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
                                <v-checkbox @click="pushArraySelectedUser(item)" v-model="item.select"></v-checkbox>
                        </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </div>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="closeDialog()"
                >
                    I accept
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props:{
        dialog: Boolean
    },
    
    data:() =>({
        search: null,
        noSelectedUser: true,
        selectedUser: [],
        items: [
        {
          id: 1,
          avatar: 'https://picsum.photos/200/300?random=1',
          title: 'Brunch this weekend?',
          subtitle: `Follows you`,
          select: false,
        },
        {
            id: 2,
          avatar: 'https://picsum.photos/200/300?random=2',
          title: 'Swan Yee Htet Ko',
          subtitle: `New to instagram`,
          select: false,
        },
        {
            id: 3,
          avatar: 'https://picsum.photos/200/300?random=3',
          title: 'Oui oui',
          subtitle: 'Followed by sabalphyu98',
          select: false,
        },
        {
            id: 4,
          avatar: 'https://picsum.photos/200/300?random=4',
          title: 'Birthday gift',
          subtitle: 'Suggested for you',
          select: false,
        },
        {
            id: 5,
          avatar: 'https://picsum.photos/200/300?random=5',
          title: 'Recipe to try',
          subtitle: 'Followed by yeir_min',
          select: false,
        },
      ],
    }),

    watch:{
        selectedUser(val){
            if(val){
                return this.noSelectedUser = false;
            }else{
                return this.noSelectedUser = true;
            }
        }
    },

    methods:{
        closeDialog(){
            this.$emit('closeDialogData')
        },
        pushArraySelectedUser(e){
            let toRemoveArray = this.selectedUser.findIndex((v) => {
                return v.id == e.id
            })
            if(toRemoveArray !== -1){
                this.selectedUser.splice(toRemoveArray,1)
            }else{
                this.selectedUser.push({
                    id: e.id,
                    title: e.title
                })
                
            }
        },
        clearSelectedUser(id){
            let toRemoveArray = this.selectedUser.findIndex((e) => {
                return e.id == id
            })
            this.selectedUser.splice(toRemoveArray,1)
        }
    }
}
</script>