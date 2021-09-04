import { Component, Input, TemplateRef } from '@angular/core';
import { TooltipPosition, TooltipType } from '../wm-ng-components.models';

@Component({
  selector: 'wm-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class WmToolTipComponent {
  @Input() arrowPosition: TooltipPosition;
  @Input() text: string;
  @Input() title?: string;
  @Input() contentTemplate: TemplateRef<any>;
  @Input() maxWidth?: string;
  @Input() type?: TooltipType;
}
