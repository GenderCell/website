import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartData } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface BarChartComponentProps {
    data: ChartData<'bar'>;
    title: string;
}

const BarChartComponent: React.FC<BarChartComponentProps> = ({ data, title }) => {
    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            <h3 className="text-2xl font-heading font-bold text-center mb-4">{title}</h3>
            <Bar data={data} />
        </div>
    );
};

export default BarChartComponent;
