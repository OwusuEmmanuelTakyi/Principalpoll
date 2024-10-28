import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement, LineElement } from 'chart.js';
import Coolers from '../theme';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement,LineElement);

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Votes',
        color: Coolers.deepViolet,
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        backgroundColor: Coolers.lightViolet,
        borderColor: Coolers.lightViolet,
        pointBackgroundColor: Coolers.deepViolet,
        pointHoverColor:Coolers.lighterBlue,
        pointBorderColor:'black'
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Votes per month',
        color: Coolers.deepViolet,
        
      },
    },
  };

  return (
    <div className='w-[100%] h-[100%] bg-blue-300 '>
      <Line data={data} options={options} />
    </div>
  );
  
};

export default LineChart;
