import axios from 'axios';

const baseUrl = 'http://localhost:3050';

const getErrorApi = err => console.log(err);

export const getAllCars = () => {
    return axios.get(`${baseUrl}/api/cars`)
        .then((result) => result.data)
        .catch(getErrorApi);
}

export const getCarById = (id) => {
    return axios.get(`${baseUrl}/api/cars/${id}`)
        .then((result) => result.data)
        .catch(getErrorApi);
}

export const addCar = (car) => {
    return axios.post(`${baseUrl}/api/cars`,car)
        .then((result) => result.data)
        .catch(getErrorApi);
};