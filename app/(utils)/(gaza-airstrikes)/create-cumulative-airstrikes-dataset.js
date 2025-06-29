const { OUTPUT_DATASET_NAME: inputDatasetName } = require('./create-airstrikes-dataset');
const gazaData = require(`../../../constants/${inputDatasetName}.json`);
const dayjs = require('dayjs');
const fs = require('fs');

const OUTPUT_DATASET_NAME = 'cumulative-airstrikes-dataset';

(() => {
    const monthlyAggregateData = gazaData.reduce((acc, curr) => {
        const date = curr['event_date'].slice(0, 7);

        if (acc[date]) {
            acc[date].fatalities += parseInt(curr.fatalities);
            acc[date].airstrikes += 1;
        } else {
            acc[date] = {
                fatalities: parseInt(curr.fatalities),
                airstrikes: 1
            };
        }

        return acc;
    }, {});

    const sortedCumulativeData = Object.entries(monthlyAggregateData)
        .sort((a, b) => dayjs(a[0]).unix() - dayjs(b[0]).unix());

    const cumulativeData = sortedCumulativeData.reduce((acc, curr) => {
        const [date, data] = curr;

        acc.totalFatalities += data.fatalities;
        acc.totalAirstrikes += data.airstrikes;

        acc.data.push([
            date,
            {
                fatalities: acc.totalFatalities,
                airstrikes: acc.totalAirstrikes
            }
        ]);

        return acc;
    }, { totalFatalities: 0, totalAirstrikes: 0, data: [] });

    const jsonData = JSON.stringify(cumulativeData.data, null, 2);

    fs.writeFile(`../../../constants/${OUTPUT_DATASET_NAME}.json`, jsonData, (err) => {
        if (err) console.log(err);
    });
})();

module.exports = { OUTPUT_DATASET_NAME };