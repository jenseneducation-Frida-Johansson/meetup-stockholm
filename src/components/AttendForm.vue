<template>
  <div>
    <form class="form-container" @submit.prevent="handleSubmit">
      <input v-model="username" placeholder="Name" data-username />
      <input v-model="email" placeholder="E-mail" class="email" />
      <input type="submit" value="Attend Event" class="submitButton" />
    </form>

    <div class="message" v-if="submitted">
      Du är nu anmäld till Eventet {{ username }}!
    </div>
  </div>
</template>

<script>
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

.submitButton {
  background-color: #65b2b7;
  color: white;
  border: none;
  padding: 10px 20px 10px 20px;
  margin-bottom: 20px;
}
</style>