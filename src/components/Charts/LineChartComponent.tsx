import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, ChartData } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface LineChartComponentProps {
    data: ChartData<'line'>;
    title: string;
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data, title }) => {
    return (
        <div style={{ width: '70%', margin: 'auto' }}>
            <h3 className="text-2xl font-heading font-bold text-center mb-4">{title}</h3>
            <Line data={data} />
        </div>
    );
};

export default LineChartComponent;
