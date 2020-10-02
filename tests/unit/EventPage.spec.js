const { shallowMount, createLocalVue } = require("@vue/test-utils");
import AttendForm from "@/components/AttendForm.vue";
import EventPage from "@/views/EventPage.vue";
import ReviewArea from "@/components/ReviewArea.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("EventPage", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      myAttendedEvents: () => [{ id: 1 }],
      listOfEvents: () => [{ id: 1 }],
      event: () => () => ({ id: 1 }),
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it("should show text area when attended", () => {
    const $route = {
      params: { id: 1 },
    };
    const wrapper = shallowMount(EventPage, {
      localVue,
      store,
      mocks: {
        $route,
      },
    });
    const actual = wrapper.findComponent(ReviewArea).exists();
    expect(actual).toBe(true);

    expect(wrapper.findComponent(AttendForm).exists()).toBe(false);
  });

  it("should not show text area when not attended", () => {
    const $route = {
      params: { id: 1 },
    };
    getters = {
      myAttendedEvents: () => [],
      listOfEvents: () => [{ id: 1 }],
      event: () => () => ({ id: 1 }),
    };

    store = new Vuex.Store({
      getters,
    });

    const wrapper = shallowMount(EventPage, {
      localVue,
      store,
      mocks: {
        $route,
      },
    });
    const actual = wrapper.findComponent(ReviewArea).exists();
    expect(actual).toBe(false);

    expect(wrapper.findComponent(AttendForm).exists()).toBe(true);
  });
});
