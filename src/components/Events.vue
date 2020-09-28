<template>
  <div class="eventsContainer">
    <div>
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

<style></style>
