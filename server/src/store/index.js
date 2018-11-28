import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../continers/Home/store/index';
import { reducer as headerReducer } from '../components/Header/store/index';
import { reducer as translationReducer } from '../continers/Translation/store/index';
import clientAxios from '../client/request';
import serverAxion from '../server/request';
const reducer = combineReducers({
    home: homeReducer,
    header:headerReducer,
    translation:translationReducer
})
export const getStore = (req) => {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxion(req))))
}
export const getClientStore = () => {
    const defaultState = window.context.state
    return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
