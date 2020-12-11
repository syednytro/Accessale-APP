import { combineReducers } from 'redux';
import appReducerData from '../user/reducer'


const rootReducer = combineReducers({
    appReducerData: appReducerData,
});

export default rootReducer;
