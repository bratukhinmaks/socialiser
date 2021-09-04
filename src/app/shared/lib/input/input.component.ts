import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

type OnTouchFn = () => void;
type OnChangeFn = (value: string) => void;

@Component({
  selector: 'wm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WmInputComponent),
      multi: true,
    },
  ],
})
export class WmInputComponent implements ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() maxLength: number;
  @Input() invalidate = false;
  @Input() errorText: string;

  @Output() focusEvent = new EventEmitter<FocusEvent>();
  @Output() blurEvent = new EventEmitter<FocusEvent>();

  public value: string;

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

  public handleFocus(event: FocusEvent): void {
    this.focusEvent.emit(event);
  }

  public handleBlur(event: FocusEvent): void {
    this.blurEvent.emit(event);
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
