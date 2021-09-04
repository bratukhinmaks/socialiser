import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wm-data-button',
  templateUrl: './data-button.component.html',
  styleUrls: ['./data-button.component.scss'],
})
export class WmDataButtonComponent {
  @Input() data: string;
  @Input() source: string;
  @Input() answer: string;
  @Input() disabled: boolean;
  @Output() removeClick = new EventEmitter<void>();
  @Output() dataButtonClick = new EventEmitter<void>();

  onRemoveClick(event: MouseEvent): void {
    event.stopPropagation();
    this.removeClick.emit();
  }

  onDataButtonClick(event: MouseEvent): void {
    event.stopPropagation();

    if (this.disabled) {
      return;
    }

    this.dataButtonClick.emit();
  }
}
