import React, { useEffect, useState } from "react";

export default function StoreSpeedChart({ value }) {
  const [chartLoaded, setChartLoaded] = useState(false);
  const [ReactApexChart, setReactApexChart] = useState(null);

  useEffect(() => {
    const loadChart = async () => {
      const { default: Chart } = await import("react-apexcharts");
      setReactApexChart(() => Chart);
      setChartLoaded(true);
    };

    loadChart();
  }, []);


  const chartData = {
    series: [value], 
    options: {
      chart: {
        type: "radialBar",
        offsetY: 0,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: "12px",
              fontWeight: 400,
              color: "#8C9196",
              fontFamily: "SF-Pro",
              offsetY: 22,
            },
            value: {
              offsetY: -10,
              fontSize: "24px",
              fontWeight: "600",
              fontFamily: "SF-Pro-Display",
              color: "#007B5C",
              formatter: (val) => `${val}%`, 
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
          colorStops: [
            { offset: 0, color: "#007B5C", opacity: 1 },
            { offset: 50, color: "rgba(0, 123, 92, 0.6)", opacity: 1 },
            { offset: 100, color: "rgba(0, 123, 92, 0.9)", opacity: 1 },
          ],
        },
      },
      stroke: {
        dashArray: 0,
      },
      labels: ["Overall"],
    },
  };

  if (!chartLoaded || !ReactApexChart) return null;

  return (
    <div className="overall_speed_chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        width={250}
        height={250}
      />
    </div>
  );
}
