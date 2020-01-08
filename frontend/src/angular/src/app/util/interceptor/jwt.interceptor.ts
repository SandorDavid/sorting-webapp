import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.reducer';
import { AuthState } from '../../auth/store/auth.reducers';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private store: Store<AppState>){}

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        return this.store.select('auth')
            .pipe(
                take(1),
                switchMap((authState: AuthState) => {
                    if (authState.token) {
                        const cloned = req.clone({
                            headers: req.headers.set('Authorization',
                                'Bearer ' + authState.token)
                        });
            
                        return next.handle(cloned);
                    }
                    else {
                        return next.handle(req);
                    }
                })
            )
    }       
}