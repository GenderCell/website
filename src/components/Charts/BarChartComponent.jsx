import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChartComponent = ({ data, title }) => {
    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <h3 style={{fontSize:'25px'}}>{title}</h3>
            <Bar data={data} />
        </div>
    );
};

export default BarChartComponent;
