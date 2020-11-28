<template>
    <div>
        <v-card>
            <v-tabs vertical color="dark">
                <v-tab class="text-capitalize" v-for="item in tabs" :key="item" :href="`/profile/#${item}`">                    
                    {{item}}
                </v-tab>                

                <v-tab-item v-for="item in tabs" :key="item" :value="`/profile/${item}`">
                    <v-card flat class="mr-12 ml-12">
                        <v-card-text>
                            <tabsComponents v-show="item == component.link" v-for="component in tabsComponents" :key="component.name" :is="component.name"  />
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs>
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
    })
}
</script>