import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SortingService } from '../sorting.service';
import { SortingResponse } from '../sorting.DTO.model';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { DisplaySnackMessages } from 'src/app/store/core.actions';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.sass']
})
export class SortingComponent implements OnInit {

  algorithmNames$: Observable<String[]>;
  sortingForm: FormGroup;
  sortingResponse$: Observable<SortingResponse>;
  
  constructor(private sortingService: SortingService, private store: Store<AppState>) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.algorithmNames$ = this.sortingService.getAlgorithmNames$();

    this.sortingForm = new FormGroup({
      'toSort': new FormControl('', Validators.required),
      'algorithm': new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    this.sortingResponse$ = this.sortingService.getSortedList$(this.sortingForm.value)
      .pipe(
        tap((resp: SortingResponse) => {
          this.store.dispatch(new DisplaySnackMessages(
            ['The sorter finished in ' + resp.executionTime + ' nanoseconds!']
          ))
        })
      )
  }

}
