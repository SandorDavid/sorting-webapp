import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';

import { SignInAndUpComponent } from './sign-in-and-up/sign-in-and-up.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [SignInAndUpComponent],
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule
    ],
    providers: [],
})
export class AuthModule{

}