const { shallowMount, createLocalVue } = require("@vue/test-utils");
import AttendForm from "@/components/AttendForm.vue";
import Vuex from "vuex";

const localVue = createLocalVue();

localVue.use(Vuex);

// it("shows a message when you attend event", async () => {
//   const wrapper = shallowMount(AttendForm);

//   await wrapper.find("[data-username]").setValue("Frida");
//   await wrapper.find("form").trigger("submit.prevent");

//   expect(wrapper.find(".message").text()).toBe(
//     "Du är nu anmäld till eventet Frida!"
//   );
// });
describe("AttendForm", () => {
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

  it("should call attendButtonClicked ", async () => {
    const $route = {
      params: { id: 1 },
    };
    const clicked = jest.fn();
    const wrapper = shallowMount(AttendForm, {
      localVue,
      store,
      mocks: {
        $route,
      },
    });
    await wrapper.setData({
      username: "test",
      email: "test",
    });
    wrapper.vm.attendButtonClicked = clicked;
    wrapper.find(".attendButton").trigger("click");
    await wrapper.vm.$nextTick();
    expect(clicked).toHaveBeenCalledTimes(1);
  });
});
