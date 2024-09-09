import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement, Filler} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


const Utils = {
  months: ({ count }: { count: number }) => Array.from({ length: count }, (i) => `XXX`),
  numbers: ({ count, min, max }: { count: number; min: number; max: number }) => Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min),
};

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100};

const labels = Utils.months({ count: DATA_COUNT });

const App = () => {
  return (
    <div className="App" style={{ width: '1200px', height: '800px' }}>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: 'STK01',
              borderDash: [5, 5],
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 250);
                gradient.addColorStop(0, "rgba(188,182,226,1)");
                gradient.addColorStop(1, "rgba(188,182,226,0.125)");
                return gradient;
              },
              borderColor: "rgba(121,76,234,1)",
              fill: true,
              data: Utils.numbers(NUMBER_CFG),
            },
            {
              label: 'STK02',
              fill: true,
              borderDash: [5, 5],
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 500);
                gradient.addColorStop(0, "rgba(199,226,241,1)");
                gradient.addColorStop(1, "rgba(199,226,241,0.2)");
                return gradient;
              },
              borderColor: "rgba(32,78,155,1)",
              data: Utils.numbers(NUMBER_CFG),
            },
            {
              label: 'STK03',
              fill: true,
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 500);
                gradient.addColorStop(0, "rgba(68,192,153,1)");
                gradient.addColorStop(1, "rgba(68,192,153,0.2)");
                return gradient;
              },
              borderColor: "rgba(68,192,153,,1)",
              borderDash: [5, 5],
              data: Utils.numbers(NUMBER_CFG),
            },
            {
              label: 'STK04',
              fill: true,
              borderDash: [5, 5],
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 500);
                gradient.addColorStop(0, "rgba(231,177,104,1)");
                gradient.addColorStop(1, "rgba(231,177,104,0.2)");
                return gradient;
              },
              borderColor: "rgba(231,177,104,1)",
              data: Utils.numbers(NUMBER_CFG),
            },
          ],
        }}
        
      />
    </div>
  );
};

export default App;