import {combineReducers} from 'redux'
import customer from "../features/customer/reducers";

const rootReducer = combineReducers({
    customer,
})

export default rootReducer
