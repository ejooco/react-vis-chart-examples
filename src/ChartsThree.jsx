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

//Parameters for <ChartsThree-3></ChartsThree-3>
const myPalette = ["blue", "yellow", "green"];

class ChartsThree extends Component {
  render() {
    const height = 200;
    const width = 300;

    return (
      <div className="App">
        <h1>Charts Three</h1>
        <h4>No colour specified. Colours assigned via datasets</h4>
        <div className="ChartsThree-1">
          <XYPlot height={200} width={200}>
            <VerticalBarSeries data={series1} />
            <VerticalBarSeries data={series2} />
            <VerticalBarSeries data={series3} />
          </XYPlot>
          <XYPlot height={200} width={200}>
            <LineSeries data={series1} />
            <LineSeries data={series2} />
            <LineSeries data={series3} />
          </XYPlot>
          <XYPlot height={200} width={200}>
            <MarkSeries data={series1} />
            <MarkSeries data={series2} />
            <MarkSeries data={series3} />
          </XYPlot>
        </div>
        <h4>Colour specified at the XYPlot level</h4>
        <h4>Trickles down</h4>

        <div className="ChartsThree-2">
          <XYPlot height={200} width={200} color="red">
            <VerticalBarSeries data={series1} />
            <VerticalBarSeries data={series2} />
            <VerticalBarSeries data={series3} />
          </XYPlot>
          <XYPlot height={200} width={200} stroke="red">
            <LineSeries data={series1} />
            <LineSeries data={series2} />
            <LineSeries data={series3} />
          </XYPlot>
          <XYPlot height={200} width={200} color="red">
            <MarkSeries data={series1} />
            <MarkSeries data={series2} />
            <MarkSeries data={series3} />
          </XYPlot>
        </div>
      </div>
    );
  }
}

export default ChartsThree;
