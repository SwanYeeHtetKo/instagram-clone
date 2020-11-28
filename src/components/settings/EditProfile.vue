<template>
    <div>
        <v-list dense two-line class="offset-md-2">
          <v-list-item >
            <v-list-item-avatar size="50">
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">
                swan_yee_htet_ko
              </v-list-item-title>
              <v-list-item-subtitle>Change Profile Photo</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="3" class="text-md-right">Name</v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <v-text-field outlined dense hide-details="auto"></v-text-field>
                <p class="text--disabled">Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</p>
                <p class="text--disabled">You can only change your name twice within 14 days.</p>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="3" class="text-md-right">Username</v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <v-text-field outlined dense hide-details="auto"></v-text-field>
                <p class="text--disabled">
                    In most cases, you'll be able to change your username back to swan_yee_htet_ko for another 14 days. Learn More
                </p>                
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="3" class="text-md-right">Website</v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <v-text-field outlined dense hide-details="auto"></v-text-field>                               
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="3" class="text-md-right">Bio</v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <v-textarea outlined dense hide-details="auto"></v-textarea>                               
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="6" class="offset-md-3">
                <p>Personal Information </p>
                <p>Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.</p>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="3" class="text-md-right">Email</v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <v-text-field outlined dense hide-details="auto"></v-text-field>                               
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="3" class="text-md-right">Phone Number</v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <v-text-field outlined dense hide-details="auto"></v-text-field>                               
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="3" class="text-md-right">Gender</v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <v-text-field outlined dense hide-details="auto"></v-text-field>                               
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="3" class="text-md-right">
                Similar Account Suggestions
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <v-checkbox
                label="Include your account when recommending similar accounts people might want to follow.[?]"
                ></v-checkbox>                          
            </v-col>
        </v-row>
    </div>
</template>