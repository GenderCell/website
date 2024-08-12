import React from 'react';
import PieChartComponent from '../components/Charts/PieChartComponent';
import BarChartComponent from '../components/Charts/BarChartComponent';
import LineChartComponent from '../components/Charts/LineChartComponent';
import '../css/Survey.css'
import LinksSection from '../components/Linkscard/LinkCard';
const SurveyResults = () => {
    const genderData = {
        labels: ['Male', 'Female', 'Non-binary', 'Other'],
        datasets: [
            {
                label: 'Gender Identity',
                data: [50, 30, 15, 5],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    const orientationData = {
        labels: ['Heterosexual', 'Homosexual', 'Bisexual', 'Other'],
        datasets: [
            {
                label: 'Sexual Orientation',
                data: [40, 25, 20, 15],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    const supportData = {
        labels: ['Supportive', 'Neutral', 'Unsupportive'],
        datasets: [
            {
                label: 'Perception of Support',
                data: [60, 30, 10],
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
            },
        ],
    };

    const comfortData = {
        labels: ['Comfortable', 'Somewhat Comfortable', 'Uncomfortable'],
        datasets: [
            {
                label: 'Comfort Level',
                data: [70, 20, 10],
                backgroundColor: ['#4BC0C0', '#FFCE56', '#FF6384'],
            },
        ],
    };

    const participationData = {
        labels: ['2019', '2020', '2021', '2022', '2023','2024'],
        datasets: [
            {
                label: 'Pride Month Participation',
                data: [200 , 250, 300, 350, 400,450],
                fill: false,
                borderColor: '#FF6384',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className='slide-in'>
            <div className="main">
            <h2>Survey Results</h2>
            <div className="inner">
              <h2>Pride Month Survey</h2>
              <div className="inner2">
            <div className="app1 wid">
            <PieChartComponent   data={genderData} title="Gender Identity" />
            </div>
            <div className="app2 wid">
            <PieChartComponent  data={orientationData} title="Sexual Orientation" />
            </div>
            <div className="app3 wid">
            <BarChartComponent  data={supportData} title="Perception of Support" />
              </div>
              <div className="app4 wid">
            <BarChartComponent  data={comfortData} title="Comfort Level in Expressing Identity" />
            </div>
            <div className="app5 wid">
            <LineChartComponent  data={participationData} title="Pride Month Participation Over the Years" />
            </div>      
            </div>  
            </div>
          </div>
        <LinksSection/> 
        </div>

    );
};

export default SurveyResults;
