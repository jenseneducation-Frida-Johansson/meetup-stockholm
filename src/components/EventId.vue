<template>
  <div class="eventId-container">
    <img class="image" :src="image" alt="" />
    <div class="date">{{ date }}</div>
    <div class="time">{{ time }}</div>
    <div class="name">{{ name }}</div>
    <div class="info">{{ info }}</div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    date: String,
    time: String,
    name: String,
    info: String,
  },
};
</script>

<style>
.eventId-container {
  width: 100px;
  height: 100px;
  background-color: #fff;
  padding: 20px;
  border-radius: 50%;
  color: grey;
  font-size: 14px;
}

/* .date{
  margin-bottom: 15px;
} */
.date,
.time {
  color: orange;
  margin-top: -5px;
}
@media screen and (min-width: 600px) {
  .eventId-container {
    width: 130px;
    height: 130px;
  }
}
@media screen and (min-width: 800px) {
  .eventId-container {
    width: 150px;
    height: 150px;
  }
}
</style>
