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
        if (state.isSignUpMode){
          return this.http.post<UserToken>(environment.baseURL + '/auth/sign-up', authData)
        } else {
          return this.http.post<UserToken>(environment.baseURL + '/auth/sign-in', authData)
        }
      }),

      mergeMap((tokenWrapper: UserToken) => {
        return [
          new AuthActions.SetAuthenticated(), 
          new AuthActions.SetToken(tokenWrapper.token)
        ];
      }),

      tap(() => {
        this.router.navigate(['/sorting']);
      })

    );

  @Effect({dispatch: false})
  authSignOut$ = this.actions$
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
