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
  MarkSeries
} from "react-vis";
import { data } from "./data";

class BasicChartsOne extends Component {
  render() {
    const height = 200;
    const width = 200;

    return (
      <div className="App">
        <h1>Basic Charts One</h1>
        <div className="ChartsOne">
          <XYPlot height={height} width={width}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={data} />
          </XYPlot>
          <XYPlot height={height} width={width}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries data={data} />
          </XYPlot>
          <XYPlot height={height} width={width}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <MarkSeries data={data} />
          </XYPlot>
        </div>
      </div>
    );
  }
}

export default BasicChartsOne;
