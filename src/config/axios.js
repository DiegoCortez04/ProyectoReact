import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : 'http://localhost:8888'
});
export default clienteAxios;