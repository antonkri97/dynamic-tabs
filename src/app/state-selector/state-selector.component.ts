import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { State, states } from '../states';

@Component({
  selector: 'app-state-selector',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StateSelectorComponent),
      multi: true
    }
  ],
  template: `
    <select [name]="name" [(ngModel)]="value">
      <option *ngFor="let state of stateList" [value]="state.abbreviation">
        {{state.name}}
      </option>
    </select>
  `,
})
export class StateSelectorComponent implements ControlValueAccessor {
  @Input() name: string;
  @Input('value') val: string;


  stateList: State[] = states;
  // Both onChange and onTouched are functions
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this.val;
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }
  // We implement this method to keep a reference to the onChange
  // callback function passed by the forms API
  registerOnChange(fn) {
    this.onChange = fn;
  }
  // We implement this method to keep a reference to the onTouched
  //callback function passed by the forms API
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  // This is a basic setter that the forms API is going to use
  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }
}
