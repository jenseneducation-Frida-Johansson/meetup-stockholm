<template>
  <div>
    <div
      class="myEvents-container"
      v-for="event in myAttendedEvents"
      :key="event.id"
    >
      <div class="event">My events:</div>
      <EventId
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
import EventId from "@/components/EventId.vue";
import { mapGetters } from "vuex";
export default {
  // data() {
  //   return {
  //     name: "",
  //     date: "",
  //     time: "",
  //   };
  // },
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
</style>
