import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';

import { WmNgComponentsComponent } from './wm-ng-components.component';
import { WmWrapperComponent } from './wrapper/wrapper.component';
import { BoxWrapperComponent } from './box-wrapper/box-wrapper.component';
import { IconsModule } from './icons/icons.module';
import { WmInputComponent } from './input/input.component';
import { WmInputWithDropdownComponent } from './input-with-dropdown/input-with-dropdown.component';
import { WmNumberInputComponent } from './number-input/number-input.component';
import { WmSearchComponent } from './search/search.component';
import { WmTextareaComponent } from './textarea/textarea.component';
import { WmDatepickerHeaderComponent } from './datepicker-header/datepicker-header';
import { WmLoaderComponent } from './loader/loader.component';
import { WmArrowComponent } from './arrow/arrow.component';
import { WmGuideTooltipComponent } from './guide/guide-tooltip/guide-tooltip.component';
import { WmNavigationFooterComponent } from './navigation-footer/navigation-footer.component';
import { WmToolTipComponent } from './tooltip/tooltip.component';


import { WmToolTipDirective } from './tooltip/tooltip.directive';
import { WmNotificationComponent } from './notification/notification.component';
import { WmConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { WmConfirmationPopupService } from './confirmation-popup/confirmation-popup.service';
import { WmChipButtonComponent } from './chip-button/chip-button.component';
import { WmDataButtonComponent } from './data-button/data-button.component';
import { WmMenuButtonComponent } from './menu-button/menu-button.component';

import { WmListItemComponent } from './list-item/list-item.component';
import { WmFileUploadComponent } from './file-upload/file-upload.component';
import { WmSortButtonComponent } from './sort-button/sort-button.component';
import { WmSegmentedControlsComponent } from './segmented-controls/segmented-controls.component';
import { WmEmptyStateRectangleButtonComponent } from './empty-state-rectangle-button/empty-state-rectangle-button.component';
import { WmEmptyStateCircleButtonComponent } from './empty-state-circle-button/empty-state-circle-button.component';
import { WmBackButtonComponent } from './back-button/back-button.component';
import { WmArrowButtonComponent } from './arrow-button/arrow-button.component';
import { WmCardComponent } from './card/card.component';
import { WmDashedButtonComponent } from './dashed-button/dashed-button.component';
import { WmMultiselectItemsComponent } from './multiselect-items/multiselect-items.component';
import { WmMultiselectComponent } from './multiselect/multiselect.component';


const components = [
  WmNgComponentsComponent,
  BoxWrapperComponent,
  WmWrapperComponent,
  WmInputComponent,
  WmInputWithDropdownComponent,
  WmNumberInputComponent,
  WmSearchComponent,
  WmTextareaComponent,
  WmDatepickerHeaderComponent,
  WmLoaderComponent,
  WmArrowComponent,
  WmGuideTooltipComponent,
  WmToolTipComponent,
  WmNavigationFooterComponent,
  WmNotificationComponent,
  WmConfirmationPopupComponent,
  WmChipButtonComponent,
  WmDataButtonComponent,
  WmMenuButtonComponent,
  WmListItemComponent,
  WmFileUploadComponent,
  WmSortButtonComponent,
  WmSegmentedControlsComponent,
  WmEmptyStateRectangleButtonComponent,
  WmEmptyStateCircleButtonComponent,
  WmBackButtonComponent,
  WmArrowButtonComponent,
  WmCardComponent,
  WmDashedButtonComponent,
  WmMultiselectItemsComponent,
  WmMultiselectComponent
];



const directives = [ WmToolTipDirective];

const providers = [WmConfirmationPopupService];

@NgModule({
  declarations: [...components, ...directives],
  imports: [
    CommonModule,
    FormsModule,
    IconsModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatCheckboxModule,
    NgSelectModule
  ],
  entryComponents: [WmDatepickerHeaderComponent, WmToolTipComponent, WmConfirmationPopupComponent],
  exports: [...components, ...directives, TranslateModule],
  providers: [...providers],
})
export class WmNgComponentsSharedModule {}
