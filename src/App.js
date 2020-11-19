import React, { Component } from "react";
import "./styles.css";
import "react-vis/dist/style.css";
import BasicChartsOne from "./BasicChartsOne";
import ChartsTwo from "./ChartsTwo";
import ChartsThree from "./ChartsThree";
import ChartsFour from "./ChartsFour";
import ZoomableChartExample from "./ChartsFive";
import ChartsSix from "./ChartsSix";
import ChartsSeven from "./ChartsSeven";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicChartsOne />
        <ChartsTwo />
        <ChartsThree />
        <ChartsFour />
        <ZoomableChartExample />
        <ChartsSix />
        <ChartsSeven />
      </div>
    );
  }
}

export default App;
