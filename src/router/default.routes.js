import Home from "../views/Home.vue";
import EventPage from "../views/EventPage.vue";
import AttendEvent from "../views/AttendEvent.vue";

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
    path: "/attendEvent/:id",
    name: "AttendEvent",
    component: AttendEvent,
  },
];

export default routes;
