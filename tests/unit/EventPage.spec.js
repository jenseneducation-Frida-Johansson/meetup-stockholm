const { shallowMount, createLocalVue } = require("@vue/test-utils");
import AttendForm from "@/components/AttendForm.vue";
import EventPage from "@/views/EventPage.vue";
import store from "@/store/index.js";

it("should show the AttendForm-component in EventPage-view", () => {
  const localVue = createLocalVue();
  const $route = {
    params: { id: 1 },
  };
  const wrapper = shallowMount(EventPage, {
    localVue,
    mocks: {
      $route,
    },
    store,
  });
  const actual = wrapper.findComponent(AttendForm).exists();
  expect(actual).toBe(true);
});
