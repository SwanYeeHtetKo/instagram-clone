<template>
    <div>
        <p class="text-h5 text--primary">Login Activity</p>
        <p class="font-weight-bold text--primary">Where You're Logged in</p>

        <v-expansion-panels flat class="mb-6">
            <v-expansion-panel
                v-for="(item,i) in 5"
                :key="i"
            >
                <v-expansion-panel-header class="pa-0" expand-icon="">
                    <v-list dense two-line class="pa-0">
                        <v-list-item :ripple="false" link>
                            <v-list-item-avatar size="50">
                            <v-icon size="30">mdi-map-marker-outline</v-icon>
                            </v-list-item-avatar>
                            <v-list-item-content>
                            <v-list-item-title>
                                Myeik, Myanmar
                            </v-list-item-title>
                            <v-list-item-subtitle><span style="color:#65C74D">Active now .</span> This Linux</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-list-item-action>
                                <v-btn icon class="text-capitalize">
                                    <v-icon>mdi-chevron-down</v-icon>
                                </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>
                </v-expansion-panel-header>
                <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
                <v-divider></v-divider>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>