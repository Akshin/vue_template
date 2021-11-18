export default [
  {
    title: "group",
    subheader: "group subheader",
    type: "group",
    active: false,
    icon: "mdi-calendar-check",
    items: [
      {
        title: "item",
        type: "item",
        to: {
          name: "home",
          // params: { processGroup: "user-doer" },
        },
      },
      {
        title: "item",
        type: "item",
        to: {
          name: "home",
          params: { processGroup: "user-creator" },
        },
      },
    ],
  },
  {
    title: "group",
    subheader: "group subheader",
    type: "group",
    active: false,
    icon: "mdi-account-supervisor",
    items: [
      {
        title: "group",
        type: "group",
        active: false,
        items: [
          {
            title: "item",
            type: "item",
          },
          {
            title: "item",
            type: "item",
          },
        ],
      },
    ],
  },
  {
    title: "group",
    subheader: "group subheader",
    type: "group",
    active: false,
    icon: "mdi-warehouse",
    items: [
      {
        title: "group",
        type: "group",
        active: false,
        items: [
          {
            title: "item",
            type: "item",
          },
          {
            title: "item",
            type: "item",
          },
        ],
      },
      {
        title: "group",
        type: "group",
        active: false,
        items: [
          {
            title: "item",
            type: "item",
          },
          {
            title: "item",
            type: "item",
          },
        ],
      },
    ],
  },
  {
    title: "group",
    subheader: "group subheader",
    type: "group",
    active: false,
    icon: "mdi-chart-line-stacked",
    items: [
      {
        title: "item",
        type: "item",
      },
    ],
  },
  {
    type: "item",
    title: "Выход",
    icon: "mdi-logout",
    // to: { name: "logout" },
  },
];
