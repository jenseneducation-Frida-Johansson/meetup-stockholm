<template>
  <div class="reviewArea-container">
    <h5>Skriv gärna en recension i rutan nedanför:</h5>
    <textarea
      id="textarea"
      cols="30"
      rows="5"
      placeholder="Write your review here..."
    ></textarea>
    <input
      @click="addReviewClick()"
      type="submit"
      value="Add Review"
      class="reviewButton"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    addReviewClick() {
      this.addReview(this.event);
      this.$router.push("/");
    },
    ...mapActions(["addReview"]),
  },
};
</script>

<style>
.reviewArea-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#textarea {
  margin: 0px 0px 15px 0px;
}
.reviewButton {
  background-color: #65b2b7;
  color: white;
  border: none;
  padding: 10px 20px 10px 20px;
  margin-bottom: 50%;
}
</style>
