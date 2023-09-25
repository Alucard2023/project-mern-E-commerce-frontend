import {combineReducers} from 'redux' ; 
import userReducer from './user';
import AdminReducer from './Admin';
import productReducer from'./product';
import orderReducer from'./order';
const rootReducer = combineReducers({userReducer,AdminReducer,productReducer,orderReducer})

export default rootReducer ;