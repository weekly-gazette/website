import { Line } from "react-chartjs-2";
import React from "react";
import cumulativeGazaData from "@/constants/cumulative-airstrikes-dataset.json";
import {
    CategoryScale,
    Chart as ChartJS,
    Filler, Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export default function LineGraph() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Deaths and Airstrikes in Gaza Since 2020',
            },
        },
    };

    const objectGazaData = Object.fromEntries(cumulativeGazaData);
    const labels = Object.keys(objectGazaData);

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Deaths',
                data: labels.map((label) => objectGazaData[label].fatalities),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                fill: true,
                label: 'Airstrikes',
                data: labels.map((label) => objectGazaData[label].airstrikes),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div>
            <Line options={options} data={data} />
        </div>
    )
}