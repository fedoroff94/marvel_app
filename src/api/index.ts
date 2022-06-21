 import axios from 'axios';
 
 const instance = axios.create({
    baseURL: 'developer.marvel.com/',
    withCredentials: true,
    headers: {
        'API-KEY': '2d0316d9b7238c875824ac9769996e5d'
    }
});

 export const getDataFromServer = () => {
    const response = instance.get('v1/public/characters')
    .then(response => response.data);
    return response;
 }