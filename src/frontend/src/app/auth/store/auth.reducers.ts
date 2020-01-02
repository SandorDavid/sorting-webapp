import * as AuthActions  from './auth.actions';

export interface State {
    authenticated: boolean;
    token: string;
}

const initialState: State = {
    authenticated: false,
    token: null
}

export function authReducer(state: State = initialState, action: AuthActions.AuthActions){
    switch (action.type) {
        case (AuthActions.LOGIN):
        return {
            ...state,
            authenticated: true
        };
        case (AuthActions.LOGOUT):
        return {
            ...state,
            token: null,
            authenticated: false
        };
        case (AuthActions.SET_TOKEN):
        return {
            ...state,
            token: action.payload
        };
        default:
        return state;
    }
}