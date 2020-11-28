<template>
    <div>
        <v-list dense class="offset-md-2">
          <v-list-item >
            <v-list-item-avatar size="50">
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">
                swan_yee_htet_ko
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="3" class="text-md-right">Old Password</v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <v-text-field background-color="#FAFAFA" outlined dense hide-details="auto"></v-text-field>                               
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="3" class="text-md-right">New Password</v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <v-text-field background-color="#FAFAFA" outlined dense hide-details="auto"></v-text-field>                               
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="3" class="text-md-right">Confirm New Password</v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
                <v-text-field background-color="#FAFAFA" outlined dense hide-details="auto"></v-text-field>                               
            </v-col>
        </v-row>

        <v-row>            
            <v-col cols="12" xs="12" sm="12" md="6" class="offset-md-3">
                <v-btn color="#0195f6" dark depressed small>Change Password</v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" xs="12" sm="12" md="6" class="offset-md-3">
                <p>Forgot Password?</p>
            </v-col>
        </v-row>
    </div>
</template>