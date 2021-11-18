export default (type) => {
  if (!type) return "SideNavItem";

  switch (type) {
    case "item":
      return "SideNavItem";
    case "group":
      return "SideNavGroup";
    default:
      return "SideNavItem";
  }
};
