import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { AppState } from './store/app.reducer';
import { AuthState } from './auth/store/auth.reducers';
import { style, state, trigger, transition, animate, query, animateChild, group } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    //Using explicit colors here, due to the retrieving of material theme colors being extremely hacky/impossible
    trigger('isSignUpState', [
      state('false', style({
        'background-color': '#1e88e5'
      })),
      state('true', style({
        'background-color': '#ffeb3b'
      })),
      transition('false <=> true', [
        group([
          query("@*", [animateChild()], {optional: true}),
          animate(800)
        ])
      ])
    ])
  ]
})
export class AppComponent {

  private isSignUpMode$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.isSignUpMode$ = this.store
      .select('auth')
      .pipe(
        map((state: AuthState) =>{
          return state.isSignUpMode;
        })
      )
  }
}
