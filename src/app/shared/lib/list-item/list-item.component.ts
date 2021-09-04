import { Component, Input } from '@angular/core';

@Component({
  selector: 'wm-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class WmListItemComponent {
  @Input() selected = false;
  @Input() hasBorder = false;
  @Input() hasShadow = false;
  @Input() disabled = false;
  @Input() borderRadius = 0;
}
