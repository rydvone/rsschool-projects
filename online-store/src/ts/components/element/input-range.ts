import { Input } from './input';

const ELEMENT_TYPE = 'range';

export class InputRange extends Input {
  private _value: number;
  constructor() {
    super();
    super.setType(ELEMENT_TYPE);
    this._value = 0;
  }

  get value() {
    return parseInt(super._inputElement.value);
  }

  set value(val: number) {
    super._inputElement.value = `${val}`;
  }

  get min() {
    return parseInt(super._inputElement.min);
  }

  set min(min: number) {
    super._inputElement.min = `${min}`;
  }

  get max() {
    return parseInt(super._inputElement.max);
  }

  set max(max: number) {
    super._inputElement.min = `${max}`;
  }
}
