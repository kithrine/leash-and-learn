import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Male", value: 54 },
  { name: "Female", value: 46 },
];

const LIGHTCOLORS = ["#5eead4", "#c4b5fd", "#6d5542", "#beb09d"];
const DARKCOLORS = ["#84cc16", "#facc15", "#6d5542", "#beb09d"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="currentColor"
      className="text-neutral-800 dark:text-neutral-800"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const PieChartMaleToFemaleDogs = () => {
  const storedTheme = localStorage.getItem("theme")
  return (
    <ResponsiveContainer width="100%" height="100%" className="bg-white dark:bg-neutral-800">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`${storedTheme === "light" ? LIGHTCOLORS[index % LIGHTCOLORS.length] : DARKCOLORS[index % DARKCOLORS.length]}`} />
          ))}
        </Pie>
        <Legend
          verticalAlign="bottom"
          align="center"
          dataKey="value"
          style={{ marginTop: "20px" }}
        />
        
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartMaleToFemaleDogs;
