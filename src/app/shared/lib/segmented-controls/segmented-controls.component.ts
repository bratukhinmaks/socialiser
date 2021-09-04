import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'wm-segmented-controls',
  templateUrl: 'segmented-controls.component.html',
  styleUrls: ['./segmented-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WmSegmentedControlsComponent {
  @Input() itemWidthPx = 95;
  @Input() selected: string;
  @Input() options: string[];
  @Output() selectedChange: EventEmitter<string> = new EventEmitter();

  changeSelected(selected: string): void {
    this.selected = selected;
    this.selectedChange.emit(this.selected);
  }
}
