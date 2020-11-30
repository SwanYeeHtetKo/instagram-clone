<template>
    <div>
        <p class="text-h5 text--primary">Emails From Instagram</p>

        <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
        >
            <v-tab
                v-for="item in items"
                :key="item.title"
            >
                {{ item.title }}
            </v-tab>

                        
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="item in items"
                :key="item.title"
            >
                <v-card
                color="basil"
                flat
                >
                <v-card-text v-html="item.text"></v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          {title:'SECURITY',text:'This is a list of emails Instagram has sent you about security and login in the last 14 days. You can use it to verify which emails are real and which are fake. <a href="#" style="color:#459BF6" class="text-decoration-none">Learn more.</a>'},
          {title: 'OTHER', text: 'This is a list of the emails Instagram has sent you in the last 14 days that aren\'t about security or login. You can use it to verify which emails are real and which are fake. <a href="#" style="color:#459BF6" class="text-decoration-none">Learn more.</a>'}
        ],        
      }
    },
  }
</script>