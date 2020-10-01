<template>
  <div class="home">
    <Events :listOfEvents="listOfEvents" />
    <Nav />
  </div>
</template>

<script>
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
};
</script>

<style >
.home {
  background-image: url("~@/assets/people-2567915_1920.jpg");
  background-repeat: no-repeat;
  background-size: 800px;
  background-position: center top;
  padding-bottom: 50px;
}
</style>