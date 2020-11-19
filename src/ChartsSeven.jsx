import React from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  AreaSeries,
  GradientDefs,
  Borders
} from "react-vis";

export default function ChartsSeven(props) {
  return (
    <XYPlot xDomain={[1.2, 3]} yDomain={[11, 26]} width={300} height={300}>
      <GradientDefs>
        <linearGradient id="CoolGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="red" stopOpacity={0.4} />
          <stop offset="100%" stopColor="blue" stopOpacity={0.3} />
        </linearGradient>
      </GradientDefs>
      <VerticalGridLines />
      <HorizontalGridLines />

      <AreaSeries
        color={"url(#CoolGradient)"}
        data={[
          { x: 1, y: 10, y0: 1 },
          { x: 2, y: 25, y0: 5 },
          { x: 3, y: 15, y0: 3 }
        ]}
      />
      <Borders
        style={{
          bottom: { fill: "#fff" },
          left: { fill: "url(#CoolGradient)", opacity: 0.3 },
          right: { fill: "#fff" },
          top: { fill: "#fff" }
        }}
      />
      <XAxis />
      <YAxis />
      <AreaSeries
        data={[
          { x: 1, y: 5, y0: 6 },
          { x: 2, y: 20, y0: 11 },
          { x: 3, y: 10, y0: 9 }
        ]}
      />
    </XYPlot>
  );
}
