import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Basic Obedience",
    "Number of Dogs": 108,
  },
  {
    name: "Behavior Modification",
    "Number of Dogs": 121,
  },
  {
    name: "Puppy Socialization",
    "Number of Dogs": 86,
  },
  {
    name: "Agility",
    "Number of Dogs": 97,
  },
  {
    name: "Advanced Obedience",
    "Number of Dogs": 72,
  },
  {
    name: "Service & Therapy Dog",
    "Number of Dogs": 51,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" className="bg-white dark:bg-neutral-800 text-teal-400 dark:text-lime-500">
        <BarChart
          className="text-teal-400 dark:text-lime-500"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="currentColor" className="text-neutral-700 dark:text-neutral-300" />
          <YAxis />
          {/* <Tooltip /> */}
          <Legend />
          <Bar dataKey="Number of Dogs" stackId="a" fill="currentColor" className="text-teal-400 dark:text-lime-500" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
