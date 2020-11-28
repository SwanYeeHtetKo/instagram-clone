<template>
    <div>
        <p class="text-h5">Likes</p>
        <v-radio-group v-model="likesGroup">
            <v-radio
                v-for="n in likes"
                :key="n.value"
                :label="n.label"
                :value="n.value"
            ></v-radio>
        </v-radio-group>
        <span>johnappleseed liked your photo.</span>
        <v-divider class="mt-3"></v-divider>

        <p class="text-h5">Comments</p>
        <v-radio-group v-model="commentsGroup">
            <v-radio
                v-for="n in comments"
                :key="n.value"
                :label="n.label"
                :value="n.value"
            ></v-radio>
        </v-radio-group>
        <span>johnappleseed commented: "Nice shot!"</span>
        <v-divider class="mt-3"></v-divider>

        <p class="text-h5">Comment Likes</p>
        <v-radio-group v-model="commentsLikesGroup">
            <v-radio
                v-for="n in commentsLikes"
                :key="n.value"
                :label="n.label"
                :value="n.value"
            ></v-radio>
        </v-radio-group>
        <span>johnappleseed liked your comment: "Nice shot!"</span>
        <v-divider class="mt-3"></v-divider>

        <p class="text-h5">Likes and Comments on Photos of You</p>
        <v-radio-group v-model="commentsLikesPhotoGroup">
            <v-radio
                v-for="n in commentsLikesPhoto"
                :key="n.value"
                :label="n.label"
                :value="n.value"
            ></v-radio>
        </v-radio-group>
        <span>johnappleseed commented on a post you're tagged in.</span>
        <v-divider class="mt-3"></v-divider>

        <p class="text-h5">Accepted Follow Requests</p>
        <v-radio-group v-model="acceptFollowGroup">
            <v-radio
                v-for="n in acceptFollow"
                :key="n.value"
                :label="n.label"
                :value="n.value"
            ></v-radio>
        </v-radio-group>
        <span>John Appleseed (johnappleseed) accepted your follow request.</span>
        <v-divider class="mt-3"></v-divider>

        <p class="text-h5">Instagram Direct Requests</p>
        <v-radio-group v-model="instagramDirectRequestsGroup">
            <v-radio
                v-for="n in instagramDirectRequests"
                :key="n.value"
                :label="n.label"
                :value="n.value"
            ></v-radio>
        </v-radio-group>
        <span>johnappleseed wants to send you a message.</span>
        <v-divider class="mt-3"></v-divider>

        <p class="text-h5">Instagram Direct</p>
        <v-radio-group v-model="instagramDirectGroup">
            <v-radio
                v-for="n in instagramDirect"
                :key="n.value"
                :label="n.label"
                :value="n.value"
            ></v-radio>
        </v-radio-group>
        <span>johnappleseed sent you a message.</span>
        <v-divider class="mt-3"></v-divider>

        <p class="text-h5">Reminders</p>
        <v-radio-group v-model="RemindersGroup">
            <v-radio
                v-for="n in Reminders"
                :key="n.value"
                :label="n.label"
                :value="n.value"
            ></v-radio>
        </v-radio-group>
        <span>You have unseen notifications, and other similar notifications.</span>
        <v-divider class="mt-3"></v-divider>

        <p class="text-h5">First Posts and Stories</p>
        <v-radio-group v-model="firstPostAndStoriesGroup">
            <v-radio
                v-for="n in firstPostAndStories"
                :key="n.value"
                :label="n.label"
                :value="n.value"
            ></v-radio>
        </v-radio-group>
        <span>See johnappleseed's first story on Instagram, and other similar notifications.</span>
        <v-divider class="mt-3"></v-divider>

        <p class="text-h5">IGTV View Counts</p>
        <v-radio-group v-model="IGTVViewCountsGroup">
            <v-radio
                v-for="n in IGTVViewCounts"
                :key="n.value"
                :label="n.label"
                :value="n.value"
            ></v-radio>
        </v-radio-group>
        <span>Your IGTV video has more than 100K views: "My New Video!".</span>
        <v-divider class="mt-3"></v-divider>

        <p class="text-h5">Support Requests</p>
        <v-radio-group v-model="supportRequestsGroup">
            <v-radio
                v-for="n in supportRequests"
                :key="n.value"
                :label="n.label"
                :value="n.value"
            ></v-radio>
        </v-radio-group>
        <span>Your support request from July 10 was just updated.</span>
        <v-divider class="mt-3"></v-divider>

        <p class="text-h5">Live Videos</p>
        <v-radio-group v-model="liveVideosGroup">
            <v-radio
                v-for="n in liveVideos"
                :key="n.value"
                :label="n.label"
                :value="n.value"
            ></v-radio>
        </v-radio-group>
        <span>johnappleseed started a live video. Watch it before it ends!</span>

    </div>
</template>

<script>
  export default {
    data () {
      return {
        likesGroup: 1,
        likes: [
            {label:'Off', value: 1},
            {label:'From People I Follow',value: 2},
            {label:'From Everyone',value: 3}
        ],
        commentsGroup: 1,
        comments: [
            {label:'Off', value: 1},
            {label:'From People I Follow',value: 2},
            {label:'From Everyone',value: 3}
        ],
        commentsLikesGroup: 1,
        commentsLikes: [
            {label:'Off', value: 1},
            {label:'From People I Follow',value: 2},
        ],
        commentsLikesPhotoGroup:1,
        commentsLikesPhoto:[
            {label:'Off', value: 1},
            {label:'From People I Follow',value: 2},
            {label:'From Everyone',value: 3}
        ],
        acceptFollowGroup:1,
        acceptFollow:[
            {label:'Off', value: 1},
            {label:'From Everyone',value: 3}
        ],
        instagramDirectRequestsGroup:1,
        instagramDirectRequests:[
            {label:'Off', value: 1},
            {label:'From Everyone',value: 3}
        ],
        instagramDirectGroup:1,
        instagramDirect:[
            {label:'Off', value: 1},
            {label:'From Everyone',value: 3}
        ],
        RemindersGroup:1,
        Reminders:[
            {label:'Off', value: 1},
            {label:'From Everyone',value: 3}
        ],
        firstPostAndStoriesGroup:1,
        firstPostAndStories:[
            {label:'Off', value: 1},
            {label:'From People I Follow',value: 2},
            {label:'From Everyone',value: 3}
        ],
        IGTVViewCountsGroup:1,
        IGTVViewCounts:[
            {label:'Off', value: 1},
            {label:'From Everyone',value: 3}
        ],
        supportRequestsGroup:1,
        supportRequests:[
            {label:'Off', value: 1},
            {label:'On',value: 3}
        ],
        liveVideosGroup:1,
        liveVideos:[
            {label:'Off', value: 1},
            {label:'On',value: 3}
        ],
      }
    },
  }
</script>