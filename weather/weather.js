const axios = require('axios');

const getWeather = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=7af1bb9fe13d809136f48e21af874b5e&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getWeather
}