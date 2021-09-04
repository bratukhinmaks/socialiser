import { Component, Output, EventEmitter, Input, ElementRef } from '@angular/core';

export enum ContainerPosition {
  FIXED = 'fixed',
  STATIC = 'static',
  ABSOLUTE = 'absolute',
}

@Component({
  selector: 'wm-navigation-footer',
  templateUrl: './navigation-footer.component.html',
  styleUrls: ['./navigation-footer.component.scss'],
})
export class WmNavigationFooterComponent {
  @Input() backDisabled = false;
  @Input() backText = 'Back';
  @Input() containerPosition: ContainerPosition = ContainerPosition.FIXED;
  @Input() continueDisabled = false;
  @Input() continueDisabledTooltip: string;
  @Input() continueText = 'Continue';
  @Input() errorText: string;
  @Input() isBack = true;
  @Input() isContinue = true;
  @Input() continueShowTooltip: boolean;
  @Input() continueTooltipTemplate: ElementRef;

  @Output() back = new EventEmitter<void>();
  @Output() continue = new EventEmitter<void>();

  public onGoBack(): void {
    this.back.emit();
  }

  public onContinue(): void {
    this.continue.emit();
  }
}
