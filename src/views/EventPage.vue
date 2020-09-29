<template>
  <div class="EventPage-container">
    <h2 class="date time">{{ event.date }}, {{ event.time }}</h2>
    <h3 class="infoHead">Details about Event</h3>
    <p class="info">{{ event.info }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      event: [],
    };
  },

  created() {
    this.event = this.$store.getters.event(this.$route.params.id);
  },
};
</script>

<style >
</style>
