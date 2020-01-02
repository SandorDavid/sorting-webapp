import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { map, tap, switchMap, mergeMap, withLatestFrom } from 'rxjs/operators';

import { environment } from '../../../environments/environment'
import * as AuthActions from './auth.actions';
import { User } from '../user.model';
import { UserToken } from '../usertoken.model';
import { AuthState } from './auth.reducers';
import { AppState } from 'src/app/store/app.reducer';

@Injectable()
export class AuthEffects {
    
  @Effect()
  authSignin$ = this.actions$
    .pipe(

      ofType(AuthActions.TRY_SIGN_IN_OR_UP),

      map((action: AuthActions.TrySignInOrUp) => {
        return action.payload;
      }),

      withLatestFrom(this.store.select('auth')),

      switchMap(([authData, state]: [User, AuthState]) => {
        const isSignUpMode = state.isSignUpMode;
        return this.http.post<UserToken>(environment.baseURL + 'authenticate', authData)
      }),

      mergeMap((token: UserToken) => {
        return [
          {
            type: AuthActions.SET_AUTHENTICATED
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: token.jwttoken
          }
        ];
      })

    );

  
  @Effect({dispatch: false})
  authLogout$ = this.actions$
      .pipe(

        ofType(AuthActions.SIGN_OUT),

        tap(() => {
          this.router.navigate(['/']);
        })

      )

  constructor(
    private actions$: Actions, 
    private router: Router, 
    private http: HttpClient,
    private store: Store<AppState>
    ) {
  }
}
