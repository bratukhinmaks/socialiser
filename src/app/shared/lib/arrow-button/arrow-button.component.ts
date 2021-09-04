import { Component, Input } from '@angular/core';

export enum ARROW_ORIENTATION {
  RIGHT = 'right',
  LEFT = 'left',
  UP = 'up',
  DOWN = 'down'
}

@Component({
  selector: 'wm-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.scss'],
})
export class WmArrowButtonComponent {
  @Input() orientation = ARROW_ORIENTATION.RIGHT;
}
