import {swAPI} from "../api/api";

const GET_ROOT_RESOURCE='GET_ROOT_RESOURCE'

let initialState={
    rootResource: {},
}

const statisticReducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_ROOT_RESOURCE:
            return {
                ...state,
                rootResource: action.body
            }
        default:
            return state

    }
}

const getRootResourceAC=(body)=>({type:GET_ROOT_RESOURCE,body})

export const getRootResource=()=>(dispatch)=>{
    swAPI.getResources().then(response=>{
        dispatch(getRootResourceAC(response.data))
    })
}



export default statisticReducer;