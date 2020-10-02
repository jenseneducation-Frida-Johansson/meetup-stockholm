<template>
  <div class="events">
    <div class="eventsContainer">
      <EventId
        @click.native="$router.push('/eventPage/' + event.id)"
        v-for="event in listOfEvents"
        :key="event.id"
        :class="'event-' + event.id"
        :date="event.date"
        :time="event.time"
        :name="event.name"
        class="EventId"
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
@media screen and (min-width: 700px) {
  .eventsContainer {
    grid-template-columns: auto auto auto;
  }
  .EventId {
    margin: 20px;
    padding: 20px;
  }
}

@media screen and (min-width: 1050px) {
  .EventId:hover {
    background-color: rgb(161, 161, 161);
    color: white;
  }
  .eventsContainer {
    grid-template-columns: auto auto auto auto;
  }
  .EventId {
    margin: 30px;
    padding: 30px;
  }
}
</style>
