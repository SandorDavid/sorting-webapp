import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as SortingActions from './sorting.actions';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class SortingEffects {

    @Effect()
    fetchAlgorithmNames$ = this.actions$
        .pipe(
            ofType(SortingActions.TRY_FETCH_ALGORITHM_NAMES),

            switchMap(() => {
                return this.http.get<Array<String>>(environment.baseURL + '/sorting/get-algorithm-names')
            }),

            map((algorithmNames: Array<String>) => {
                return new SortingActions.FetchAlgorithmNames(algorithmNames);
            })
            
        )

    constructor(
        private actions$: Actions,
        private http: HttpClient
        ){}

}