import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartComponentProps {
    data: ChartData<'pie'>;
    title: string;
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data, title }) => {
    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <h3 className="text-2xl font-heading font-bold text-center mb-4">{title}</h3>
            <Pie data={data} />
        </div>
    );
};

export default PieChartComponent;
