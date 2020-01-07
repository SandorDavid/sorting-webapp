import { Injectable, Component, Type } from "@angular/core";
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import * as CoreActions from './core.actions';
import { map, tap } from 'rxjs/operators';
import { MatSnackBar, MatDialog } from '@angular/material';
import { SnackComponent } from '../util/snack/snack.component';
import { ComponentType } from '@angular/cdk/portal';

@Injectable()
export class CoreEffects {

    @Effect({dispatch: false})
    displaySnackMessages$ = this.actions$
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
    displayDialog$ = this.actions$
        .pipe(
            ofType(CoreActions.DISPLAY_DIALOG),

            tap((displayDialog: CoreActions.DisplayDialog) => {
                this.dialog.open(displayDialog.dialogFiller)
            })
        )


    @Effect({dispatch: false})
    hideSnackMessagesOnNavigation$ = this.actions$
        .pipe(
            ofType(ROUTER_NAVIGATION),

            tap(() => this.snackBar.dismiss())
        )

    constructor(private actions$: Actions,
                private snackBar: MatSnackBar,
                private dialog: MatDialog){}
}