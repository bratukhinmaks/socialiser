import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleConfig, MODULE_CONFIG } from './wm-ng-components.config';
import { GuideService } from './guide/guide.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  entryComponents: [],
  exports: [],
  providers: [],
})
export class WmNgComponentsCoreModule {
  static forRoot(configFactory: () => ModuleConfig): ModuleWithProviders<WmNgComponentsCoreModule> {
    return {
      ngModule: WmNgComponentsCoreModule,
      providers: [
        GuideService,
        {
          provide: MODULE_CONFIG,
          useFactory: configFactory,
        },
      ],
    };
  }
}
