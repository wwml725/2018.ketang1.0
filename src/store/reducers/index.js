import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import session from './session'
import home from './home';

let reducers = combineReducers({
    home,
    router: routerReducer,
    session
});
export default reducers;