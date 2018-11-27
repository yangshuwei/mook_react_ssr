import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import  {reducer as homeReducer} from '../continers/Home/store/index';
import clientAxios from '../client/request';
import serverAxion from '../server/request';
const reducer = combineReducers({
    home:homeReducer
})
export const getStore = () => {
    return createStore(reducer,applyMiddleware(thunk.withExtraArgument(serverAxion)))
}
export const getClientStore = () => {
    const defaultState = window.context.state
    return createStore(reducer,defaultState,applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
