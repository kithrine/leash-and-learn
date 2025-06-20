/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan 2024',
    "Number of Dogs": 33,
  },
  {
    name: 'Feb 2024',
    "Number of Dogs": 27,
  },
  {
    name: 'March 2024',
    "Number of Dogs": 35,
  },
  {
    name: 'April 2024',
    "Number of Dogs": 53,
  },
  {
    name: 'May 2024',
    "Number of Dogs": 30,
  },
  {
    name: 'June 2024',
    "Number of Dogs": 39,
  },
  {
    name: 'July 2024',
    "Number of Dogs": 49,
  },
  {
    name: 'Aug 2024',
    "Number of Dogs": 43,
  },
  {
    name: 'Sep 2024',
    "Number of Dogs": 52,
  },
  {
    name: 'Oct 2024',
    "Number of Dogs": 59,
  },
  {
    name: 'Nov 2024',
    "Number of Dogs": 63,
  },
  {
    name: 'Dec 2024',
    "Number of Dogs": 68,
  },
];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill="currentColor" className="text-neutral-700 dark:text-white" fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="currentColor" className="text-neutral-700 dark:text-neutral-300" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-with-customized-label-d6rytv';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" className="bg-white dark:bg-neutral-800 text-teal-400 dark:text-lime-500">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} stroke="currentColor" className="text-neutral-700 dark:text-neutral-400" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Number of Dogs" stroke="currentColor" label={<CustomizedLabel />} />
       
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
