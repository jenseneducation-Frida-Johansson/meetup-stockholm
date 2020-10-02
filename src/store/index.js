import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listOfEvents: [
      {
        id: 1,
        date: "FRI, OCT 2",
        time: "19:00",
        name: "Frontend-developer meet",
        info:
          "Come and meet other Frontend-developers and get som inspiration from your fellow 'co-workers'. ",
        image: require("@/assets/startup-593341_1920.jpg"),
      },
      {
        id: 2,
        date: "MON, OCT 5",
        time: "18:15",
        name: "Mamma grupp",
        info:
          "Kom och träffa andra mammor i vår mamma-grupp. Vi tipsar om bra mat för dig och ditt barn, gör meditationsövningar tillsammans och fikar m.m. Välkomna!",
        image: "@/assets/girl-2480361_1920.jpg",
      },
      {
        id: 3,
        date: "THU, OCT 8",
        time: "17:00",
        name: "Studentträff Stockholm",
        info:
          "Nu är det äntligen dags för den årliga studentträffen i Stockholm! Ni kommer få lära känna andra studenter som är peppade på att en ny termin startat. Vi kommer ha inspirerande föreläsningar, mingel och roliga lekar. Ni får även med er en goodiebag när eventet är slut.",
        image: "@/assets/startup-593341_1920.jpg",
      },
      {
        id: 4,
        date: "FRI, OCT 9",
        time: "18:30",
        name: "Planteringsskolan",
        info:
          "Har du också fallit för planteringsfällan under covid-19? Då kan du komma till vårt event och få ännu mer inspiration och lära dig mer! Ni kommer även få med er lite fröer för att kunna fortsätta plantera under hösten hemma. ",
        image: "@/assets/startup-593341_1920.jpg",
      },
    ],
    myAttendedEvents: [],
    addEvent: [],
  },
  getters: {
    listOfEvents(state) {
      return state.listOfEvents;
    },
    event: (state) => (id) => {
      return state.listOfEvents.find((event) => event.id == id);
    },
    myAttendedEvents(state) {
      return state.myAttendedEvents;
    },
  },
  mutations: {
    addEvent(state, data) {
      state.myAttendedEvents.push(data);
      localStorage.setItem(
        "myAttandedEvents",
        JSON.stringify(state.myAttendedEvents)
      );
    },
    initialiseStore(state) {
      if (localStorage.getItem("myAttandedEvents")) {
        state.myAttendedEvents = JSON.parse(
          localStorage.getItem("myAttandedEvents")
        );
      }
    },
  },
  actions: {
    addEvent({ commit }, data) {
      commit("addEvent", data);
    },
  },
});
