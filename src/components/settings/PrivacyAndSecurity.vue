<template>
    <div>
        <div v-for="item in items" :key="item.title">
            <p class="text-h5 text--primary">{{item.title}}</p>
            <v-checkbox
            color="black"
            v-if="item.label"
            :label="item.label"
            ></v-checkbox>
            <v-radio-group v-if="item.rdoLabel">
                <v-radio                  
                    v-for="n in item.rdoLabel"
                    :key="n"
                    :label="n"
                    :value="n"
                ></v-radio>
            </v-radio-group>
            <p :style="[
            item.description == 'Edit Comment Settings' || 
            item.description == 'View Account Data' ||
            item.description == 'Edit Two-Factor Authentication Setting' ||
            item.description == 'Request Download' ||
            item.description == 'Support' 
            ? {'color': '#459BF6','cursor':'pointer'}: {'color': 'black'}]"
            v-html="item.description">
            </p>
            <v-divider></v-divider>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        items: [
            {
                title: 'Account Privacy',
                label: 'Private Account',
                description: 'When your account is private, only people you approve can see your photos and videos on Instagram. Your existing followers won\'t be affected.'
            },
            {
                title: 'Activity Status',
                label: 'Show Activity Status',
                description:'Allow accounts you follow and anyone you message to see when you were last active on Instagram apps. When this is turned off, you won\'t be able to see the activity status of other accounts.'
            },
            {
                title: 'Story Sharing',
                label: 'Allow Sharing',
                description: 'Let people share your story as messages'
            },
            {
                title: 'Comments',
                description: 'Edit Comment Settings'
            },
            {
                title: 'Photos of You',
                rdoLabel: [
                    'Add Automically','Add Manually'
                ],
                description: 'Choose how you want photos of you added to your profile. <a href="#" style="color:#459BF6" class="text-decoration-none">Learn more</a> about Photos of You.'
            },
            {
                title: 'Account Data',
                description: 'View Account Data'
            },
            {
                title: 'Two-Factor Authentication',
                description: 'Edit Two-Factor Authentication Setting'
            },
            {
                title: 'Data Download',
                description: 'Request Download'
            },
            {
                title: 'Privacy and Security Help',
                description: 'Support'
            }
        ]
    })
}
</script>