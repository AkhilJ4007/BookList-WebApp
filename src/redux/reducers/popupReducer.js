import {TOGGLE_POPUP,ITEM_SELECTED} from "../actions/popUpActions"
import {ADD_BOOK,UPDATE_BOOK} from '../actions/bookActions'
const initialState = {
    modal : false,
    key : null,
};

function bookReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_POPUP:
        return {
            ...state,
            modal: !state.modal,
            key:null
            
        };
        case ITEM_SELECTED:
            
            return {
                ...state,
                modal : !state.modal,
                key : action.payload
            }
        case ADD_BOOK :
            return {
                ...state,
                modal : !state.modal
            }
        case UPDATE_BOOK :
            return {
                ...state,
                modal : !state.modal
            }
        default:
        return state;
    }
    }

export default bookReducer;