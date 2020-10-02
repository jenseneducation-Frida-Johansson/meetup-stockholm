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
  margin-top: -70px;
  padding-top: 100px;
}
.event-text {
  color: white;
  font-size: 18px;
  text-shadow: 1px 1px 3px grey;
  margin-top: 10px;
}
.Events {
  margin-top: 20px;
  padding-bottom: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

@media screen and (max-width: 350px) {
  .image {
    background-size: 250%;
  }
}

@media screen and (min-width: 600px) {
  .image {
    background-size: 200%;
  }
  .Events {
    margin-top: 40px;
    padding-bottom: 70%;
  }
  .event-text {
    margin-top: 40px;
    font-size: 25px;
  }
}
@media screen and (min-width: 800px) {
  .image {
    background-size: 150%;
  }
  .Events {
    margin-top: 60px;
    padding-bottom: 50%;
  }
  .event-text {
    margin-top: 60px;
    font-size: 25px;
  }
}
</style>
