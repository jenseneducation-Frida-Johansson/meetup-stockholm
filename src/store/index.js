import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listOfEvents: [
      {
        id: 1,
        date: "FRI, OCT 2",
        time: 19,
        name: "Frontend-developer meet",
      },
      {
        id: 2,
        date: "MON, OCT 5",
        time: 18,
        name: "Mamma grupp",
      },
      {
        id: 3,
        date: "THU, OCT 8",
        time: 17,
        name: "Studentträff Stockholm",
      },
      {
        id: 4,
        date: "FRI, OCT 9",
        time: 19,
        name: "Planteringsskolan",
      },
    ],
  },
  getters: {
    listOfEvents(state) {
      return state.listOfEvents;
    },
  },
});
