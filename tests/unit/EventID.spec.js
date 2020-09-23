import { shallowMount } from "@vue/test-utils";
import EventId from "@/components/EventId.vue";

it("should show the right date for the event in the events component", () => {
  const wrapper = shallowMount(EventId, {
    propsData: {
      date: "FRI",
    },
  });
  let actual = wrapper.find(".date").text();
  expect(actual).toBe("FRI");
});

it("should show the right time for the event in the events component", () => {
  const wrapper = shallowMount(EventId, {
    propsData: {
      time: 19,
    },
  });
  let actual = wrapper.find(".time").text();
  expect(actual).toBe("19");
});

it("should show the right event-name in the events component", () => {
  const wrapper = shallowMount(EventId, {
    propsData: {
      eventName: "Frontend-developer meet",
    },
  });
  let actual = wrapper.find(".eventName").text();
  expect(actual).toBe("Frontend-developer meet");
});
