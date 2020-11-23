<template>
    <div>
        <div >
            <v-row>
                <v-col cols="12" xs="12" sm="12" md="4" v-for="n in 10" flat :key="n">                    
                    <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"/>                            
                </v-col>
            </v-row>
            <!-- <v-hover>
                <template v-slot:default="{ hover }"> 
                     <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"/> 
                     <v-fade-transition>
                        <v-overlay
                            v-if="hover"
                            absolute
                            color="#036358"
                        >
                            <v-btn>See more info</v-btn>
                        </v-overlay>
                    </v-fade-transition>
                </template>
            </v-hover> -->
        </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      overlay: false,
    }),
  }
</script>