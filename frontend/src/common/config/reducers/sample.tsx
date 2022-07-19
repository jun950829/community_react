import { useDispatch } from 'react-redux';

// action Types
const SAMPLE = "SAMPLE";

// initial State
export const initialState = {
    isLogin : 'NotLogin'
};

export interface dataInterface {
    user_num : number,
    user_id : String,
    user_password : String,
    user_name : String,
    user_nickname : String,
}


async function callUserData () {
    try {
        const res = await fetch('http://localhost:3000/api/test');
        const data = await res.json();
        return data;
    } catch(e) {
        console.log(e);
    }
}

async function findId(name : String) {
    const result = await callUserData()
    let isLogin = 'NotLogin';
    result.forEach((element : dataInterface) => {
        if(element.user_id == name) {
            isLogin = 'Login';
        } 
    });
    console.log(isLogin);

    return isLogin;
}

// reducer
const sample = async (state = initialState, action : any) => {
    switch (action.type) {
        case SAMPLE : {
            const checkId = await findId(action.text);
            return { ...state, ...{ isLogin : checkId} };
        }
        default :
            return state;
    }
};

export default sample;