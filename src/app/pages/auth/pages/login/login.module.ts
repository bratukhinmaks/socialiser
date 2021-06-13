import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { FormFieldModule, InputModule, PasswordModule } from '@app/shared/controls';
import { ButtonModule } from '@app/shared/buttons';
import { SpinnerModule } from '@app/shared/indicators';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormFieldModule,
        InputModule,
        PasswordModule,
        ButtonModule,
        SpinnerModule
    ],
    exports: [LoginComponent]
})
export class LoginModule { }
