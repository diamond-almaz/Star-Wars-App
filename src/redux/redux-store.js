import {createStore, combineReducers, applyMiddleware} from "redux";
import planetReducer from "./planet-reducer";
import thunkMiddleware from "redux-thunk";
import statisticReducer from "./statistic-reducer";



let reducers=combineReducers({
    planetsPage: planetReducer,
    statisticsPage: statisticReducer

})

let store=createStore(reducers,applyMiddleware(thunkMiddleware))

window.store=store;

export default store;