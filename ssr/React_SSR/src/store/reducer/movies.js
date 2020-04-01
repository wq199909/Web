import { actionTypes } from "../action/movies";

export default function(state = [], {type, payload}){
    switch(type){
        case actionTypes.setDatas:
            return payload;
        default:
            return state;
    }
}