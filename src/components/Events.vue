<template>
  <div class="events">
    <div class="eventsContainer">
      <EventId
        class="EventId"
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
