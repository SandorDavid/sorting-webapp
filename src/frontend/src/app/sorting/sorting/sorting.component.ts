import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { SortingService } from '../sorting.service';
import { SortingResponse } from '../sorting.DTO.model';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { DisplaySnackMessages, DisplayDialog } from 'src/app/store/core.actions';
import { SignOut } from 'src/app/auth/store/auth.actions';

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

  signOut(){
    this.store.dispatch(new SignOut());
  }

  openDialog(){
    this.store.dispatch(new DisplayDialog(InfoDialog));
  }

}

@Component({
  selector: 'app-info-dialog',
  styleUrls: [],
  template: `
    <h1 mat-dialog-title>Tips & Hints</h1>
    <div mat-dialog-content>
      <mat-list>
        <mat-list-item *ngFor="let info of infos">
          <mat-icon matListIcon>bubble_chart</mat-icon>
          <span>{{info}}</span>
        </mat-list-item>
      </mat-list>
    </div>  
  `
})
export class InfoDialog {
  readonly infos = [
    "Type in some elements, choose an algorithm, then press Let's sort!",
    "Currently, valid elements are Integers, Decimals and Strings",
    "You can use spaces and line separators to divide elements",
    "The more elements you sort, the less the noise in execution time!"
  ]
}
