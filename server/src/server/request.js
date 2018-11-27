import axios from 'axios';
const instance = axios.create({
    baseURL:'https://m.ehaier.com/sg/cms'
});
export default instance;