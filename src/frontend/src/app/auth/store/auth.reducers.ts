import * as AuthActions  from './auth.actions';

export interface AuthState {
    isSignUpMode: boolean;
    authenticated: boolean;
    token: string;
}

const initialState: AuthState = {
    isSignUpMode: false,
    authenticated: false,
    token: null
}

export function authReducer(state: AuthState = initialState, action: AuthActions.AuthActions){
    switch (action.type) {
        case (AuthActions.SWITCH_BETWEEN_SIGN_IN_AND_UP_MODE):
            return {
                ...state,
                isSignUpMode: !state.isSignUpMode
            }
        case (AuthActions.SET_AUTHENTICATED):
            return {
                ...state,
                authenticated: true
            };
        case (AuthActions.SET_TOKEN):
        return {
            ...state,
            token: action.payload
        };
        case (AuthActions.SIGN_OUT):
            return {
                ...state,
                token: null,
                authenticated: false
            };
        default:
            return state;
    }
}