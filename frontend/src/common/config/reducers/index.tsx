import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

//reducer 넣기
import sample from './sample';

// const initialState = {
//     user : {},
//     post : {}
// };

const rootReducer = (state : any, action : any) => {
    switch(action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        default:
            return combineReducers({ sample })(state, action);
    }
};

export default rootReducer;