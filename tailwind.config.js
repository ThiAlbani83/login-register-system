/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-01": "#FEFEFE",
        "gray-02": "#F3F5F7",
        "gray-03": "#E8ECEF",
        "gray-04": "#6C7275",
        "gray-05": "#343839",
        "gray-06": "#232627",
        "gray-07": "#141718",
        "sec-blue": "#377DFF",
        "sec-green": "#38CB89",
        "sec-orange": "#FFAB00",
        "sec-red": "#FF5630",
      },
    },
  },
  plugins: [],
};
