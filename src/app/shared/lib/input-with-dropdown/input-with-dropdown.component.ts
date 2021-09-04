import { Component, ElementRef, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

type OnTouchFn = () => void;
type OnChangeFn = (value: string) => void;

@Component({
  selector: 'wm-input-with-dropdown',
  templateUrl: './input-with-dropdown.component.html',
  styleUrls: ['./input-with-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WmInputWithDropdownComponent),
      multi: true,
    },
  ],
})
export class WmInputWithDropdownComponent implements ControlValueAccessor, OnDestroy, OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() dropdownTitle: string;
  @Input() emptyTitle: string;
  @Input() emptyDescription: string;
  @Input() icon: string;
  @Input() maxLength: number;
  @Input() isLoading = false;
  @Input() disabled = false;

  public destroyed$ = new Subject();

  public value: string;
  public isDropdownOpen = false;

  public ngOnInit(): void {
    fromEvent(document, 'click')
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => (this.isDropdownOpen = false));
  }

  public ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private onChange: OnChangeFn = () => null;
  public onTouch: OnTouchFn = () => null;

  public writeValue(value: string): void {
    this.value = value || '';
  }

  public onValueChange(value: string): void {
    this.value = value;
    this.onChange(value);
  }

  public registerOnChange(fn: OnChangeFn): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: OnTouchFn): void {
    this.onTouch = fn;
  }

  public openDropdown(): void {
    this.isDropdownOpen = true;
  }

  public closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
