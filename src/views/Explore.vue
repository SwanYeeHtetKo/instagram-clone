<template>
    <div>
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="4">
                <div v-for="n in 2" :key="n">
                    <v-img contain :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`" :class="n != 1 ? 'mt-5': 'mt-0'"/>
                </div>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="8">
                <v-img height="100%" aspect-ratio="1.7" src="https://picsum.photos/500/300?random"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4" v-for="n in 15" :key="n">
                <v-img contain :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"/>
            </v-col>
        </v-row>
    </div>
</template>