import React from 'react';

import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    show: true,
  },
};

const Template = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  show: true,
  children: <h1>This is a Modal</h1>,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: <h1>Hello world</h1>,
};
