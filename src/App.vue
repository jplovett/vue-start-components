<template>
  <Header :siteName="siteName" :tagline="tagline" />
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <button @click="toggleBox">check console</button>
    </div>
    <div>
      <button @click="showData">check console for parent msg</button>
    </div>
  </div>
  <Footer :alt="msgForKids" :msg-for-kids="msgForKids" />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { newMsg } from './composables/useUserMessage'
newMsg.value = "this is your parent speaking! 🤬"

export default {
  name: 'App',
  data() {
    return {
      msg: 'Hey from Vue App options object - msg data key',
      msgForKids: "this is your parent!",
      siteName:"Vue Site Title",
      tagline:"Vue, the progressive framework👍"
    }
  },
  components: { Header, Footer },
  methods: {
    toggleBox() {
      console.info(this.msg)
    },
    showData() {
      console.info(this.msgForKids)
    }
  }
}
</script>

<style>
/* optional global styles for the component */
#app {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}
</style>