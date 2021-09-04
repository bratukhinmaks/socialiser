import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

type OnTouchFn = () => void;
type OnChangeFn = (value: any) => void;

@Component({
  selector: 'wm-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: WmMultiselectComponent,
      multi: true,
    },
  ],
})
export class WmMultiselectComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  @Input() searchPlaceholder: string;
  @Input() selectAllLabel: string;
  @Input() disabled = false;
  @Input() bindValue: string;
  @Input() bindLabel: string;
  @Input() items: NgSelectComponent['items'];
  @Output() valueChange = new EventEmitter<string>();

  public valueHolder: string;
  set value(value) {
    this.valueHolder = value;
    this.valueChange.emit(value);
  }

  get value(): string {
    return this.valueHolder;
  }

  public onChange: OnChangeFn = (value: any) => null;
  public onTouch: OnTouchFn = () => null;

  public registerOnChange(fn: OnChangeFn): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: OnTouchFn): void {
    this.onTouch = fn;
  }

  public writeValue(value: string): void {
    this.value = value || '';
  }

  public onValueChange(value: string): void {
    this.value = value;
    this.onChange(value);
  }

  public groupBy(): string {
    return '';
  }

  public setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}
