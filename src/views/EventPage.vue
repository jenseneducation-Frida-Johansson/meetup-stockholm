<template>
  <div class="EventPage-container">
    <div class="imageContainer">
      <img class="imageEvent" :src="event.image" alt="" />
    </div>
    <div class="eventInformation">
      <h2 class="date time">{{ event.date }}, {{ event.time }}</h2>
      <h3>{{ event.name }}</h3>

      <h4 class="infoHead">Details about Event</h4>
      <p class="info">{{ event.info }}</p>
      <ReviewArea v-if="this.isAttended" />
      <AttendForm :event="event" v-else />
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import AttendForm from "@/components/AttendForm.vue";
import ReviewArea from "@/components/ReviewArea.vue";
export default {
  created() {
    this.event = this.$store.getters.event(this.$route.params.id);
  },
  components: {
    AttendForm,
    Nav,
    ReviewArea,
  },
  computed: {
    isAttended: function () {
      return this.$store.getters.myAttendedEvents.find(
        (event) => event.id == this.$route.params.id
      );
    },
  },
};
</script>

<style>
.imageEvent {
  width: 100%;
}
.info {
  margin: 40px;
}

@media screen and (min-width: 700px) {
  .imageEvent {
    width: 70%;
  }
  .EventPage-container {
    display: flex;
    flex-direction: row;
  }
  .eventInformation {
    width: 50%;
    margin: 100px 100px 100px 0px;
  }
  .imageContainer {
    margin: 100px 100px 100px 0px;
  }
  .info {
    margin: 0px;
  }
}

@media screen and (min-width: 1050px) {
  .EventPage-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .eventInformation {
    width: 50%;
  }
  .imageContainer {
    margin-top: -150px;
  }
}
</style>
