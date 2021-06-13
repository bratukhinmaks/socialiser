import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {AuthMainComponent} from '@app/pages/auth/pages/auth-main/auth.main';
import {LoginModule} from '@app/pages/auth/pages/login/login.module';
import {RegistrationModule} from '@app/pages/auth/pages/registration/registration.module';
import {AuthRoutingModule} from '@app/pages/auth/auth-routing.module';
import {PlaceholderComponent} from '@app/pages/auth/pages/placeholder/placeholder.component';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AuthMainComponent, PlaceholderComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    LoginModule,
    RegistrationModule,
    AuthRoutingModule,
    MatIconModule,
  ]
})
export class AuthModule { }
