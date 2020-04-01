import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import {fetchMovies} from "./action/movies"
import thunk from "redux-thunk"
function makeStore(){
    let store;
    if(global.document){
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        store = createStore(
            reducer, 
            window.pageDatas,
            composeEnhancers(applyMiddleware(thunk))
        )
    
    }else{
        store = createStore(reducer, applyMiddleware(thunk));
    }
    return store;
}

export default makeStore