<template>
  <div>
    <h2 class="event">My events:</h2>

    <div
      class="myEvents-container"
      v-for="event in myAttendedEvents"
      :key="event.id"
    >
      <EventId
        @click.native="$router.push('/eventPage/' + event.id)"
        :class="'event-' + event.id"
        :date="event.date"
        :time="event.time"
        :name="event.name"
        class="EventId"
      />
      <p>Click on an event to add a review!</p>
    </div>
  </div>
</template>

<script>
import EventId from "@/components/EventId.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    EventId,
  },
  computed: {
    ...mapGetters(["myAttendedEvents"]),
  },
};
</script>

<style>
.myEvents-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

@media screen and (min-width: 700px) {
}

@media screen and (min-width: 1050px) {
}
</style>
