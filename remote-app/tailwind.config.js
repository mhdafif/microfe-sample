/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        uvgreen: "#009A46",
        uvRed1: "#E02020",
        uvOrange: "#FBAA19",
        gray67: "#676767",
        grayf4: "#F4F4F4",
        gray9c: "#9C9C9C",
        gray9a: "#9A9A9A",
        grayc8: "#C8C8C8",
        grayinput: "#F5F8FA",
        grayFB: "#FBFBFB",
        black21: "#212121",
        black40: "#404040",
        whitef8: "#f8f8f8",
        dark3F: "#3F4254",
        redFF: "#FF4F5B",
        green4D: "#4DB87E",
        blue2F: "#2F71D2",
        grayB4: "#B4B4B4",
        greenD9: "#D9F9E7",
        grayE6: "#E6E6E5",
        orangeDB: "#DB8C00",
        grayF6: "#F6F8FA",
      },
      borderRadius: {
        5: "5px",
        10: "10px",
        20: "20px",
        50: "50px",
      },
      zIndex: {
        1: 1,
        5: 5,
      },
      screens: {
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
        layout: "576px",
      },
      width: {
        layout: "576px",
        tablet: "640px",
        18: "72px",
      },
      height: {
        18: "72px",
        fullMinTop: "calc(100vh-80px)",
      },
      letterSpacing: {
        0.12: "0.12em",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      dropShadow: {
        uvShadow: "0px 0px 20px rgba(0, 0, 0, 0.15)",
      },
      minHeight: {
        fullMinTop: "calc(100vh-80px)",
      },
    },
  },
};
