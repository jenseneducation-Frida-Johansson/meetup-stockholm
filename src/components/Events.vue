<template>
  <div class="events">
    <h3 class="event-text">Upcoming events:</h3>
    <div class="eventsContainer">
      <EventId
        class="EventId"
        @click.native="$router.push('/eventPage' + event.id)"
        v-for="event in listOfEvents"
        :key="event.id"
        :date="event.date"
        :time="event.time"
        :name="event.name"
        :info="event.info"
      />
    </div>
  </div>
</template>

<script>
import EventId from "./EventId.vue";
export default {
  components: {
    EventId,
  },
  props: {
    listOfEvents: Array,
  },
};
</script>

<style>
.eventsContainer {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  margin: 10px;
}

.event-text {
  color: white;
}
</style>
