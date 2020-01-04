import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { AuthState } from '../store/auth.reducers';
import { SwitchBetweenSignInAndUpMode } from '../store/auth.actions';

@Component({
  selector: 'app-sign-in-and-up',
  templateUrl: './sign-in-and-up.component.html',
  styleUrls: ['./sign-in-and-up.component.sass'],
  animations: [
    trigger('isSignUpState', [
      state('false', style({
        'opacity': '1',
      })),
      state('true', style({
        'opacity': '1'
      })),
      transition('false <=> true', [
        style({
          'opacity':'0'
        }),
        animate(800)
      ]),
    ])
  ]
})
export class SignInAndUpComponent implements OnInit {

  private hidePassword: boolean;
  private isSignUpMode$: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.hidePassword = true;
    this.isSignUpMode$ = this.store
      .select('auth')
      .pipe(
        map((state: AuthState) =>{
          return state.isSignUpMode;
        })
      )
  }

  onSwitchToggle(){
    this.store.dispatch(new SwitchBetweenSignInAndUpMode());
  }

  onSubmit(f: NgForm){
    console.log(f.value);
  }
}
