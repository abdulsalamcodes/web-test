import React, { useContext } from 'react';
import { TimeContext } from '../../../contexts/TimeContext';
import Calendar from './Calendar';

const { endDate, setEndDate } = useContext(TimeContext);

export default {
  title: 'Calendar',
  component: Calendar,
};

const Template = (args) => <Calendar {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  dateToControl: endDate,
  action: setEndDate,
};
