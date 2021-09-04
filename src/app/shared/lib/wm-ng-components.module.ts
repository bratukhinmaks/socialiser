import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WmConfirmationPopupService } from './confirmation-popup/confirmation-popup.service';
import { GuideService } from './guide/guide.service';

import { ModuleConfig, MODULE_CONFIG } from './wm-ng-components.config';
import { WmNgComponentsCoreModule } from './wm-ng-components.core.module';
import { WmNgComponentsSharedModule } from './wm-ng-components.shared.module';

export const providers = [WmConfirmationPopupService];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    WmNgComponentsCoreModule,
    WmNgComponentsSharedModule,
  ],
  exports: [
    WmNgComponentsCoreModule,
    WmNgComponentsSharedModule,
  ],
})
export class WmNgComponentsModule {
  static forRoot(configFactory: () => ModuleConfig): ModuleWithProviders<WmNgComponentsModule> {
    return {
      ngModule: WmNgComponentsModule,
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
