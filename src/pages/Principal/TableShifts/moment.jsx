import React from 'react';
import moment from 'moment';

const TestMoment = () => {
  const now = moment().format('MMMM Do YYYY, h:mm:ss a');
  return <div>Current Time: {now}</div>;
};

export default TestMomen