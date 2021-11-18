import home from "@/apps/home/routes";

export default [
  ...home,
  {
    path: "*",
    redirect: { path: "/" },
  },
];
