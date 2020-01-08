import { Action } from '@ngrx/store';
import { User } from '../user.model';

export const SWITCH_BETWEEN_SIGN_IN_AND_UP_MODE = 'SWITCH_BETWEEN_SIGN_IN_AND_UP_MODE';
export const TRY_SIGN_IN_OR_UP = 'TRY_SIGN_IN_OR_UP';
export const SET_AUTHENTICATED = 'SET_AUTHENTICATED';
export const SET_TOKEN = 'SET_TOKEN';
export const SIGN_OUT = 'SIGN_OUT';


export class SwitchBetweenSignInAndUpMode implements Action {
  readonly type = SWITCH_BETWEEN_SIGN_IN_AND_UP_MODE;
}

export class TrySignInOrUp implements Action {
  readonly type = TRY_SIGN_IN_OR_UP;

  constructor(public payload: User) {}
}

export class SetAuthenticated implements Action {
  readonly type = SET_AUTHENTICATED;
}

export class SignOut implements Action {
  readonly type = SIGN_OUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}
}

export type AuthActions = SwitchBetweenSignInAndUpMode | TrySignInOrUp | SetAuthenticated | SetToken | SignOut;
