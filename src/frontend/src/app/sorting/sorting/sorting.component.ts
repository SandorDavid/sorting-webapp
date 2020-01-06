import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Observable } from 'rxjs';
import { TryFetchAlgorithmNames } from '../store/sorting.actions';
import { SortingState } from '../store/sorting.reducers';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.sass']
})
export class SortingComponent implements OnInit {

  sortingForm: FormGroup;
  algorithmNames$: Observable<Array<String>>;
  
  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.getAlgorithmNames();
    this.initForm();
  }

  private initForm() {
    this.sortingForm = new FormGroup({
      'toSort': new FormControl('', Validators.required),
      'algorithm': new FormControl('', Validators.required)
    })
  }

  private getAlgorithmNames(){
    this.store.dispatch(new TryFetchAlgorithmNames());
    this.algorithmNames$ = this.store.select('sorting')
      .pipe(
        map((state: SortingState) => { return state.algorithmNames })
      )
  }

}
