const fs = require('fs');
const csv = require('csv-parser');

(() => {
    console.log('Cleaning data');

    const data = [];

    const EVENT_FIELD = 'sub_event_type';
    const EVENT_NAME = 'Air/drone strike';
    const MILITARY_FIELD = 'actor1';
    const MILITARY_NAME = 'Military Forces of Israel';

    const YEAR_FIELD = 'year';
    const YEAR = 2016;

    // Import CSV
    fs.createReadStream('../../constants/gaza-airstrikes.csv')
        .pipe(csv())
        .on('data', (row) => {
            console.log('Row omitted');

            if (
                row[EVENT_FIELD].includes(EVENT_NAME)
                && row[MILITARY_FIELD].includes(MILITARY_NAME)
                && row[YEAR_FIELD] > YEAR
            ) {
                console.log('Row added', row);
                data.push(row);
            }
        })
        .on('end', () => {
            console.log('Number of airstrike events:', data.length);

            const jsonData = JSON.stringify(data, null, 2);

            fs.writeFile('cleaned-gaza-data.json', jsonData, (err) => {
                if (err) {
                    console.error('Error writing file:', err);
                } else {
                    console.log('JSON data written to output.json');
                }
            });
        });
})();
