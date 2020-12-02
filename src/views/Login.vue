<template>
    <div>
        <v-row class="hidden-md-and-down">
            <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <div class="d-flex offset-lg-1">
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
                                        <v-btn width="250" route to="/" color="#459bf6" dark depressed small class="text-capitalize">
                                            Continue as swan_yee_htet_ko
                                        </v-btn>
                                    </div>
                                <p class="text-center mt-5">Not swan_yee_htet_ko? <a href="#" class="text-decoration-none">Switch accounts</a></p>
                                <br/>
                            </v-card>
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
    animation-delay: 0s;
}
</style>