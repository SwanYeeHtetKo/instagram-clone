<template>
    <div>
        <p class="text-center text--secondary" v-if="$route.path == '/account/emailsingup'">Log in to continue</p>
        <v-card class="mx-auto" :width="$route.path == '/account/emailsingup' ? '350': '100%'" flat style="border: 1px solid rgba(0,0,0,0.2)">
            
            <v-card-text  v-if="$route.path == '/account/emailsingup'">
                <v-img width="150" class="mx-auto mt-5" src="@/assets/735145cfe0a4.png"/>
                <p class="text-center sub-title font-weight-bold mt-3">Sign up to see photos and<br/> videos from your friends.</p>
                <v-row>
                    <v-col cols="12">
                        <v-btn block color="#0195F6"  depressed route to="/login" dark class="text-capitalize">
                            <v-icon class="mr-3" >mdi-facebook</v-icon>
                            Log in with Facebook
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row no-gutters>
                    <v-col class="flex-shrink-0"><v-divider class="mt-3"></v-divider></v-col>
                    <v-col class="flex-shrink-0"><p class="text-center">OR</p></v-col>
                    <v-col class="flex-shrink-0"><v-divider class="mt-3"></v-divider></v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <v-text-field hide-details="auto" dense outlined label="Mobile Number or Email"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field hide-details="auto" dense outlined label="Full Name"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field hide-details="auto" dense outlined label="Username"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field hide-details="auto" dense outlined label="Password"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-btn route to="/" block dark depressed color="#0195f6" class="text-capitalize">Sign up</v-btn>
                    </v-col>
                </v-row>
                <p class="text-center">By signing up, you agree to our Terms , Data <br/> Policy and Cookies Policy .</p>
            </v-card-text>

            <v-tabs v-else vertical color="dark" >
                <v-tab class="text-capitalize hidden-sm-and-down" v-for="item in tabs" :key="item" :href="`/profile/#${item}`">                    
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

        <v-card width="350" class="mx-auto mt-3" v-if="$route.path == '/account/emailsingup'">
            <v-card-text>
                <div class="text-center">Have an account? <a @click="$router.push('/login')" class="text-decoration-none">Log in</a></div>
            </v-card-text>
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

<style scoped>
>>>.v-slide-group__wrapper{
    border-right: 1px solid rgba(0,0,0,0.2)!important
}
</style>