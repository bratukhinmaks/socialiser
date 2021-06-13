import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UnauthGuard, AuthGuard} from '@app/guards';
import {AuthMainComponent} from '@app/pages/auth/pages/auth-main/auth.main';
import {RegistrationComponent} from '@app/pages/auth/pages/registration/registration.component';
import {LoginComponent} from '@app/pages/auth/pages/login/login.component';


const routes: Routes = [
    {
        path: '', component: AuthMainComponent, children: [
            {
                path: 'login',
                data: {type: 'login'},
                component: LoginComponent,
                canActivate: [UnauthGuard]
            },
            {
                path: 'registration',
                data: {type: 'registration'},
                component: RegistrationComponent,
                canActivate: [UnauthGuard]
            },
        ]
    },
    {
        path: 'email-confirm',
        loadChildren: () => import('./pages/email-confirm/email-confirm.module').then(m => m.EmailConfirmModule),
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
