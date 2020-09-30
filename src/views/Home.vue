<template>
  <div class="home">
    <Events :listOfEvents="listOfEvents" />
  </div>
</template>

<script>
import Events from "@/components/Events.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Events,
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