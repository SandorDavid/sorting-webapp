import { ActionReducerMap } from '@ngrx/store/';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

import * as fromAuth from '../auth/store/auth.reducers';
import * as fromCore from './core.reducer';
import * as fromSorting from '../sorting/store/sorting.reducers';

export interface AppState{
    router: RouterReducerState,
    auth: fromAuth.AuthState,
    core: fromCore.CoreState,
    sorting: fromSorting.SortingState
}

export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    auth: fromAuth.authReducer,
    core: fromCore.coreReducer,
    sorting: fromSorting.sortingReducer
}