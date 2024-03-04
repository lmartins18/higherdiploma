import axios from 'axios';

const getCoords = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (pos) => resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
            (error) => reject(error)
        );
    });
};
const generateCityString = (result) => {
    let toReturn = "";
    // Add city to string.
    toReturn = toReturn.concat(result.city ? result.city + ", " : "");
    // Add state to string.
    toReturn = toReturn.concat(result.state_code ? result.state_code + ", " : "");
    // Add country to string.
    toReturn = toReturn.concat(result.country_code ? result.country_code.toUpperCase() : "");
    return toReturn;
}
export const getLocation = async () => {
    try {
        const { longitude, latitude } = await getCoords()
        const result = await axios(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=4167d5171bd746a3b8fe3a379c1111ec`)
            .then(res => res.data.results[0]);
    
        const toReturn = generateCityString(result);
        return toReturn;    
    } catch (error) {
        throw error;
    }
}