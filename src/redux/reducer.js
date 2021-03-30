const initialState = {
    username: '',
    profilePic: ''
}

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            return {
                type: '',
                payload: state
            }
        case LOGOUT_USER:
            return initialState;
        default:
            return state
    }

}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}


export function updateUser(user = {}) {
    return {
        type: '',
        payload: user
    }
    return {
        state
    }
}