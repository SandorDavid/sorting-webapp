import { ActionReducerMap } from '@ngrx/store/';

import * as fromAuth from '../auth/store/auth.reducers';
import * as fromCore from './core.reducer';

export interface AppState{
    auth: fromAuth.AuthState,
    core: fromCore.CoreState,
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
    core: fromCore.coreReducer
}