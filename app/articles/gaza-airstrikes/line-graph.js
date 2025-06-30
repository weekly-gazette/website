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
    // TODO: Make line graph adjustable with year

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
                text: 'Deaths and Airstrikes in Gaza Since 2020',
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

    const objectGazaData = Object.fromEntries(cumulativeGazaData);
    const labels = Object.keys(objectGazaData);

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Deaths',
                data: labels.map((label) => objectGazaData[label].fatalities),
                borderColor: 'rgb(256, 256, 256)',
                backgroundColor: 'rgba(256, 256, 256, 0.25)',
            },
            {
                fill: true,
                label: 'Airstrikes',
                data: labels.map((label) => objectGazaData[label].airstrikes),
                borderColor: 'rgb(2, 103, 193)',
                backgroundColor: 'rgba(2, 103, 193, 0.25)',
            },
        ],
    };

    return (
        <div className="h-[60lvh]">
            <Line options={options} data={data} />
        </div>
    )
}