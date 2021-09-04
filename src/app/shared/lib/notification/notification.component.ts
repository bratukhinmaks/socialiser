import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

export const NOTIFICATION_ANIMATION_DURATION = 400;

export enum Notification {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

@Component({
  selector: 'wm-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['notification.component.scss'],
  animations: [
    trigger('visibility', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(`${NOTIFICATION_ANIMATION_DURATION}ms ease-in`, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class WmNotificationComponent {
  @Output() closeClick: EventEmitter<void> = new EventEmitter();
  @Output() additionalClick: EventEmitter<void> = new EventEmitter();
  @Input() type: Notification = Notification.SUCCESS;
  @Input() additionalButtonText: string;
  @Input() additionalButtonIconName = 'rotate-ccw';
  @Input() showAdditional = false;
  @Input() closeButtonText: string;
  @Input() closeButtonIconName = 'x';
  @Input() showClose = true;

  Notification = Notification;

  onCloseClick(): void {
    this.closeClick.emit();
  }

  onAdditionalClick() {
    this.additionalClick.emit();
  }
}
