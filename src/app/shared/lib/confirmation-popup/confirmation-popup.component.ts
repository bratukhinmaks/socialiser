import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { WmConfirmationPopupData } from './confirmation-popup.model';

@Component({
  selector: 'wm-confirmation-popup',
  templateUrl: 'confirmation-popup.component.html',
  styleUrls: ['confirmation-popup.component.scss'],
})
export class WmConfirmationPopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public confirmationPopupData: WmConfirmationPopupData) {}
}
