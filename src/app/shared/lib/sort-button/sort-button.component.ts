import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { WM_SORT_OPTION } from './sort-button.model';

@Component({
  selector: 'wm-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WmSortButtonComponent {
  @Input() sort: WM_SORT_OPTION;
  @Output() sortChange: EventEmitter<WM_SORT_OPTION> = new EventEmitter();
  buttons = [
    { icon: 'chevron-up', selectedState: WM_SORT_OPTION.UP },
    { icon: 'chevron-down', selectedState: WM_SORT_OPTION.DOWN },
  ];

  onSortChange(selected: WM_SORT_OPTION): void {
    this.sort = selected;
    this.sortChange.emit(this.sort);
  }
}
