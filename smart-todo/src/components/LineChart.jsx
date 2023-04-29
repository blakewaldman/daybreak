import React from 'react';
import { Chart, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { faker } from '@faker-js/faker';
import { transformLabelDate } from './Utils';

Chart.register(Filler);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({data}) {
  const labels = data?.map((item) => {
    return transformLabelDate(item.date)
  });
  const tasksPerDay = data?.map((item) => item.total);
  const competedTasksPerDay= data?.map((item) => item.completed);
  

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    height: 400,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Past 7 days report',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 15
      }
    }
  };


  const linechartdata = {
    labels,
    datasets: [
      {
        label: 'Total Tasks',
        data: tasksPerDay,
        borderColor: '#0E123F',
        backgroundColor: '#0E123F',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Completed Tasks',
        data: competedTasksPerDay,
        borderColor: '#AF91E9',
        backgroundColor: '#AF91E9',
        fill: false,
        tension: 0.4,
      },
    ],
  };


  return (
    <div className='w-[95%] h-[95%] m-auto'>
      <Line height={"100%"} width={"100%"} options={options} data={linechartdata} />
    </div>
  );
}

export default LineChart;