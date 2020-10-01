<template>
  <div class="nav-container">
    <router-link to="/myEvents/:id">My Events</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav-container {
  background-color: orange;
  height: 60px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-decoration: none;
}

.nav-container a {
  text-decoration: none;
  color: white;
  font-size: 18px;
}
</style>