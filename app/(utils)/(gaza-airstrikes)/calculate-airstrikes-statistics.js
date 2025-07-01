const gazaData = require('../../../constants/airstrikes-dataset.json');

(() => {
    const mappedFatalities = gazaData.map((airstrike) => parseInt(airstrike.fatalities));
    const sortedFatalities = mappedFatalities.sort((a, b) => a - b);

    const amountOfEach = sortedFatalities.reduce((acc, curr) => {
        if (!acc[curr]) acc[curr] = 1;
        else acc[curr] += 1;

        return acc;
    }, {});

    const arrayAmounts = Object.entries(amountOfEach);
    // [[0, 3432], [1, 423], [..., ...]]

    const chunkedFatalities = {};

    for (let i = 0; i <= 20; i += 10) {
        const lowerBound = i;
        const upperBound = i === 20 ? 10000 : i + 10;

        const id = `${lowerBound} - ${upperBound}`;
        chunkedFatalities[id] = arrayAmounts.reduce((acc, curr) => {
            const [amountOfDeaths, frequency] = curr;

            if (amountOfDeaths >= lowerBound && amountOfDeaths <= upperBound) acc += frequency;

            return acc;
        }, 0);
    }

    console.log(amountOfEach);
    console.log(chunkedFatalities);

    // console.log(sortedFatalities);
    // console.log(sortedFatalities.slice(sortedFatalities.length / 2));
})();
