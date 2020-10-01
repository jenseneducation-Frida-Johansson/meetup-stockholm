import { shallowMount } from "@vue/test-utils";
import AttendForm from "@/components/AttendForm.vue";

describe("FormSubmitter", () => {
  it("shows a message when you attend event", async () => {
    const wrapper = shallowMount(AttendForm);

    await wrapper.find("[data-username]").setValue("Frida");
    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.find(".message").text()).toBe(
      "Du är nu anmäld till Eventet Frida!"
    );
  });
});
