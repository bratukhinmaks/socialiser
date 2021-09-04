import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { GuideService } from '../guide.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TooltipPosition } from '../../wm-ng-components.models';

@Component({
  selector: 'wm-guide-tooltip',
  templateUrl: 'guide-tooltip.component.html',
  styleUrls: ['guide-tooltip.component.scss'],
})
export class WmGuideTooltipComponent implements OnInit, OnDestroy {
  @ViewChild('tooltip') set tooltip(tooltip: ElementRef<HTMLElement>) {
    if (!tooltip || !this.guideService.scroll) {
      return;
    }

    tooltip.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  @Input() title: string;
  @Input() arrowPosition: TooltipPosition = TooltipPosition.LEFT;
  @Input() id: string;
  @Output() closeTooltip = new EventEmitter<void>();

  public isVisible = false;
  private unsubscribe$ = new Subject();
  public isNext$ = this.guideService.isNext$;
  public isPrev$ = this.guideService.isPrev$;
  public visibleTooltipIndex$ = this.guideService.visibleTooltipIndex$;
  public tooltipsQuantity$ = this.guideService.tooltipsQuantity$;

  constructor(private guideService: GuideService) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.listenVisibleTooltipId();
  }

  private listenVisibleTooltipId(): void {
    this.guideService.visibleTooltipId$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((visibleTooltipId) => {
        this.isVisible = this.id === visibleTooltipId;
      });
  }

  public close(): void {
    this.guideService.closeClick();
    this.closeTooltip.emit();
  }

  public next(): void {
    this.guideService.next();
  }

  public prev(): void {
    this.guideService.prev();
  }
}
