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
            <h1>今回のコミットを戻して、登録済みクレジットカードを消して、定期商品購入すれば、CardSeqがNULLです。</h1>
            </br>
            <my-video :sources="video.sources" :options="video.options"></my-video>
            <h1>登録済みのクレジットカードがないアカンウト、は定期購入の時、/shoppingに初めてクレジットカード登録したら、CardSeqがNULLです。</h1>
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
                    volume: 0,
                }
            },
            video1: {
                sources: [{
                    src: '/images/video1.mp4',
                    type: 'video/mp4'
                }],
                options: {
                    autoplay: false,
                    volume: 0,
                }
            }
        }
    },
    components: {
        myVideo
    }
}
</script>