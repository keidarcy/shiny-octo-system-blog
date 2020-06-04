---
title: video
date: 2020-06-04
sidebar: false
navbar: false
publish: true
isShowComments: false
permalink: /weleda
keys:
 - 'a235a1171546bd013e9a0eb59da46162'
---

# video

<template>
    <div id="app">
        <div class="container">
            <my-video :sources="video.sources" :options="video.options"></my-video>
            <my-video :sources="video1.sources" :options="video1.options"></my-video>
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
                    src: '/images/video.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: true,
                    volume: 0.1,
                }
            },
            video1: {
                sources: [{
                    src: '/images/video1.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: false,
                    volume: 0.1,
                }
            }
        }
    },
    components: {
        myVideo
    }
}
</script>