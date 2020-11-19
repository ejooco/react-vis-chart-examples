import React, { Component } from "react";
import "./styles.css";
import "react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  VerticalBarSeries,
  MarkSeries,
  GradientDefs
} from "react-vis";
import { series1, series2, series3 } from "./data";

class ChartsFour extends Component {
  render() {
    const gradient = (
      <GradientDefs>
        <linearGradient
          id="myGradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="200"
          y2="200"
        >
          <stop offset="10%" stopColor="#c6e48b" />
          <stop offset="33%" stopColor="#7bc96f" />
          <stop offset="66%" stopColor="#239a3b" />
          <stop offset="90%" stopColor="#196127" />
        </linearGradient>
      </GradientDefs>
    );

    return (
      <div>
        <h1>Charts Four</h1>
        <h4>Gradient Colour</h4>
        <div className="ChartsOne">
          <XYPlot height={200} width={200}>
            {gradient}
            <VerticalBarSeries data={series1} color={"url(#myGradient)"} />
          </XYPlot>
          <XYPlot height={200} width={200}>
            {gradient}
            <LineSeries data={series1} color={"url(#myGradient)"} />
          </XYPlot>
          <XYPlot height={200} width={200}>
            {gradient}
            <MarkSeries data={series1} color={"url(#myGradient)"} />
          </XYPlot>
        </div>
      </div>
    );
  }
}

export default ChartsFour;
