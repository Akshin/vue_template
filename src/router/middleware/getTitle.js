function formatTitle(title) {
  if (!title) return "Rider";
  return `Rider - ${title.toLowerCase()}`;
}

const _getTitle = (to) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);
  document.title = formatTitle(nearestWithTitle?.meta?.title);
};

export const getTitle = _getTitle;
