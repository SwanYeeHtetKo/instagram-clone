<template>
    <div>
        <v-card flat style="border:1px solid rgba(0,0,0,0.2)">
            <v-row no-gutters>
                <v-col cols="12" xs="12" sm="12" md="4" :style="[$vuetify.breakpoint.smAndDown ? {'border': 'none'}:{'border-right': '1px solid rgba(0,0,0,0.2)'}]">
                    <v-btn class="text-lowercase ml-12" text>swan_yee_htet_ko<v-icon>mdi-menu-down</v-icon></v-btn>
                    <v-btn icon>
                        <v-icon>mdi-square-edit-outline</v-icon>
                    </v-btn>
                    <v-divider></v-divider>
                    <v-list>
                        <v-list-item two-line>
                            <v-list-item-avatar>
                                <v-img src="https://cdn.vuetifyjs.com/images/john.png"/>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>Two-line item</v-list-item-title>
                                <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="8">
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
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>