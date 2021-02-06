import React from 'react';

import Navbar, { Logo } from './Navbar';

export default {
  title: 'Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  logo: <Logo />,
};

export const NavbarWithTextLogo = Template.bind({});
NavbarWithTextLogo.args = {
  logo: 'Entre Logo',
};
