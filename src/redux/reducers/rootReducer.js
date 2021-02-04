
import bookReducer from "../reducers/bookReducer"
import popUpReducer from '../reducers/popupReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    books: bookReducer,
    popUp : popUpReducer,
})


export default rootReducer;