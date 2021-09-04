import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, take, withLatestFrom } from 'rxjs/operators';

import { ModuleConfig, MODULE_CONFIG } from '../wm-ng-components.config';

interface TourConfig {
  scroll?: boolean;
  toursIds?: string[];
  dontShowTourReminder?: boolean;
}

export const TOUR_REMINDER_TOOLTIP_ID = 'REMINDER_TOOLTIP';
export const DONT_SHOW_TOUR_REMINDER_LS_KEY = 'dontShowTourReminder';

@Injectable()
export class GuideService {
  public tooltipIds$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  public visibleTooltipId$: BehaviorSubject<string> = new BehaviorSubject(null);
  public afterCloseClick$: Subject<{ tooltipsIds: string[]; toursIds: string[] }> = new Subject();

  public visibleTooltipIndex$ = this.visibleTooltipId$.pipe(
    map((currentId) => this.tooltipIds$.value.findIndex((id) => id === currentId))
  );
  public isNext$ = this.visibleTooltipIndex$.pipe(
    map((index) => index < this.tooltipIds$.value.length - 1)
  );
  public isPrev$ = this.visibleTooltipIndex$.pipe(map((index) => index > 0));
  public tooltipsQuantity$ = this.tooltipIds$.pipe(map((ids) => ids.length));
  public scroll = false;
  public toursIds: string[];
  public dontShowTourReminder = false;

  constructor(@Optional() @Inject(MODULE_CONFIG) private config: ModuleConfig) {}

  public next(): void {
    this.isNext$
      .pipe(take(1), withLatestFrom(this.visibleTooltipIndex$))
      .subscribe(([isNext, index]) => {
        if (!isNext) {
          return;
        }

        this.visibleTooltipId$.next(this.tooltipIds$.value[index + 1]);
      });
  }

  public prev(): void {
    this.isPrev$
      .pipe(take(1), withLatestFrom(this.visibleTooltipIndex$))
      .subscribe(([isPrev, index]) => {
        if (!isPrev) {
          return;
        }

        this.visibleTooltipId$.next(this.tooltipIds$.value[index - 1]);
      });
  }

  public setVisibleTooltipId$(id: string): void {
    this.visibleTooltipId$.next(id);
  }

  public startTour(tooltipIds: string[], config?: TourConfig): void {
    this.tooltipIds$.next(tooltipIds);
    this.visibleTooltipId$.next(tooltipIds[0]);
    this.scroll = config?.scroll ?? this.scroll;
    this.toursIds = config?.toursIds ?? this.toursIds;
    this.dontShowTourReminder = !!config?.dontShowTourReminder;

    if (!this.config) {
      return;
    }
  }

  public endTour(): void {
    this.visibleTooltipId$.next(null);
    this.tooltipIds$.next([]);
  }

  public emitAfterCloseClick(): void {
    this.afterCloseClick$.next({ tooltipsIds: this.tooltipIds$.value, toursIds: this.toursIds });
  }

  public closeClick(): void {
    const isReminderVisible = this.visibleTooltipId$.value === TOUR_REMINDER_TOOLTIP_ID;

    this.emitAfterCloseClick();
    this.endTour();

    if (isReminderVisible) {
      return;
    }

    // it means that we are in home context
    if (!this.config) {
      this.showTourReminder();
      return;
    }
  }

  public showTourReminder(): void {
    const dontShowTourReminderLS = JSON.parse(localStorage.getItem(DONT_SHOW_TOUR_REMINDER_LS_KEY));

    if (dontShowTourReminderLS || this.dontShowTourReminder) {
      return;
    }

    this.visibleTooltipId$.next(TOUR_REMINDER_TOOLTIP_ID);
  }

  public dontShowTourReminderAgain(): void {
    localStorage.setItem(DONT_SHOW_TOUR_REMINDER_LS_KEY, String(true));
  }

  public hideTourReminder(): void {
    if (this.visibleTooltipId$.value !== TOUR_REMINDER_TOOLTIP_ID) {
      return;
    }

    this.endTour();
  }
}
