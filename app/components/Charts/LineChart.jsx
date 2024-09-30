import React from "react";
import { Chart } from "primereact/chart";
export const LineChart = ({ Data, options }) => {

  return <Chart type="line" data={Data} options={options} />;
};
