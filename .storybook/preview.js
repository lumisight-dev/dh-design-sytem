export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Introduction",
        "Getting Started",
        ["Designer", "Developer"],
        "Components",
        ["View", "Button"],
        "Tutorial",
        [
          "How to Create and Publish a React Component Library",
          "How to write storybook",
        ],
      ],
    },
  },
};
