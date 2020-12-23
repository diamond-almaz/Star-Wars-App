import * as axios from 'axios'


const instance=axios.create({
    baseURL: 'https://swapi.dev/api/'
})

export const swAPI={
    getPlanets: ()=>instance.get('planets/'), //Получение списка планет
    getResources: ()=>instance.get(), //Получение ресурсов из root
    getResourceDetails: (url)=>axios.get(url)
}