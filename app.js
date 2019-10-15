const location = require('./location/location');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Address of the city to obtain weather info',
        demand: true
    }
}).argv;

const getInfo = async(address) => {
    try {
        const coords = await location.getLocationLatLng(address);
        const temp = await weather.getWeather(coords.lat, coords.lng);

        return `The weather of ${ coords.address } is ${ temp }ºC`;
    } catch (err) {
        return `Could not found the weather of ${ address }`;
    }
};

getInfo(argv.address)
    .then(console.log)
    .catch(console.log);