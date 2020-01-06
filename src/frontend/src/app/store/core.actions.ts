import { Action } from '@ngrx/store';

export const DISPLAY_SNACK_MESSAGES = 'DISPLAY SNACK_MESSAGES';

export class DisplaySnackMessages implements Action {
    readonly type = DISPLAY_SNACK_MESSAGES;

    constructor(public payload: Array<String>){}
}

export type CoreActions = DisplaySnackMessages;