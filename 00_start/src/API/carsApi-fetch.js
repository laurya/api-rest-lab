const baseUrl = 'http://localhost:3050';

const getErrorApi = err => console.log(err);

export const getAllCars = () => {
    return fetch(`${baseUrl}/api/cars`)
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    })
    .catch(getErrorApi);
}

export const getCarById = (id) => {
    return fetch(`${baseUrl}/api/cars/${id}`)
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    })
    .catch(getErrorApi);
}

export const addCar = (car) => {
    return fetch(`${baseUrl}/api/cars`,car,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: car
    })
    .then((response) => {
        if(response.ok){
            return response.json();
        }
    })
    .catch(getErrorApi);
};