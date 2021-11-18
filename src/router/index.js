import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

import { fetchInit } from "./middleware/fetchInit";
import { getTitle } from "./middleware/getTitle";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  await fetchInit();
  getTitle(to);
  next();
});

export default router;
