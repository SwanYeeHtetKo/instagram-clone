<template>
    <div>
        <p class="text-center text--secondary">Log in to continue</p>
        <v-card class="mx-auto" width="350" flat style="border: 1px solid rgba(0,0,0,0.2)">
            
            <v-card-text >
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
        </v-card>

        <v-card width="350" class="mx-auto mt-3">
            <v-card-text>
                <div class="text-center">Have an account? <a @click="$router.push('/login')" class="text-decoration-none">Log in</a></div>
            </v-card-text>
        </v-card>
    </div>
</template>