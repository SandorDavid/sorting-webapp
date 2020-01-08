import { Action } from '@ngrx/store';
import { ComponentType } from '@angular/cdk/portal';

export const DISPLAY_SNACK_MESSAGES = 'DISPLAY SNACK_MESSAGES';
export const DISPLAY_DIALOG = 'DISPLAY_DIALOG';

export class DisplaySnackMessages implements Action {
    readonly type = DISPLAY_SNACK_MESSAGES;

    constructor(public payload: Array<String>){}
}

export class DisplayDialog implements Action {
    readonly type = DISPLAY_DIALOG;

    constructor(public dialogFiller: ComponentType<any>) {}
}

export type CoreActions = DisplaySnackMessages | DisplayDialog;