/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan 2024',
    "Basic Obedience": 26,
    "Behavior Modification": 10,
    "Puppy Socialization": 33,
    "Agility": 20,
    "Advanced Obedience": 16,
    "Service & Therapy Dog": 6
  },
  {
    name: 'Feb 2024',
    "Basic Obedience": 35,
    "Behavior Modification": 14,
    "Puppy Socialization": 27,
    "Agility": 28,
    "Advanced Obedience": 20,
    "Service & Therapy Dog": 9
  },
  {
    name: 'March 2024',
    "Basic Obedience": 41,
    "Behavior Modification": 29,
    "Puppy Socialization": 35,
    "Agility": 32,
    "Advanced Obedience": 18,
    "Service & Therapy Dog": 10
  },
  {
    name: 'April 2024',
    "Basic Obedience": 45,
    "Behavior Modification": 24,
    "Puppy Socialization": 53,
    "Agility": 30,
    "Advanced Obedience": 27,
    "Service & Therapy Dog": 8
  },
  {
    name: 'May 2024',
    "Basic Obedience": 45,
    "Behavior Modification": 20,
    "Puppy Socialization": 30,
    "Agility": 39,
    "Advanced Obedience": 22,
    "Service & Therapy Dog": 14
  },
  {
    name: 'June 2024',
    "Basic Obedience": 37,
    "Behavior Modification": 15,
    "Puppy Socialization": 39,
    "Agility": 39,
    "Advanced Obedience": 28,
    "Service & Therapy Dog": 19
  },
  {
    name: 'July 2024',
    "Basic Obedience": 47,
    "Behavior Modification": 9,
    "Puppy Socialization": 49,
    "Agility": 45,
    "Advanced Obedience": 30,
    "Service & Therapy Dog": 20
  },
  {
    name: 'Aug 2024',
    "Basic Obedience": 68,
    "Behavior Modification": 16,
    "Puppy Socialization": 43,
    "Agility": 43,
    "Advanced Obedience": 30,
    "Service & Therapy Dog": 18
  },
  {
    name: 'Sep 2024',
    "Basic Obedience": 54,
    "Behavior Modification": 22,
    "Puppy Socialization": 52,
    "Agility": 47,
    "Advanced Obedience": 36,
    "Service & Therapy Dog": 27
  },
  {
    name: 'Oct 2024',
    "Basic Obedience": 69,
    "Behavior Modification": 24,
    "Puppy Socialization": 59,
    "Agility": 50,
    "Advanced Obedience": 42,
    "Service & Therapy Dog": 23
  },
  {
    name: 'Nov 2024',
    "Basic Obedience": 79,
    "Behavior Modification": 27,
    "Puppy Socialization": 63,
    "Agility": 57,
    "Advanced Obedience": 45,
    "Service & Therapy Dog": 19
  },
  {
    name: 'Dec 2024',
    "Basic Obedience": 92,
    "Behavior Modification": 34,
    "Puppy Socialization": 68,
    "Agility": 61,
    "Advanced Obedience": 47,
    "Service & Therapy Dog": 20
  },
];

// class CustomizedLabel extends PureComponent {
//   render() {
//     const { x, y, stroke, value } = this.props;

//     return (
//       <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
//         {value}
//       </text>
//     );
//   }
// }

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
      <ResponsiveContainer width="100%" height="100%" className="bg-white dark:bg-neutral-800">
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
          <XAxis dataKey="name" stroke="currentColor" className="text-neutral-700 dark:text-neutral-400" height={60} tick={<CustomizedAxisTick />}  />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Basic Obedience" stroke="#8884d8" />
          <Line type="monotone" dataKey="Behavior Modification" stroke="#5bcc71" />
          <Line type="monotone" dataKey="Puppy Socialization" stroke="#cfa5e6" />
          <Line type="monotone" dataKey="Agility" stroke="#50d6ff" />
          <Line type="monotone" dataKey="Advanced Obedience" stroke="#efbe19" />
          <Line type="monotone" dataKey="Service & Therapy Dog" stroke="#ffa250" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
