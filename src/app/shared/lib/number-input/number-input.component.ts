import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

type OnTouchFn = () => void;
type OnChangeFn = (value: number) => void;

@Component({
  selector: 'wm-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WmNumberInputComponent),
      multi: true,
    },
  ],
})
export class WmNumberInputComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;

  @Input() showMask = false;
  @Input() maskValue: string;

  @Input() invalidate = false;
  @Input() errorText: string;

  public value: number;
  public maskVisible = false;

  private onChange: OnChangeFn = () => null;
  public onTouch: OnTouchFn = () => null;

  public writeValue(value: number): void {
    this.value = value;
    this.maskVisible = true;
  }

  public onValueChange(value: number): void {
    this.value = value;
    this.onChange(value);
  }

  public registerOnChange(fn: OnChangeFn): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: OnTouchFn): void {
    this.onTouch = fn;
  }

  public onBlur(): void {
    this.onTouch();
    this.maskVisible = true;
  }

  public onFocus(): void {
    this.maskVisible = false;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
