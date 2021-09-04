import { Component, Input } from '@angular/core';

export enum ArrowColor {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  PRIMARY_ON_CONTRAST_BACKGROUND = 'primary-on-contrast-background',
  SECONDARY_ON_CONTRAST_BACKGROUND = 'secondary-on-contrast-background'
}

@Component({
  selector: 'wm-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.scss']
})
export class WmArrowComponent {
  @Input() size: number;
  @Input() color = ArrowColor.PRIMARY;
  @Input() isExpanded: boolean;
}
