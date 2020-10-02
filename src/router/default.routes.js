import Home from "../views/Home.vue";
import EventPage from "../views/EventPage.vue";

import MyEvents from "../views/MyEvents.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/eventPage/:id",
    name: "EventPage",
    component: EventPage,
  },

  {
    path: "/myEvents",
    name: "MyEvents",
    component: MyEvents,
  },
];

export default routes;
