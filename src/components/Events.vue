<template>
  <div class="eventsContainer">
    <div>
      <EventId
        v-for="event in listOfEvents"
        :key="event.id"
        :date="event.date"
        :time="event.time"
        :name="event.name"
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

<style></style>
