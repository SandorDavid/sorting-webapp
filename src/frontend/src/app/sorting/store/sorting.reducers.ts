import * as SortingActions from './sorting.actions';

export interface SortingState {
    algorithmNames: Array<String>;
}

const initialState: SortingState = {
    algorithmNames: null
}

export function sortingReducer(state: SortingState = initialState, action: SortingActions.SortingActions) {
    switch(action.type) {
        case (SortingActions.FETCH_ALGORITHM_NAMES):
            return {
                ...state,
                algorithmNames: action.payload
            }
        default:
            return state;
    }

}