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
    "Number of Dogs": 105,
  },
  {
    name: "Behavior Modification",
    "Number of Dogs": 38,
  },
  {
    name: "Puppy Socialization",
    "Number of Dogs": 68,
  },
  {
    name: "Agility",
    "Number of Dogs": 87,
  },
  {
    name: "Advanced Obedience",
    "Number of Dogs": 42,
  },
  {
    name: "Service & Therapy Dog",
    "Number of Dogs": 21,
  },
];

export default class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Number of Dogs" stackId="a" fill="#beb09d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
