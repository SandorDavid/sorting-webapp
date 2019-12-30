import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInAndUpComponent } from './auth/sign-in-and-up/sign-in-and-up.component';


const routes: Routes = [
  {path:'', component: SignInAndUpComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
