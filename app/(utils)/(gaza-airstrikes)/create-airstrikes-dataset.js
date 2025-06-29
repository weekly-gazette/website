const fs = require('fs');
const csv = require('csv-parser');

const INPUT_DATASET_NAME = 'gaza-acled-data';
const OUTPUT_DATASET_NAME = 'airstrikes-dataset';

(() => {
    console.log('Creating Gaza airstrikes JSON dataset');

    const EVENT_FIELD = 'sub_event_type';
    const EVENT_NAME = 'Air/drone strike';
    const MILITARY_FIELD = 'actor1';
    const MILITARY_NAME = 'Military Forces of Israel';

    const data = [];

    fs.createReadStream(`../../../constants/${INPUT_DATASET_NAME}.csv`)
        .pipe(csv())
        .on('data', (row) => {
            if (
                row[EVENT_FIELD].includes(EVENT_NAME)
                && row[MILITARY_FIELD].includes(MILITARY_NAME)
            ) {
                console.log('Row added', row);

                data.push(row);
            }
        })
        .on('end', () => {
            console.log('Number of airstrike events:', data.length);

            const jsonData = JSON.stringify(data, null, 2);

            fs.writeFile(`../../../constants/${OUTPUT_DATASET_NAME}.json`, jsonData, (err) => {
                if (err) console.log(err);
            });
        });
})();

module.exports = { INPUT_DATASET_NAME, OUTPUT_DATASET_NAME };
