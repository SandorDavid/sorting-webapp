import { NgModule } from '@angular/core';
import { AlgoNameFormatter } from './algo-name-formatter.pipe';
import { SortedOutputFormatter } from './sorted-output-formatter.pipe';
import { SortingComponent, InfoDialog } from './sorting/sorting.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../util/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        SortingComponent,
        InfoDialog,
        AlgoNameFormatter,
        SortedOutputFormatter
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        AngularMaterialModule
    ],
    providers: [],
    entryComponents: [InfoDialog]
})
export class SortingModule {

}