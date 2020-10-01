<template>
  <div>
    <h5>Fill in information to attend avent!</h5>
    <section class="form-container">
      <input class="formName" type="text" placeholder="Name" />
      <input class="email" type="email" placeholder="E-mail" />
      <button type="submit" class="submit">Attend Event</button>
    </section>
  </div>
</template>

<script>
export default {};
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
  margin: 20px 0px 20px 0px;
}

.submit {
  background-color: #65b2b7;
  color: white;
  border: none;
  padding: 10px 20px 10px 20px;
}
</style>