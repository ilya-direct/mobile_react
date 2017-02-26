import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let breadcrumbReducer = (state = { name: 'home'}, action) => {
    switch(action.type) {
        case 'CHANGE_BREADCRUMB':
            return {
                name: action.payload.name,
                properties: action.payload.properties,
            };
        //no default
    }

    ////sdfsdfsadf

    return state;
}

let reducer = (state = {}, action) => {
    console.log(action);
    return state;

}




const rootReducer = combineReducers({
    breadcrumb : breadcrumbReducer,
    test: reducer,
    form: formReducer
})

// DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));



export default store;