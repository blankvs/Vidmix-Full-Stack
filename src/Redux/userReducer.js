

const initialState = {
    user: {},
    isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT = 'LOGOUT'

export function loginUser(userObj){
    return{
        type: LOGIN_USER,
        payload: userObj,
    }
}

export function logout(){
    return{
        type: LOGOUT,
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, user: action.payload, isLoggedIn: true}
        case LOGOUT: 
            return initialState
    }
}