import React from 'react';

import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  placeholder: 'Small Input Field',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  placeholder: 'Medium Input Field',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  placeholder: 'Large Input Field',
};
