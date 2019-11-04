import React, { useEffect } from "react";
import * as d3 from "d3";

interface Props {
  data: { x: number; y: number }[];
}

const Colors = ["#000", "#f0f", "#f00", "pink", "purple"];

const BarChart: React.FC<Props> = props => {
  useEffect(() => {
    drawChart();
  });

  const drawChart = () => {
    const data = props.data.map(d => d.x);

    const w = 500,
      h = 500;

    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin-left", 100);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => h - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", () => Colors[Math.floor(Math.random() * 4)]);
  };

  return <div></div>;
};

export default BarChart;
