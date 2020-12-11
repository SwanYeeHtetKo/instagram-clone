<template>
    <div>
        
        <v-card class="mx-auto" width="100%" flat style="border: 1px solid rgba(0,0,0,0.2)">

            <div >
                <v-tabs v-model="accountTabId" vertical color="dark" >
                    <v-tab  class="text-capitalize hidden-sm-and-down" v-for="item in tabs" :key="item" >
                        {{item}}
                    </v-tab>                
                
                    <v-tabs-items style="background-color:transparent" v-model="accountTabId" >
                        <v-tab-item v-for="(item,index) in tabs" :key="item" :value="index">
                            <v-card flat class="mr-12 ml-12">
                                <v-card-text>
                                    <tabsComponents v-show="item == component.link" v-for="component in tabsComponents" :key="component.name" :is="component.name"  />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </v-tabs>
            </div>
        </v-card>

        
    </div>
</template>

<script>
import EditProfile from '@/components/settings/EditProfile'
import ChanePassword from '@/components/settings/ChanePassword'
import AppsAndWebsites from '@/components/settings/AppsAndWebsites'
import EmailAndSms from '@/components/settings/EmailAndSms'
import PushNotifications from '@/components/settings/PushNotifications'
import ManageContacts from '@/components/settings/ManageContacts'
import PrivacyAndSecurity from '@/components/settings/PrivacyAndSecurity'
import LoginActivity from '@/components/settings/LoginActivity'
import EmailFromInstagram from '@/components/settings/EmailFromInstagram'
export default {
    
    components:{
        EditProfile,
        ChanePassword,
        AppsAndWebsites,
        EmailAndSms,
        PushNotifications,
        ManageContacts,
        PrivacyAndSecurity,
        LoginActivity,
        EmailFromInstagram
    },

    computed:{
        accountTabId:{
            get(){
                return this.$store.getters.accountTabId
            },
            set(e){
                this.$store.dispatch('takeAccountId',{id: e})
            }
        }
    },

    data:() =>({
        tabs: [
            'Edit Profile',
            'Change Password',
            'Apps And Websites',
            'Email and SMS',
            'Push Notifications',
            'Manage Contacts',
            'Privacy And Security',
            'Login Activity',
            'Email from Instagram',
        ],
        tabsComponents: [
            {name: 'EditProfile', link: 'Edit Profile'},
            {name: 'ChanePassword', link: 'Change Password'},
            {name: 'AppsAndWebsites', link: 'Apps And Websites'},
            {name: 'EmailAndSms', link: 'Email and SMS'},
            {name: 'PushNotifications', link: 'Push Notifications'},
            {name: 'ManageContacts', link: 'Manage Contacts'},
            {name: 'PrivacyAndSecurity', link: 'Privacy And Security'},
            {name: 'LoginActivity', link: 'Login Activity'},
            {name: 'EmailFromInstagram', link: 'Email from Instagram'},
        ]
    }),

    
}
</script>

<style scoped>
>>>.v-slide-group__wrapper{
    border-right: 1px solid rgba(0,0,0,0.2)!important
}
</style>