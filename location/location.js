const axios = require('axios');

const getLocationLatLng = async(addr) => {
    const encodedUrl = encodeURI(addr);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: { 'X-RapidAPI-Key': 'aa3752ee72msh1374bc7166fec9ap1fbd93jsnd9286ccdcb44' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No results found for address ${ addr }`);
    }

    const data = resp.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        address,
        lat,
        lng
    }
}

module.exports = {
    getLocationLatLng
}