import { AbstractControl } from '@angular/forms';
import {NoWhitespaceValidator} from './noWhiteSpaceValidators.validator';

describe('Whitespace Validator', () => {

  let validatorFn = NoWhitespaceValidator();

  it('empty string is invalid', () => {
    let control = { value: '' };
    let result = validatorFn(control as AbstractControl);
    expect(result !== null).toBe(true);
    expect(result['valid']).toBe(false);
  });

  it('spaces only are invalid', () => {
    let control = { value: '    ' };
    let result = validatorFn(control as AbstractControl);
    expect(result !== null).toBe(true);
    expect(result['valid']).toBe(false);
  });

  it('null is valid', () => {
    let control: any = { value: null };
    let result = validatorFn(control as AbstractControl);
    expect(result).toBe(null);
  });

  it('text is not considered valid', () => {
    let control = { value: 'i have whitespace on the inside' };
    let result = validatorFn(control as AbstractControl);
    expect(result).toBe(null);
  });

});
