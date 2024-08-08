import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const LineChartComponent = ({ data, title }) => {
    return (
        <div style={{ width: '70%', margin: 'auto' }}>
            <h3 style={{fontSize:'25px'}}>{title}</h3>
            <Line data={data} />
        </div>
    );
};

export default LineChartComponent;
