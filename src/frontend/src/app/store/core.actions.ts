import { Action } from '@ngrx/store';

export const DISPLAY_ERRORS = 'DISPLAY ERRORS';

export class DisplayErrors implements Action {
    readonly type = DISPLAY_ERRORS;

    constructor(public payload: Array<String>){}
}

export type CoreActions = DisplayErrors;