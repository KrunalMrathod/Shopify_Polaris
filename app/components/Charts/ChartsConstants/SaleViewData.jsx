import {
  ViewIcon, CashDollarFilledIcon, CartUpIcon, ExportIcon
} from '@shopify/polaris-icons';
export const SalesAndViewsdata = {
  labels: [
    "Feb 1 ",
    "Feb 3 ",
    "Feb 5 ",
    "Feb 7 ",
    "Feb 9 ",
    "Feb 11 ",
    "Feb 13 ",
    "Feb 15 ",
    "Feb 17 ",
    "Feb 19 ",
    "Feb 21 ",
    "Feb 23 ",
    "Feb 25 ",
    "Feb 27 ",
    "Mar 1",
  ],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 40, 50, 65, 75, 20, 46, 87, 15, 75],
      fill: false,
      tension: 0.4,
      borderColor: "#008060",
    },
    {
      label: "Views",
      data: [28, 48, 40, 19, 86, 27, 90, 80, 64, 46, 46, 15, 75, 54, 56],
      fill: false,
      borderDash: [5, 5],
      tension: 0.4,
      borderColor: "#ffc96b",
    },
    {
      label: "Sales",
      data: [45, 37, 73, 25, 52, 27, 90, 80, 45, 46, 78, 15, 75, 37, 56],
      fill: false,
      borderDash: [5, 5],
      tension: 0.4,
      borderColor: "#008060",
    },
    {
      label: "Views",
      data: [12, 51, 62, 33, 21, 62, 45, 16, 45, 81, 34, 1, 37, 61, 51],
      fill: false,
      borderColor: "#ffc96b",
      tension: 0.4,
      backgroundColor: "rgba(255,167,38,0.2)",
    },
  ],
};

export const CommonSalesOptions = {
  plugins: {
    title: {
      display: true,

      font: {
        size: 16,
      },
    },
    legend: {
      position: "flase",
    },
  },
};

export const SiteSpeedData = {
  labels: ["Feb 1 ", "Feb 6 ", "Feb 12 ", "Feb 18 ", "Feb 24 ", "Mar 1 "],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 40, 50, 65, 75, 20, 46, 87, 15, 75],
      fill: false,
      tension: 0.4,
      borderColor: "#008060",
    },
    {
      label: "Views",
      data: [28, 48, 40, 19, 86, 27, 90, 80, 64, 46, 46, 15, 75, 54, 56],
      fill: false,
      borderDash: [5, 5],
      tension: 0.4,
      borderColor: "#ffc96b",
    },
    {
      label: "Sales",
      data: [45, 37, 73, 25, 52, 27, 90, 80, 45, 46, 78, 15, 75, 37, 56],
      fill: false,
      borderDash: [5, 5],
      tension: 0.4,
      borderColor: "#008060",
    },
    {
      label: "Views",
      data: [12, 51, 62, 33, 21, 62, 45, 16, 45, 81, 34, 1, 37, 61, 51],
      fill: false,
      borderColor: "#ffc96b",
      tension: 0.4,
      backgroundColor: "rgba(255,167,38,0.2)",
    },
  ],
};

export const Revenue = {
  labels: ["Feb 1 ", "Feb 6 ", "Feb 12 ", "Feb 18 ", "Feb 24 ", "Feb 28 "],

  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 40, 50, 65, 75, 20, 46, 87, 15, 75],
      fill: false,
      tension: 0.4,
      borderColor: "#008060",
    },

    {
      label: "Sales",
      data: [45, 37, 73, 25, 52, 27, 90, 80, 45, 46, 78, 15, 75, 37, 56],
      fill: false,
      borderDash: [5, 5],
      tension: 0.4,
      borderColor: "#008060",
    },
  ],
};

export const Sliders = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=500&auto=format&fit=crop&q=60",
    text: "1 SpeedPlus is an AI-driven speed optimization tool designed specifically for Shopify stores. By using a combination of publicly known site speed tools, proprietary techniques, and advanced AI algorithms, SpeedPlus aims to provide the best possible speed optimization for Shopify merchants. Here are some reasons why SpeedPlus could be the best choice for speeding up online stores",
  },
  {
    image:
      "https://images.unsplash.com/photo-1721332154161-847851ea188b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    text: "2 SpeedPlus is an AI-driven speed optimization tool designed specifically for Shopify stores. By using a combination of publicly known site speed tools, proprietary techniques, and advanced AI algorithms, SpeedPlus aims to provide the best possible speed optimization for Shopify merchants. Here are some reasons why SpeedPlus could be the best choice for speeding up online stores",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1677560517139-1836389bf843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    text: "3 SpeedPlus is an AI-driven speed optimization tool designed specifically for Shopify stores. By using a combination of publicly known site speed tools, proprietary techniques, and advanced AI algorithms, SpeedPlus aims to provide the best possible speed optimization for Shopify merchants. Here are some reasons why SpeedPlus could be the best choice for speeding up online stores",
  },
];

export const BarsData = {
  BarData1: [
    {
      backGroundColor: "fdc9d0",
      height: 50,
    },
    {
      backGroundColor: "91e0d6",
      height: 65,
    },
    {
      backGroundColor: "92e6b5",
      height: 60,
    },
    {
      backGroundColor: "ffc4b0",
      height: 55,
    },
  ],

  BarData2: [
    {
      backGroundColor: "ffc4b0",
      height: 60,
    },
    {
      backGroundColor: "fdc9d0",
      height: 50,
    },
    {
      backGroundColor: "91e0d6",
      height: 62,
    },
    {
      backGroundColor: "92e6b5",
      height: 48,
    },
  ],
};

export const CardData = [
  {
    title: "Sessions",
    percentage: "11.5 %",
    value: "4.320 %",
    icon: ViewIcon,
    tootltip: "Number Of views in last 30 days",
  },
  {
    title: "Conversion Rate",
    percentage: "11.5 %",
    value: "2.79 %",
    icon: ExportIcon,
    tootltip: "Number Of views in last 30 days",
  },
  {
    title: "Total Sales",
    percentage: "11.5 %",
    value: "$79,999",
    icon: CashDollarFilledIcon,
    tootltip: "Number Of views in last 30 days",
  },
  {
    title: "Total Orders",
    percentage: "11.5 %",
    value: 54,
    icon: CartUpIcon,
    tootltip: "Number Of views in last 30 days",
  },
];
