import { authAPI } from "../api/api";

const 
    SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

    }
    return state;
    
}


export const setAuthUserDataAC = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})


// thunk objects

export const getMeThunk = () => dispatch => {
    authAPI.getMe()
    .then(data => {
        if (data.resultCode == 0) {
            let {id: userId, login, email} = data.data;
            dispatch(setAuthUserDataAC(userId, email, login))
        }
    })
}

export default authReducer;