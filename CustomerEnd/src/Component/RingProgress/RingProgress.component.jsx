import React from 'react';
import { RingProgress } from '@ant-design/charts';

const RingProgressComponent = () => {
  var config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.6,
    color: ['#F4664A', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: function formatter() {
          return 'ABC';
        },
      },
    },
  };
  return <RingProgress {...config} />;
};

export default RingProgressComponent;