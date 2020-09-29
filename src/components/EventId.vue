<template>
  <div class="eventId-container">
    <div class="date">{{ date }}</div>
    <div class="time">{{ time }}</div>
    <div class="name">{{ name }}</div>
    <div class="info">{{ info }}</div>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    time: String,
    name: String,
    info: String,
  },
};
</script>

<style>
.eventId-container {
  width: 110px;
  height: 110px;
  background-color: #fff;
  padding: 20px;
  border-radius: 50%;
  margin-left: 5px;
  color: grey;
}

.date,
.time {
  color: orange;
}
</style>
