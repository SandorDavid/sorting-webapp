import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { AppState } from './store/app.reducer';
import { AuthState } from './auth/store/auth.reducers';
import { style, state, trigger, transition, animate, query, animateChild, group } from '@angular/animations';

enum AuthenticationState {
  signIn = 'signIn',
  signUp = 'signUp',
  authenticated = 'authenticated'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    //Using explicit colors here, due to the retrieving of material theme colors being extremely hacky/impossible
    trigger('authenticationState', [
      state(AuthenticationState.authenticated, style({
        'background-color': '#1e88e5'
      })),
      state(AuthenticationState.signIn, style({
        'background-color': '#5E35B1'
      })),
      state(AuthenticationState.signUp, style({
        'background-color': '#F57F17'
      })),
      transition('* <=> *', [
        group([
          query("@*", [animateChild()], {optional: true}),
          animate(800)
        ])
      ])
    ])
  ]
})
export class AppComponent {

  private authenticationState$: Observable<AuthenticationState>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.authenticationState$ = this.store
      .select('auth')
      .pipe(
        map((state: AuthState) =>{
          if (state.authenticated){
            return AuthenticationState.authenticated;
          } else if (state.isSignUpMode){
            return AuthenticationState.signUp
          } else{
            return AuthenticationState.signIn;
          }
        })
      )
  }
}
