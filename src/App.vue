<template>
  <div id="app">
    <main class="container mt-4">
      <h1>{{ msg }}</h1>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return { msg: 'Hello from App.vue - msg data property' }
  }
}
</script>

<style>
/* optional global styles for the component */
#app {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}
</style>