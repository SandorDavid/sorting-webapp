import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppState } from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { AuthState } from './store/auth.reducers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<AppState>, 
                private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        return this.store.select('auth')
            .pipe(
                map((state: AuthState) => {
                    if (!state.authenticated) {
                        this.router.navigate(['/']);
                    }
                    return state.authenticated;
                })
            )
    }
}