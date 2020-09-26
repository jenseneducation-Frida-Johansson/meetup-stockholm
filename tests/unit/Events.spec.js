const { shallowMount } = require("@vue/test-utils");
import Events from "@/components/Events.vue";
import EventId from "@/components/EventId.vue";

it("should show all the events in the event component", () => {
  const listOfEvents = [
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
