import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';

import { FormFieldModule, InputModule, PasswordModule } from '@app/shared/controls';
import { ButtonModule } from '@app/shared/buttons';
import { SpinnerModule } from '@app/shared/indicators';


@NgModule({
    declarations: [RegistrationComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormFieldModule,
        InputModule,
        PasswordModule,
        ButtonModule,
        SpinnerModule
    ],
    exports:[RegistrationComponent]
})
export class RegistrationModule { }
