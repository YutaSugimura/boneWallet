import { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import { StorybookContainer } from '../storybook/container';
import { Button as Component } from './';

export default {
  title: 'UIParts/Button',
  component: Component,
} as Meta;

const Template: Story<ComponentProps<typeof Component>> = (args) => (
  <StorybookContainer>
    <Component {...args} />
  </StorybookContainer>
);
Template.storyName = 'Default';

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  onPress: () => console.log('clicked'),
  width: 350,
};
