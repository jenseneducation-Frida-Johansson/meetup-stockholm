<template>
  <div class="event">
    <div class="date">{{ date }}</div>
    <div class="time">{{ time }}</div>
    <div class="eventName">{{ eventName }}</div>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    time: Number,
    eventName: String,
  },
};
</script>

<style></style>
