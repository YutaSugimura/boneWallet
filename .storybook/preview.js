import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  viewport: {
    defaultViewport: "iphonex",
    viewports: {
      ...INITIAL_VIEWPORTS,
    }
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#fff',
      },
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
  },
  layout: 'centered',
};
