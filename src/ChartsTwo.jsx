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

class ChartsTwo extends Component {
  render() {
    const height = 200;
    const width = 300;

    return (
      <div className="App">
        <h1>Charts Two</h1>
        <h4>Note that the charts are reversed by changing the xDomain.</h4>
        <div className="ChartsOne">
          <XYPlot height={height} width={width}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={data} />
          </XYPlot>
          <XYPlot height={height} width={width} xDomain={[9, 0]}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={data} />
          </XYPlot>
        </div>
      </div>
    );
  }
}

export default ChartsTwo;
