import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.sass']
})
export class SortingComponent implements OnInit {

  sortingForm: FormGroup;
  algorithms = ['quick', 'merge'];
  
  constructor(store: Store<AppState>) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.sortingForm = new FormGroup({
      'toSort': new FormControl('', Validators.required),
      'algorithm': new FormControl('', Validators.required)
    })
  }

}
