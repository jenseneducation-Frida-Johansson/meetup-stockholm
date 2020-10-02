<template>
  <div class="home">
    <div class="image" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="event-text">Upcoming events:</div>
      <Events :listOfEvents="listOfEvents" class="Events" />
    </div>
    <Nav />
  </div>
</template>

<script>
import backgroundUrl from "@/assets/people-2567915_1920.jpg";
import Nav from "@/components/Nav.vue";
import Events from "@/components/Events.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",

  components: {
    Events,
    Nav,
  },
  computed: {
    ...mapGetters(["listOfEvents"]),
  },
  data() {
    return {
      backgroundUrl,
    };
  },
};
</script>

<style>
.image {
  background-repeat: no-repeat;
  background-size: 200%;
  background-position: center top;
}
.event-text {
  color: white;
  font-size: 20px;
  text-shadow: 1px 1px 3px grey;
}
.Events {
  margin-top: 110px;
  padding-bottom: 100%;
}
/* .Events {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  padding-bottom: 100%;
} */
@media screen and (min-width: 400px) {
  .image {
    background-size: 150%;
  }
}
@media screen and (min-width: 800px) {
  .image {
    background-size: 100%;
  }
}
</style>
