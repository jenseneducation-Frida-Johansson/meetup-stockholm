<template>
  <div>
    <AttendForm />
    <AttendButton class="submit" />
  </div>
</template>

<script>
import AttendForm from "@/components/AttendForm.vue";
import AttendButton from "@/components/AttendButton.vue";
export default {
  components: {
    AttendForm,
    AttendButton,
  },
};
</script>

<style>
.submit {
  width: 130px;
  height: 35px;
  font-size: 14px;
}
</style>