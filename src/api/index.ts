 import axios from 'axios';
 
export interface ResponseGenerator{
        config?:any,
        data?:any,
        headers?:any,
        request?:any,
        status?:number,
        statusText?:string
}

 const instance = axios.create({
    baseURL: 'https://swapi.dev/api/',
});

 export const getDataFromServer = async ():Promise<ResponseGenerator> => {
    const response = await instance.get('people/1/');
    return response.data;
 }