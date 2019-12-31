import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
      transition('* => *', [
        style({
          'opacity':'0'
        }),
        animate(800)
      ]),
    ])
  ]
})
export class SignInAndUpComponent implements OnInit {

  hidePassword: boolean = true;
  isSignUp: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    console.log(f.value);
  }
}
