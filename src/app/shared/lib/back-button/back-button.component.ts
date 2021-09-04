import { Component, Input } from '@angular/core';

@Component({
  selector: 'wm-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})

export class WmBackButtonComponent {
  @Input() initialText = 'Go back';
  @Input() targetLocation: string;
}
