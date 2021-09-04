import { TemplateRef } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';

export type WmConfirmationPopupOptions = Exclude<MatDialogConfig, 'data'>;

export interface WmConfirmationPopupData {
  positiveButtonLabel: string;
  negativeButtonLabel: string;
  contentTemplate: TemplateRef<any>;
  hintContent?: string;
  positiveReturnData?: any;
  negativeReturnData?: any;
  templateContext?: { [key: string]: any };
}

const wmConfirmationPopupClass = 'wm-confirmation-popup';
const wmConfirmationPopupWidth = '422px';

export const wmConfirmationPopupOptions: WmConfirmationPopupOptions = {
  hasBackdrop: true,
  disableClose: true,
  panelClass: wmConfirmationPopupClass,
  width: wmConfirmationPopupWidth,
};
