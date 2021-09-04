import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface ModuleConfig {
  translations: {
    prefix: string;
    defaultLanguage?: string;
  };
  languageCode$: Observable<string>;
  numberLocale$: Observable<string>;
  dateLocale$: Observable<string>;
  currency$?: Observable<string>;
  /** @deprecated - to be removed. Applications should use a theme from mode$ instead */
}

export const MODULE_CONFIG = new InjectionToken<ModuleConfig>('ModuleConfig');
