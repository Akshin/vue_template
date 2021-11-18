// import { auth } from "@/services/auth";
import store from "@/store";

let isFirstRequest = true;

export const fetchInit = async () => {
  if (!isFirstRequest) return;

  // if (to.matched.some((record) => record.meta.requiresAuth)) {
  // if (auth.loggedIn()) {
  await store.dispatch("core$common/init");
  return (isFirstRequest = false);
  // }
  // }
};
