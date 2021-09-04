import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import {DevexpressModule} from '@app/shared/devexpress/devexpress.module';
import {TranlateSharedModule} from '@app/shared/translation/translation.lazy.module';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DevexpressModule,
    TranlateSharedModule.forRoot(),
    WelcomeRoutingModule,
    NgSelectModule
  ],
})
export class WelcomeModule { }
