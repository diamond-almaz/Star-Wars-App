import {swAPI} from "../api/api";

const GET_LIST_PLANETS='GET_LIST_PLANETS'
const GET_DETAIL_PLANET='GET_DETAIL_PLANET'

let initialState={
    listPlanets: [],
    detailPlanet: null
}

const planetReducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_LIST_PLANETS:
            return {
                ...state,
                listPlanets: action.data
            }
        case GET_DETAIL_PLANET:
            return {
                ...state,
                detailPlanet: action.body

            }
        default:
            return state;
    }
}

export const getListPlanetsAC=(data)=>({type:GET_LIST_PLANETS,data})
export const getDetailPlanetAC=(body)=>({type:GET_DETAIL_PLANET,body})

export const getListPlanets=()=>(dispatch)=>{
    swAPI.getPlanets().then((response)=>{
        console.log(response)
        dispatch(getListPlanetsAC(response.data.results))
    })
}

export default planetReducer