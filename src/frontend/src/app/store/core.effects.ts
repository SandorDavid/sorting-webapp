import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as CoreActions from './core.actions';
import { map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { SnackComponent } from '../util/snack/snack.component';

@Injectable()
export class CoreEffects {

    @Effect({dispatch: false})
    displayErrors$ = this.actions$
        .pipe(
            
            ofType(CoreActions.DISPLAY_ERRORS),

            map((action: CoreActions.DisplayErrors) => {
                return action.payload;
            }),
            
            tap((errList: Array<String>) => {
                this.snackBar.openFromComponent(SnackComponent, {
                    duration: 1000000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'center',
                    data: errList
                });
            })
        )
    
    constructor(private actions$: Actions,
                private snackBar: MatSnackBar){}
}