<template>
  <div class="nav-container">
    <router-link to="/myEvents">My Events</router-link>
  </div>
</template>

<script scoped>
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
  text-shadow: 0.7px 0.7px 4px rgb(204, 204, 204);
}
@media screen and (min-width: 700px) {
  .nav-container {
    height: 60px;
    width: 100px;
    text-decoration: none;
    top: 0;
    margin-left: 80%;
    margin-top: 20px;
    border-radius: 50px;
    padding-top: 20px;
  }
}

@media screen and (min-width: 1050px) {
  .nav-container {
    height: 60px;
    width: 100px;
    text-decoration: none;
    top: 0;
    margin-left: 90%;
    margin-top: 20px;

    border-radius: 50px;
  }
}
</style>
