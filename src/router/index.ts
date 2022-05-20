import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Resume from "@/views/resume/Resume.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "resume",
    component: Resume,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
