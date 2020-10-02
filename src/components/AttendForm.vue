<template>
  <div>
    <form class="form-container" @submit.prevent="handleSubmit">
      <input
        v-model="username"
        placeholder="Name"
        data-username
        maxlength="35"
      />
      <input
        v-model="email"
        placeholder="E-mail"
        class="email"
        maxlength="35"
      />
      <input
        @click="attendButtonClicked()"
        type="submit"
        value="Attend Event"
        class="attendButton"
      />
    </form>

    <div class="message" v-if="submitted">
      Du är nu anmäld till eventet {{ username }}!
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      email: "",
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
    },
    attendButtonClicked() {
      this.addEvent(this.event);
      this.$router.push("/myEvents");
    },
    ...mapActions(["addEvent"]),
  },
  created() {
    this.event = this.$store.getters.event(this.$route.params.id);
  },
};
</script>

<style>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
h5 {
  margin-top: 50px;
}

.email {
  margin: 26px 0px 20px 0px;
}

.attendButton {
  background-color: #65b2b7;
  color: white;
  border: none;
  padding: 10px 20px 10px 20px;
  margin-bottom: 100%;
}
</style>
