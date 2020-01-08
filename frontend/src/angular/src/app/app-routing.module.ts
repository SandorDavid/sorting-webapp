import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInAndUpComponent } from './auth/sign-in-and-up/sign-in-and-up.component';
import { SortingComponent } from './sorting/sorting/sorting.component';
import { AuthGuard } from './auth/auth-guard.service';


const routes: Routes = [
  // {path:'', component: SortingComponent},

  {path:'', component: SignInAndUpComponent},
  {path:'sorting', component: SortingComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
