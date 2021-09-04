import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

type OnTouchFn = () => void;
type OnChangeFn = (value: string) => void;

@Component({
  selector: 'wm-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WmTextareaComponent),
      multi: true,
    },
  ],
})
export class WmTextareaComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() maxLength: number;
  @Input() disabled = false;
  @Input() invalidate = false;
  @Input() errorText: string;

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

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
