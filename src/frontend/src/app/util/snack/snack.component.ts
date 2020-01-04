import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snack-component',
  styleUrls: ['./snack.component.sass'],	
  template: `
    <ng-container [@messages] *ngFor="let message of data; let i = index">
      <div
        class="snack-component"
        fxLayout="row"
        fxLayoutAlign="space-evenly center"
      >
        <div fxFlex="90">
          {{ message }}
        </div>
    
        <button
          fxFlex="10"
          (click)="close(i)"
          mat-icon-button
        >
          <mat-icon>cancel</mat-icon>
        </button>
      </div>
    </ng-container>
  `
})
export class SnackComponent {
  
  constructor(
    public snackbar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public data: Array<String>,
  ) {}

  close(index: number){
    if (this.data.length > 1){
      this.data.splice(index, 1)
    } else {
      this.snackbar.dismiss();
    }
  }
  
}