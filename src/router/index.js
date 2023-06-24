import { createWebHistory, createRouter } from "vue-router";

// common ui components by Flowbite
import Events from "../views/flowbite/Events.vue";
import Accordion from "../views/flowbite/Accordion.vue";
import Carousel from "../views/flowbite/Carousel.vue";
import Collapse from "../views/flowbite/Collapse.vue";
import Dial from "../views/flowbite/Dial.vue";
import Dismiss from "../views/flowbite/Dismiss.vue";
import Drawer from "../views/flowbite/Drawer.vue";
import Dropdown from "../views/flowbite/Dropdown.vue";
import Popover from "../views/flowbite/Popover.vue";
import Tabs from "../views/flowbite/Tabs.vue";
import Tooltip from "../views/flowbite/Tooltip.vue";
import Modal from "../views/flowbite/Modal.vue";

// layout components
import LandingLayout from "../views/layout/Landing.vue";

const routes = [
  {
    path: "/",
    name: "Public",
    component: LandingLayout,
        children:[

        ]
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/accordion",
    name: "Accordion",
    component: Accordion,
  },
  {
    path: "/carousel",
    name: "Carousel",
    component: Carousel,
  },
  {
    path: "/collapse",
    name: "Collapse",
    component: Collapse,
  },
  {
    path: "/dial",
    name: "Dial",
    component: Dial,
  },
  {
    path: "/dismiss",
    name: "Dismiss",
    component: Dismiss,
  },
  {
    path: "/drawer",
    name: "Drawer",
    component: Drawer,
  },
  {
    path: "/dropdown",
    name: "Dropdown",
    component: Dropdown,
  },
  {
    path: "/popover",
    name: "Popover",
    component: Popover,
  },
  {
    path: "/tabs",
    name: "Tabs",
    component: Tabs,
  },
  {
    path: "/tooltip",
    name: "Tooltip",
    component: Tooltip,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;