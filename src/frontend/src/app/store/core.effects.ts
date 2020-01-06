import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import * as CoreActions from './core.actions';
import { map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { SnackComponent } from '../util/snack/snack.component';

@Injectable()
export class CoreEffects {

    @Effect({dispatch: false})
    displayErrors$ = this.actions$
        .pipe(
            
            ofType(CoreActions.DISPLAY_SNACK_MESSAGES),

            map((action: CoreActions.DisplaySnackMessages) => {
                return action.payload;
            }),
            
            tap((errList: Array<String>) => {
                this.snackBar.openFromComponent(SnackComponent, {
                    duration: 8000,
                    verticalPosition: 'bottom',
                    horizontalPosition: 'center',
                    data: errList
                });
            })
        )
    
    @Effect({dispatch: false})
    hideErrorsOnNavigation$ = this.actions$
        .pipe(
            ofType(ROUTER_NAVIGATION),

            tap(() => this.snackBar.dismiss())
        )

    constructor(private actions$: Actions,
                private snackBar: MatSnackBar){}
}