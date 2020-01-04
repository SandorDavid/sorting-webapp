import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { DisplayErrors } from 'src/app/store/core.actions';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse) => {
                if (error.status == 400) {
                    let err = error.error;
                    let errList : Array<String> = [];

                    if (err.errors) {
                        err.errors.forEach(element => {
                            errList.push(element.defaultMessage);
                        });
                    } else {
                        errList.push(err.message);    
                    }
                    
                    this.store.dispatch(new DisplayErrors(errList));
                }

                return throwError(error);
            })    
            
        )
    }

    constructor(private store: Store<AppState>){}
}