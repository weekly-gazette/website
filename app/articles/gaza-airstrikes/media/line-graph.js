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
import dayjs from "dayjs";

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
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white',
                },
            },
            title: {
                display: true,
                text: 'Casualties and Airstrikes in Gaza Since Oct. 2023',
                color: 'white',
                font: {
                    size: 20,
                    weight: 'bold',
                }
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Number',
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                },
            },
        },
    };

    const formattedGazaData = Object.fromEntries(cumulativeGazaData);
    const labels = Object.keys(formattedGazaData);
    const displayLabels = labels.map((label) => dayjs(label).format('MMM. YYYY'));

    const data = {
        labels: displayLabels,
        datasets: [
            {
                fill: true,
                label: 'Casualties',
                data: labels.map((label) => formattedGazaData[label].fatalities),
                borderColor: 'rgb(255, 99, 103)',
                backgroundColor: 'rgba(255, 99, 103, 0.25)',
            },
            {
                fill: true,
                label: 'Airstrikes',
                data: labels.map((label) => formattedGazaData[label].airstrikes),

                borderColor: 'rgb(256, 256, 256)',
                backgroundColor: 'rgba(256, 256, 256, 0.25)',
            },
        ],
    };

    return (
        <div className="h-[60lvh]">
            <Line options={options} data={data} />
        </div>
    )
}