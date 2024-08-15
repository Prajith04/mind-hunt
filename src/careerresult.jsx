import './careerresult.css';
import { useLocation } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CareerResult() {
    const location = useLocation();
    const { scores = {}, careers = [], toptopics = {} } = location.state || {};

    // Prepare data for the bar chart
    const data = {
        labels: Object.keys(scores), // Topics as labels
        datasets: [
            {
                label: 'Scores',
                data: Object.values(scores), // Scores as data
                backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
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
                text: 'Career Scores by Topic',
            },
        },
    };

    return (
        <div className='careerresult'>
            <h1>Career Result</h1>
            
            {/* Bar Chart */}
            <div className='bar'>
                <Bar data={data} options={options} />
            </div>

            {/* Displaying Recommended Careers */}
            <h2>Recommended Careers:</h2>
            <ul>
                {careers.map((career, index) => (
                    <p key={index}>{career}</p>
                ))}
            </ul>

            {/* Displaying Top Topics */}
            <h2>Top Topics:</h2>
            <ul>
                {Object.entries(toptopics).map(([topic, value]) => (
                    <p key={topic}>
                       {value}
                    </p>
                ))}
            </ul>
        </div>
    );
}

export default CareerResult;
