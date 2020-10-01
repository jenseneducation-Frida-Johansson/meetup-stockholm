import Home from "../views/Home.vue";
import EventPage from "../views/EventPage.vue";

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
];

export default routes;
