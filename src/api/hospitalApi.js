
import axios from 'axios';

const hospitalApi = axios.create({
    baseURL: 'https://alvabus.online/api'
});



export default hospitalApi;
