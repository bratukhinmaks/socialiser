import {
  OnDestroy,
  ChangeDetectorRef,
  Inject,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'wm-datepicker-header',
  templateUrl: './datepicker-header.html',
  styleUrls: ['./datepicker-header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WmDatepickerHeaderComponent<D> implements OnDestroy {
  private destroyed = new Subject<void>();

  constructor(
    @Inject(MAT_DATE_FORMATS) private dateFormats: MatDateFormats,
    private calendar: MatCalendar<D>,
    private dateAdapter: DateAdapter<D>,
    private cdr: ChangeDetectorRef
  ) {
    calendar.stateChanges.pipe(takeUntil(this.destroyed)).subscribe(() => cdr.markForCheck());
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  get periodLabel() {
    return this.dateAdapter.format(
      this.calendar.activeDate,
      this.dateFormats.display.monthYearA11yLabel
    );
  }

  previousClicked() {
    this.calendar.activeDate =
      this.calendar.currentView === 'multi-year' || this.calendar.currentView === 'year'
        ? this.dateAdapter.addCalendarYears(this.calendar.activeDate, -1)
        : this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1);
  }

  nextClicked() {
    this.calendar.activeDate =
      this.calendar.currentView === 'multi-year' || this.calendar.currentView === 'year'
        ? this.dateAdapter.addCalendarYears(this.calendar.activeDate, 1)
        : this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1);
  }
}
