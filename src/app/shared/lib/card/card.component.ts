import { Input, Component, Output, EventEmitter } from '@angular/core';
import { CardType } from '../wm-ng-components.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class WmCardComponent {
  @Input() type: CardType;
  @Input() item?: any;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() description?: string;
  @Input() imagePath?: string;
  @Input() icon?: string;
  @Input() showIcon?: boolean;
  @Input() selected?: boolean;
  @Input() tagline?: string;
  @Output() iconClicked = new EventEmitter<any>();

  public onClick(): void {
    this.iconClicked.emit(this.item);
  }
}
