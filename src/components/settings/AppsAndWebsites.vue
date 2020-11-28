<template>
    <div>

        <div class="text-h5 mt-12">Apps and Websites</div>

        <v-tabs
          v-model="model"
          grow
          color="black"
        >
          <v-tab
            v-for="i in tab"
            :key="i.title"
            :href="`#tab-${i.title}`"
          >
            {{i.title}}
          </v-tab>
        </v-tabs>

        <v-tabs-items  v-model="model">
            <v-tab-item
                v-for="i in tab"
                :key="i.title"
                :value="`tab-${i.title}`"
            >
                <v-card flat>
                    <v-card-text>
                        <p>{{i.text}}</p>
                        <p>{{i.subText}}</p>
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        model: 'tab-2',
        tab: [
            {
                title:'Active',
                text: 'These are apps and websites you\'ve used Instagram to log into and have recently used. They can request info you chose to share with them.',
                subText: 'You have not authorized any applications to access your Instagram account.'
            },
            {
                title:'Expired',
                text: 'These are apps and websites you\'ve used Instagram to log into and may not have used in a while. They may still have access to info you previously shared, but their ability to make additional requests for private info has expired.',
                subText: 'You have no expired applications that had access to your Instagram account.'
            },
            {
                title:'Removed',
                text: 'These are apps and websites you removed from your account. This means they may still have access to info you previously shared, but can\'t make additional requests for private info.',
                subText: 'You have no removed applications that had access to your Instagram account.'
            }
        ]
      }
    },
  }
</script>