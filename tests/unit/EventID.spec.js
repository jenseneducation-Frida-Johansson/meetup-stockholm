import { shallowMount } from "@vue/test-utils";
import EventId from "@/components/EventId.vue";

it("should render the right date for the event in the EventID component", () => {
  const wrapper = shallowMount(EventId, {
    propsData: {
      date: "FRI, OCT 2",
    },
  });
  let actual = wrapper.find(".date").text();
  expect(actual).toBe("FRI, OCT 2");
});

it("should render the right time for the event in the EventID  component", () => {
  const wrapper = shallowMount(EventId, {
    propsData: {
      time: "19",
    },
  });
  let actual = wrapper.find(".time").text();
  expect(actual).toBe("19");
});

it("should show render the right event-name in the EventID component", () => {
  const wrapper = shallowMount(EventId, {
    propsData: {
      name: "Frontend-developer meet",
    },
  });
  let actual = wrapper.find(".name").text();
  expect(actual).toBe("Frontend-developer meet");
});

it("should render the right information about event in in the EventId component", () => {
  const wrapper = shallowMount(EventId, {
    propsData: {
      info: "blablabla",
    },
  });
  let actual = wrapper.find(".info").text();
  expect(actual).toBe("blablabla");
});

it("should render the image url for event in the EventId component", () => {
  const wrapper = shallowMount(EventId, {
    propsData: {
      image: "../assets/startup-593341_1920.jpg",
    },
  });
  let actual = wrapper.find(".image").attributes("src");
  expect(actual).toBe("../assets/startup-593341_1920.jpg");
});
