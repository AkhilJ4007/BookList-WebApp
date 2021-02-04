import { ADD_BOOK,REMOVE_BOOK,UPDATE_BOOK } from '../actions/bookActions';


const initialState = {
    booksList: [{name : "Sherlock", price : 12 , category: "Detective", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
    {name : "AJJ", price : 14 , category: "Biography", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"},
    {name : "King", price : 22 , category: "Biography", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}],
};

function bookReducer(state = initialState, action) {
switch (action.type) {
    case ADD_BOOK:
    return {
        ...state,
        booksList : state.booksList.concat(action.payload)
    };
    case REMOVE_BOOK:
    return {
        ...state, //copying the original state
        booksList: state.booksList.filter((book,index) => index+1 !== action.payload) 
    };

    case UPDATE_BOOK:

    const newArray = [...state.booksList]; 
    newArray[action.key -1] = action.payload;
    return {
        ...state,
        booksList : newArray
    }

    default:
    return state;
}
}

export default bookReducer;