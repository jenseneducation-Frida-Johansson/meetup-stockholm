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
  background-image: url("~@/assets/people-2567915_1920.jpg");
  background-repeat: no-repeat;
  background-size: 800px;
  background-position: center top;
  padding-bottom: 50px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  font-size: 30px;
  color: orange;
  text-decoration: none;
}
</style>
