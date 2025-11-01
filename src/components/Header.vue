<template>
    <div id="hdr">
        <h3>{{ siteName }}</h3>
        <p>{{ tagline }}</p>
        <p>{{ temp }}</p>
        <p>This came from my setup: {{ newMsg }}</p>
    </div>
</template>

<script>

import { newMsg } from '../composables/useUserMessage'
export default {
    name: "Header",
    data() {
        return { temp: 'Hey from header - temp data key' }
    },
    props: {
        siteName: { type: String, default: '' },
        tagline: { type: String, default: '' }
    },
    setup() {
        return { newMsg }
    }
}
</script>

<style scoped>
p {
    color: green;
}
</style>