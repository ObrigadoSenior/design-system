
module.exports = {
  stories: ['./**/*.stories.@(js|jsx|ts|tsx|mdx)', '../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
     "@storybook/addon-viewport",
     "@storybook/addon-storysource",
     "@storybook/addon-a11y",
     "@storybook/addon-actions",
     "@storybook/addon-toolbars",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
};
