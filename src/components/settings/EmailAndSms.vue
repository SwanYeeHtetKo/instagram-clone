<template>
    <div>
        <p class="text-h5">Subscribe to:</p>
        <div v-for="item in emailAndSms" :key="item.label">
            <v-checkbox color="black" :label="item.label" hide-details="auto"></v-checkbox>
            <span>{{item.detail}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        emailAndSms: [
            {label: 'Feedback Emails',detail: 'Give feedback on Instagram.'},
            {label: 'Reminder emails',detail: 'Get notifications you may have missed.'},
            {label: 'Product emails',detail: 'Get tips about Instagram\'s tools.'},
            {label: 'News emails',detail: 'Learn about new Instagram features.'},
        ]
    })
}
</script>