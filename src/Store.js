import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import LocalStorage from './helpers/LocalStorage';

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

let MainMenuReducer = (state ={ auth: !LocalStorage.isGuest(), user: LocalStorage.getCurrentUser()}, action) => {
    switch (action.type) {
        case 'LOGOUT':
            return {
                auth: false,
                user: false,
            }
        case 'LOGIN':
            return {
                auth: true,
                user: action.payload.user,
            }
        //no default
    }

    return state;
}

let reducer = (state = {}, action) => {
    return state;

}




const rootReducer = combineReducers({
    breadcrumb : breadcrumbReducer,
    test: reducer,
    form: formReducer,
    mainMenu: MainMenuReducer,
})

// DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));



export default store;