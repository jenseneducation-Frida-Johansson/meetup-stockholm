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
