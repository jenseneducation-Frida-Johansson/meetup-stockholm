<template>
  <div class="eventId-container">
    <div class="date">{{ date }}</div>
    <div class="time">{{ time }}</div>
    <div class="name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    time: Number,
    name: String,
  },
};
</script>

<style>
.eventId-container {
  background-color: green;
  width: 20px;
}
</style>
