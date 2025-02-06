import itemRenderer from "./itemRenderer";

export const items = [
  {
    label: "Home",
    icon: "pi pi-home",
    command: () => {
      window.history.pushState({}, "", "/");
      return window.dispatchEvent(new PopStateEvent("popstate"));
    },
  },
  {
    label: "Features",
    icon: "pi pi-star",
  },
  {
    label: "Projects",
    icon: "pi pi-search",
    items: [
      {
        label: "Core",
        icon: "pi pi-bolt",
        shortcut: "⌘+S",
        template: itemRenderer,
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
        shortcut: "⌘+B",
        template: itemRenderer,
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
        shortcut: "⌘+U",
        template: itemRenderer,
      },
      {
        separator: true,
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
        items: [
          {
            label: "Apollo",
            icon: "pi pi-palette",
            badge: 2,
            template: itemRenderer,
          },
          {
            label: "Ultima",
            icon: "pi pi-palette",
            badge: 3,
            template: itemRenderer,
          },
        ],
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
    badge: 3,
    template: itemRenderer,
  },
];
