---
title: video
date: 2020-06-04
sidebar: false
navbar: false
publish: true
isShowComments: false
permalink: /video
keys:
 - '123456'
---

# video

<template>
    <div id="app">
        <div class="container">
            <my-video :sources="video.sources" :options="video.options"></my-video>
        </div>
    </div>
</template>

<script>
import myVideo from 'vue-video'
export default {
    data () {
        return {
            video: {
                sources: [{
                    src: 'images/video.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                    volume: 0.6,
                }
            }
        }
    },
    components: {
        myVideo
    }
}
</script>