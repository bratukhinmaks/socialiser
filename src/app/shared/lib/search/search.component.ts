import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

type OnTouchFn = () => void;
type OnChangeFn = (value: string) => void;

@Component({
  selector: 'wm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WmSearchComponent),
      multi: true,
    },
  ],
})
export class WmSearchComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  @Input() disabled = false;
  @Output() valueChange = new EventEmitter<string>();

  public valueHolder: string;
  set value(value) {
    this.valueHolder = value;
    this.valueChange.emit(value);
  }

  get value(): string {
    return this.valueHolder;
  }

  private onChange: OnChangeFn = (value: string) => null;
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

  public clear(): void {
    this.onValueChange('');
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
