<template>
    <div>
        <v-row class="hidden-md-and-down">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <div class="d-flex offset-lg-1 offset-xl-3">
                    <div>
                        <div style="position:relative">
                            <v-img style="z-index:1" src="@/assets/mobile.png"  ></v-img>
                            <div >
                                <div style="position:absolute;z-index:2;margin-top:-518px;left: 33.3%">
                                    <v-img class="first" src="@/assets/loginSlider1.jpg" width="240"></v-img>
                                </div>
                                <div style="position:absolute;z-index:3;margin-top:-518px;left: 33.3%">
                                    <v-img class="second" src="@/assets/loginSlider2.jpg" width="240"></v-img>
                                </div>
                                <div style="position:absolute;z-index:4;margin-top:-518px;left: 33.3%">
                                    <v-img class="third" src="@/assets/loginSlider3.jpg" width="240"></v-img>
                                </div>
                                <div style="position:absolute;z-index:5;margin-top:-518px;left: 33.3%">
                                    <v-img class="four" src="@/assets/loginSlider4.jpg" width="240"></v-img>
                                </div>
                                <div style="position:absolute;z-index:6;margin-top:-518px;left: 33.3%">
                                    <v-img class="five" src="@/assets/loginSlider5.jpg" width="240"></v-img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <v-row justify="center" align="center" style="height:100%">
                            <div>
                                <v-card flat width="350">
                                    <div v-if="!signUp">
                                        <div class="pt-12">
                                            <v-img src="@/assets/735145cfe0a4.png"  width="120" class="mx-auto"></v-img>
                                        </div>
                                        <v-row justify="center" class="mt-3">
                                            <v-avatar size="100">
                                                <v-img src="@/assets/avatar.jpg"></v-img>
                                            </v-avatar>
                                        </v-row>
                                        
                                            <div class="text-center mt-5">
                                                <v-btn width="250" route to="/" color="#459bf6" dark depressed small class="text-capitalize">
                                                    Continue as swan_yee_htet_ko
                                                </v-btn>
                                            </div>
                                        <p class="text-center mt-5">Not swan_yee_htet_ko? 
                                            <a @click="signUp = true" class="text-decoration-none">Switch accounts</a>
                                        </p>
                                    </div>
                                    <div v-if="signUp">
                                        <div class="pt-12">
                                            <v-img src="@/assets/735145cfe0a4.png"  width="120" class="mx-auto"></v-img>
                                        </div>
                                        <div class="mt-5" style="margin-left:50px;margin-right:50px">
                                            <v-row>
                                                <v-col>
                                                    <v-text-field outlined dense hide-details="auto" label="Phone number, username, or email"></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col>
                                                    <v-text-field outlined dense hide-details="auto" label="Password"></v-text-field>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                                <v-col>
                                                    <v-btn class="text-capitalize" route to="/" depressed small color="#459bf6" dark block>Log in</v-btn>
                                                </v-col>
                                            </v-row>

                                            <v-row no-gutters>
                                                <v-col class="flex-shrink-0"><v-divider class="mt-3"></v-divider></v-col>
                                                <v-col class="flex-shrink-0"><p class="text-center">OR</p></v-col>
                                                <v-col class="flex-shrink-0"><v-divider class="mt-3"></v-divider></v-col>
                                            </v-row>

                                            <v-row no-gutters>
                                                <v-col>
                                                    <v-btn block text color="#385185" @click="signUp = false" class="text-capitalize">
                                                        <v-icon class="mr-3" >mdi-facebook</v-icon>
                                                        Log in with Facebook
                                                    </v-btn>
                                                </v-col>
                                            </v-row>

                                            <v-row no-gutters >
                                                <v-col cols="12">
                                                    <p class="text-center mt-2" style="font-size: 11px"><a class="text-decoration-none ">Forgot password?</a></p>
                                                </v-col>
                                            </v-row>                                            
                                        </div>
                                    </div>
                                    <br/>
                                </v-card>

                                <v-card v-if="signUp" flat width="350" class="mt-3">
                                    <v-card-text>
                                        <div class="text-center text--primary">Don't have an accounts? <span @click="goTosignUp" style="color:#459bf6;cursor:pointer" class="font-weight-bold">Sign up</span></div>
                                    </v-card-text>
                                </v-card>

                                <p v-if="signUp" class="text-center mt-3" style="width:350px">Get the app</p>
                            </div>
                        </v-row>
                    </div>
                </div>                
            </v-col>
        </v-row>

        <v-row class="hidden-lg-and-up" justify="center" align="center" style="height:100%">
            <v-card flat width="400">
                <div class="pt-12">
                    <v-img src="@/assets/735145cfe0a4.png"  width="120" class="mx-auto"></v-img>
                </div>
                <v-row justify="center" class="mt-3">
                    <v-avatar size="100">
                        <v-img src="@/assets/avatar.jpg"></v-img>
                    </v-avatar>
                </v-row>
                
                    <div class="text-center mt-5">
                        <v-btn route to="/" width="250" color="#459bf6" dark depressed small class="text-capitalize">
                            Continue as swan_yee_htet_ko
                        </v-btn>
                    </div>
                <p class="text-center mt-5">Not swan_yee_htet_ko? <a href="#" class="text-decoration-none">Switch accounts</a></p>
                <br/>
            </v-card>
        </v-row>
    </div>
</template>

<script>
export default {
    data:() =>({
        signUp: false
    }),

    methods:{
        goTosignUp(){
            this.$router.push('/signUp')
        }
    }
}
</script>

<style scoped>
@keyframes imageFadeInOut {
    0% {
    opacity:1;
  }
  17% {
    opacity:1;
  }
  25% {
    opacity:0;
  }
  92% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

.first{
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-name: imageFadeInOut;
    animation-delay: 10s;
}


.second{
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-name: imageFadeInOut;
    animation-delay: 8s;
}

.third{
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-name: imageFadeInOut;
    animation-delay: 6s;
}

.four{
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-name: imageFadeInOut;
    animation-delay: 4s;
}

.five{
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 10s;
    animation-name: imageFadeInOut;
    animation-delay: 2s;
}
</style>