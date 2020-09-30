<template>
  <div class="addEvent">
    <!-- <img class="image" :src="event.image" alt="" /> -->
    <h2 class="date time">{{ event.date }}, {{ event.time }}</h2>
    <h3>{{ event.name }}</h3>
    <div class="form">
      <input type="text" placeholder="Name " maxlength="30" />

      <input type="text" placeholder="E-mail" />

      <!-- <li>
          <input type="text" placeholder="Adress" v-model="adress" />
        </li> -->
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.event = this.$store.getters.event(this.$route.params.id);
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
}
</style>