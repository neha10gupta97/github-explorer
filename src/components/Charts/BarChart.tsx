import React from "react";
import { PieChart, ResponsiveContainer } from "recharts";

interface Props {
  data: { x: number; y: number }[];
}

const Colors = ["#000", "#f0f", "#f00", "pink", "purple"];

const BarChart: React.FC<Props> = props => {
  return (
    <ResponsiveContainer>
      <PieChart data={props.data} />
    </ResponsiveContainer>
  );
};

export default BarChart;
