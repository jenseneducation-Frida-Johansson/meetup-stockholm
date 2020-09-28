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

<style scoped>
</style>