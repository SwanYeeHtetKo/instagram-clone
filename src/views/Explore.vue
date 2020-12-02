<template>
    <div>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="4">
                <div v-for="n in 2" :key="n">
                    <v-img contain :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" :src="`https://picsum.photos/500/300?random=${n * 5 + 10}`" :class="n != 1 ? 'mt-5': 'mt-0'">
                    <template v-slot:placeholder>
                        <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                        >
                            <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                            ></v-progress-circular>
                        </v-row>
                        </template>
                    </v-img>
                </div>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="8">
                <v-img height="100%" contain :lazy-src="`https://picsum.photos/500/300?random`" src="https://picsum.photos/500/300?random">
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="4" v-for="n in 15" :key="n">
                <v-img contain :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`" :src="`https://picsum.photos/500/300?random=${n * 2 + 10}`">
                <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
                        <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>
    </div>
</template>