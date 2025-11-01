<template>
    <div id="ftr">
        <p>{{ temp }} </p>
        <p></p>
        <p>{{ msgForKids }}</p>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return { temp: 'Hey from footer - temp data key' }
    },
    props: {
        msgForKids: { type: String, default: '' }
    }

}
</script>

<style scoped>
p {
    color: red;
}
</style>
