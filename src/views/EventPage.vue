<template>
  <div class="EventPage-container">
    <img class="image" :src="event.image" alt="" />
    <h2 class="date time">{{ event.date }}, {{ event.time }}</h2>
    <h3>{{ event.name }}</h3>
    <h4 class="infoHead">Details about Event</h4>
    <p class="info">{{ event.info }}</p>
  </div>
</template>

<script>
export default {
  created() {
    this.event = this.$store.getters.event(this.$route.params.id);
  },
};
</script>

<style >
.image {
  width: 100%;
}
</style>
