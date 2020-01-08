import * as CoreActions from './core.actions';

export interface CoreState {}
const initialState : CoreState = {};

export function coreReducer(state: CoreState = initialState, action: CoreActions.CoreActions){
    switch (action.type) {
        default: return state;
    }
}