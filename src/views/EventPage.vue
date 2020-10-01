<template>
  <div class="EventPage-container">
    <img class="image" :src="event.image" alt="" />
    <h2 class="date time">{{ event.date }}, {{ event.time }}</h2>
    <h3>{{ event.name }}</h3>

    <h4 class="infoHead">Details about Event</h4>
    <p class="info">{{ event.info }}</p>
    <AttendForm />

    <Nav />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

import AttendForm from "@/components/AttendForm.vue";
export default {
  created() {
    this.event = this.$store.getters.event(this.$route.params.id);
  },
  components: {
    AttendForm,
    Nav,
  },
};
</script>

<style >
.image {
  width: 100%;
}
</style>
