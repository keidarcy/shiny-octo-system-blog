---
title: video
date: 2020-06-04
sidebar: false
navbar: false
publish: true
isShowComments: false
permalink: /weleda
keys:
 - '3f91d3df38df68fffc43c9eefa3c64c7'
---

# video

<template>
    <div id="app">
        <div class="container">
            <h4>今回のコミットを戻して、登録済みクレジットカードを消して、定期商品購入すれば、CardSeqがNULLです。</h4>
            <my-video :sources="video.sources" :options="video.options"></my-video>
            </br>
            </br>
            </br>
            </br>
            </br>
            </br>
            <h4>登録済みのクレジットカードがないアカンウト、は定期購入の時、/shoppingに初めてクレジットカード登録したら、CardSeqがNULLです。</h4>
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