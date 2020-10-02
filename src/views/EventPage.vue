<template>
  <div class="EventPage-container">
    <img class="image" :src="event.image" alt="" />
    <h2 class="date time">{{ event.date }}, {{ event.time }}</h2>
    <h3>{{ event.name }}</h3>

    <h4 class="infoHead">Details about Event</h4>
    <p class="info">{{ event.info }}</p>
    <ReviewArea v-if="this.isAttended" />
    <AttendForm :event="event" v-else />
    <Nav />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import AttendForm from "@/components/AttendForm.vue";
import ReviewArea from "@/components/ReviewArea.vue";
export default {
  created() {
    this.event = this.$store.getters.event(this.$route.params.id);
  },
  components: {
    AttendForm,
    Nav,
    ReviewArea,
  },
  computed: {
    isAttended: function () {
      return this.$store.getters.myAttendedEvents.find(
        (event) => event.id == this.$route.params.id
      );
    },
  },
};
</script>

<style>
.image {
  width: 100%;
}
</style>
