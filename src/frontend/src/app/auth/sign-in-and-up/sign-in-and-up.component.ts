import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-and-up',
  templateUrl: './sign-in-and-up.component.html',
  styleUrls: ['./sign-in-and-up.component.sass']
})
export class SignInAndUpComponent implements OnInit {

  hidePassword: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
