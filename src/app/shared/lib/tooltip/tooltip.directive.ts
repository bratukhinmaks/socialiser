import {
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import {
  ConnectionPositionPair,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { WmToolTipComponent } from './tooltip.component';
import { TooltipPosition, TooltipType } from '../wm-ng-components.models';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[wmTooltip]',
})
export class WmToolTipDirective implements OnInit, OnDestroy {
  @Input() showToolTip = true;
  @Input() position: TooltipPosition;
  @Input('wmTooltip') text: string;
  @Input() contentTemplate: TemplateRef<any>;
  @Input() maxWidth: string;
  @Input() title?: string;
  @Input() type?: TooltipType;

  private positionStrategy: FlexibleConnectedPositionStrategy;
  private bottom = new ConnectionPositionPair(
    { originX: 'center', originY: 'bottom' },
    { overlayX: 'center', overlayY: 'top' }
  );
  private top = new ConnectionPositionPair(
    { originX: 'center', originY: 'top' },
    { overlayX: 'center', overlayY: 'bottom' }
  );
  private right = new ConnectionPositionPair(
    { originX: 'end', originY: 'center' },
    { overlayX: 'start', overlayY: 'center' }
  );
  private left = new ConnectionPositionPair(
    { originX: 'start', originY: 'center' },
    { overlayX: 'end', overlayY: 'center' }
  );

  private overlayRef: OverlayRef;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) {}

  ngOnDestroy(): void {
    this.closeToolTip();
  }

  ngOnInit(): void {
    const positions = this.getConnectionPositionPairs();
    this.positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions(positions);

    this.overlayRef = this.overlay.create({ positionStrategy: this.positionStrategy });
  }

  @HostListener('mouseenter')
  public show(): void {
    if (!this.overlayRef || this.overlayRef.hasAttached() || !this.showToolTip) {
      this.closeToolTip();
      return;
    }

    const tooltipRef: ComponentRef<WmToolTipComponent> = this.overlayRef.attach(
      new ComponentPortal(WmToolTipComponent)
    );

    tooltipRef.instance.text = this.text;
    tooltipRef.instance.title = this.title;
    tooltipRef.instance.contentTemplate = this.contentTemplate;
    tooltipRef.instance.maxWidth = this.maxWidth;
    tooltipRef.instance.type = this.type;

    this.positionStrategy.positionChanges.pipe(take(1)).subscribe(({ connectionPair }) => {
      tooltipRef.instance.arrowPosition = this.getArrowPosition(connectionPair);
      tooltipRef.changeDetectorRef.detectChanges();
    });
  }

  @HostListener('mouseleave')
  public hide(): void {
    this.closeToolTip();
  }

  private getConnectionPositionPairs(): ConnectionPositionPair[] {
    switch (this.position) {
      case TooltipPosition.LEFT:
        return [this.left];
      case TooltipPosition.RIGHT:
        return [this.right];
      case TooltipPosition.TOP:
        return [this.top];
      case TooltipPosition.BOTTOM:
        return [this.bottom];
      default:
        return [this.top, this.bottom, this.left, this.right];
    }
  }

  private getArrowPosition(tooltipPosition: ConnectionPositionPair): TooltipPosition {
    switch (tooltipPosition) {
      case this.left:
        return TooltipPosition.RIGHT;
      case this.right:
        return TooltipPosition.LEFT;
      case this.top:
        return TooltipPosition.BOTTOM;
      case this.bottom:
        return TooltipPosition.TOP;
    }
  }

  private closeToolTip(): void {
    if (!this.overlayRef) {
      return;
    }

    this.overlayRef.detach();
  }
}
