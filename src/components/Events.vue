<template>
  <div class="events">
    <div class="event-text">Upcoming events:</div>
    <div class="eventsContainer">
      <EventId
        @click.native="$router.push('/eventPage/' + event.id)"
        v-for="event in listOfEvents"
        :key="event.id"
        :class="'event-' + event.id"
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

<style>
.eventsContainer {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 15px;
  margin: 10px;
}

.EventId:hover {
  background-color: grey;
}
.event-text {
  color: white;
  font-size: 18px;
  text-shadow: 1px 1px 3px grey;
}
</style>
