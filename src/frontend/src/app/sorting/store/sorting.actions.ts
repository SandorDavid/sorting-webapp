import { Action } from '@ngrx/store'

export const TRY_FETCH_ALGORITHM_NAMES = "TRY_FETCH_ALGORITHM_NAMES"
export const FETCH_ALGORITHM_NAMES = "FETCH_ALGORITHM_NAMES"

export class TryFetchAlgorithmNames implements Action {
    readonly type = TRY_FETCH_ALGORITHM_NAMES;
}

export class FetchAlgorithmNames implements Action {
    readonly type = FETCH_ALGORITHM_NAMES;

    constructor(public payload: Array<String>){}
}

export type SortingActions = TryFetchAlgorithmNames | FetchAlgorithmNames;