<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Stockholm meetup</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  font-size: 30px;
  color: orange;
  text-decoration: none;
  text-shadow: 2px 2px 5px grey;
}
</style>
