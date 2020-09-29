const {
  shallowMount,
  RouterLinkStub,
  createLocalVue,
} = require("@vue/test-utils");
import VueRouter from "vue-router";
import routes from "@/router/default.routes.js";
import Events from "@/components/Events.vue";
import EventId from "@/components/EventId.vue";
import EventPage from "@/views/EventPage.vue";
import Home from "@/views/Home.vue";
import store from "../../src/store";

it("should show all the events in the event component", () => {
  const listOfEvents = [
    {
      id: 1,
      date: "FRI, OCT 2",
      time: "19",
      name: "Frontend-developer meet",
      info:
        "Come and meet other Frontend-developers and get som inspiration from your fellow 'co-workers' or students. ",
    },
    {
      id: 2,
      date: "MON, OCT 5",
      time: "18",
      name: "Mamma grupp",
      info:
        "Kom och träffa andra mammor i vår mamma-grupp. Vi tipsar om bra mat för dig och ditt barn, gör meditationsövningar tillsammans och fikar m.m. Välkomna!",
    },
    {
      id: 3,
      date: "THU, OCT 8",
      time: "17",
      name: "Studentträff Stockholm",
      info:
        "Nu är det äntligen dags för den årliga studentträffen i Stockholm! Ni kommer få lära känna andra studenter som är peppade på att en ny termin startat. Vi kommer ha inspirerande föreläsningar, mingel och roliga lekar. Ni får även med er en goodiebag när eventet är slut.",
    },
    {
      id: 4,
      date: "FRI, OCT 9",
      time: "19",
      name: "Planteringsskolan",
      info:
        "Har du också fallit för planteringsfällan under covid-19? Då kan du komma till vårt event och få ännu mer inspiration och lära dig mer! Ni kommer även få med er lite fröer för att kunna fortsätta plantera under hösten hemma. ",
    },
  ];

  const wrapper = shallowMount(Events, {
    propsData: {
      listOfEvents: listOfEvents,
    },
  });

  let expected = listOfEvents.length;
  let actual = wrapper.find(".eventsContainer").findAllComponents(EventId)
    .length;
  expect(actual).toBe(expected);
});
