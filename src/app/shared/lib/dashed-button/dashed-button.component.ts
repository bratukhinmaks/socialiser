import { Component, Input } from '@angular/core';

@Component({
  selector: 'wm-dashed-button',
  templateUrl: './dashed-button.component.html',
  styleUrls: ['./dashed-button.component.scss'],
})
export class WmDashedButtonComponent {
  @Input() isAnimated = true;
  @Input() isWithoutActiveState = false;
  @Input() text: string;
  @Input() featherIconName: string;
  @Input() svgIconSource: string;
  @Input() svgActivateIconSource: string;

  RECT_SIZE_DIFFERENCE = 10;
}
