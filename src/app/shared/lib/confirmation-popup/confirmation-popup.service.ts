import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

// Components
import { WmConfirmationPopupComponent } from './confirmation-popup.component';

// Models
import {
  WmConfirmationPopupOptions,
  WmConfirmationPopupData,
  wmConfirmationPopupOptions,
} from './confirmation-popup.model';

@Injectable({
  providedIn: 'root',
})
export class WmConfirmationPopupService {
  constructor(private dialog: MatDialog) {}

  open<T = {}>(
    dialogData: WmConfirmationPopupData,
    options?: WmConfirmationPopupOptions
  ): MatDialogRef<WmConfirmationPopupComponent> {
    return this.dialog.open<WmConfirmationPopupComponent, WmConfirmationPopupData>(
      WmConfirmationPopupComponent,
      {
        ...wmConfirmationPopupOptions,
        ...options,
        data: dialogData,
      }
    );
  }
}
