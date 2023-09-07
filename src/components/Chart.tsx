import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)
export function Chart() {

  const data = {
    labels: ["0", "", "1", "", "2", "", "3", "", "4", "", "5", "", "6", "", "7", "", "8", "", "9"],
    datasets: [{
      data: [0, 7, 9, 11, 7, 5, 10, 5, 7, 8, 10, 12, 9, 13, 12, 14, 15, 16, 18],
      backgroundColor: 'transparent',
      borderColor: '#037BCB',
      pointBorderColor: 'transparent',
      pointBorderWidth: 4,
      tension: 0.4,
    }]
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      x: {
        type: 'category',
        grid: {
          display: false
        }
      },
      y: {
        type: 'linear',
        min: 0,
        max: 20,
        ticks: {
          stepSize: 2,
          callback: (value: number) => value + 'K'
        }
      },
    }
  };



  return (
    <div className="flex min-w-[280px] min-h-[156px] border border-[#6d7d933a] bg-[#1C1D24] p-2 rounded-lg">
      <Line data={data} options={options} />
    </div>
  );
};