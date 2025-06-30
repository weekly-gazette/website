const { OUTPUT_DATASET_NAME: inputDatasetName } = require('./create-airstrikes-dataset');
const gazaData = require(`../../../constants/${inputDatasetName}.json`);
const fs = require('fs');

const OUTPUT_DATASET_NAME = 'geojson-airstrikes-dataset';

(() => {
    const mappedPoints = gazaData.map((point) => {
        return ({
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [parseFloat(point.longitude), parseFloat(point.latitude)]
            },
            "properties": {
                "name": point.location,
                "fatalities": parseInt(point.fatalities),
            }
        })
    });

    const geoJSON = {
        "type": "FeatureCollection",
        "features": mappedPoints
    }

    const jsonData = JSON.stringify(geoJSON, null, 2);

    fs.writeFile(`../../../constants/${OUTPUT_DATASET_NAME}.json`, jsonData, (err) => {
        if (err) console.log(err);
    });
})();
