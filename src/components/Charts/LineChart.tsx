import React, { useEffect } from "react";
import * as d3 from "d3";

interface Props {
  data: { x: number; y: number }[];
}

const Colors = ["#000", "#f0f", "#f00", "pink", "purple"];

const LineChart: React.FC<Props> = props => {
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

    // svg
    //   .append("path")
    //   .datum(data)
    //   .attr("fill", "none")
    //   .attr("stroke", "steelblue")
    //   .attr("stroke-width", 1.5)
    //   .attr("d", d3.line()
    //     .x(function(d) { return x(d.x) })
    //     .y(function(d) { return y(d.xy })
    //     )
  };

  return <div></div>;
};

export default LineChart;
