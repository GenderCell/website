import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ data, title }) => {
    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <h3 style={{fontSize:'25px'}}>{title}</h3>
            <Pie data={data} />
        </div>
    );
};

export default PieChartComponent;
