import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WM_COLORS } from '../wm-ng-components.models';

@Component({
  selector: 'wm-chip-button',
  templateUrl: './chip-button.component.html',
  styleUrls: ['./chip-button.component.scss'],
})
export class WmChipButtonComponent {
  @Input() circleRadius = 4;
  @Input() circleColor = WM_COLORS.wmYellow3;
  @Input() text: string;
  @Input() active = false;
  @Input() disabled = false;
  @Output() chipClick: EventEmitter<void> = new EventEmitter();

  public circleDiameter = this.circleRadius * 2;
  public circleViewBox = `0 0 ${this.circleDiameter} ${this.circleDiameter}`;
  public wmColors = WM_COLORS;

  onChipClick(): void {
    if (this.disabled) {
      return;
    }

    this.active = !this.active;
    this.chipClick.emit();
  }
}
