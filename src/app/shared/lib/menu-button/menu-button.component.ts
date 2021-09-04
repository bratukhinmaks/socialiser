import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'wm-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
})
export class WmMenuButtonComponent {
  @Input() featherIcon = 'more-vertical';
  @Input() loading = false;
  @Input() title = null;
  @ViewChild(MatMenuTrigger, { static: true }) trigger: MatMenuTrigger;

  constructor(private cdk: ChangeDetectorRef) {}

  triggerChangeDetection(): void {
    this.cdk.detectChanges();
  }
}
