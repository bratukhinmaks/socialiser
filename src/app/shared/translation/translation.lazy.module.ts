import {ModuleWithProviders, NgModule} from '@angular/core';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '@app/app.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({})
export class TranlateSharedModule {
    static forRoot(): ModuleWithProviders<TranslateModule> {
        return TranslateModule.forChild({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            });
  }
}
