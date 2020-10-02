import { shallowMount } from "@vue/test-utils";
import AttendForm from "@/components/AttendForm.vue";

it("shows a message when you attend event", async () => {
  const wrapper = shallowMount(AttendForm);

  await wrapper.find("[data-username]").setValue("Frida");
  await wrapper.find("form").trigger("submit.prevent");

  expect(wrapper.find(".message").text()).toBe(
    "Du är nu anmäld till eventet Frida!"
  );
});

it("should call attendButtonClicked ", async () => {
  const clicked = jest.fn();
  const wrapper = shallowMount(AttendForm, {});
  // needed to show the button
  await wrapper.setData({
    username: "test",
    email: "test",
  });
  wrapper.vm.attendButtonClicked = clicked;
  wrapper.find(".attendButton").trigger("click");
  await wrapper.vm.$nextTick();
  expect(clicked).toHaveBeenCalledTimes(1);
});
