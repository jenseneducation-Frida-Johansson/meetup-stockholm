import { shallowMount, createLocalVue } from "@vue/test-utils";
import EventPage from "@/views/EventPage";
import VueRouter from "vue-router";
import routes from "@/router/default.routes.js";
import AttendButton from "@/components/AttendButton.vue";

it("should show the AttendEvent-button in EventPage-view", () => {
  const localVue = createLocalVue();
  const router = new VueRouter({ routes });
  localVue.use(VueRouter);

  const $route = {
    path: "/eventPage/1",
  };
  const wrapper = shallowMount(EventPage, {
    localVue,
    router,
    mocks: {
      $store: {
        getters: {
          event() {
            return {
              id: 1,
              date: "FRI, OCT 2",
              time: "19",
              name: "Frontend-developer meet",
              info:
                "Come and meet other Frontend-developers and get som inspiration from your fellow 'co-workers' or students. ",
              image: "startup-593341_1920.jpg",
            };
          },
        },
      },
    },
  });

  let actual = wrapper.findComponent(AttendButton).exists();
  expect(actual).toBe(true);
});
